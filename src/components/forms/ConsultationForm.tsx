'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { consultationSchema } from '@/lib/validation/consultation';
import type { FormResponse } from '@/domain/contact/types';

const serviceOptions = [
  { value: 'software-development', label: 'Software Development' },
  { value: 'web-app-development', label: 'Web App Development' },
  { value: 'mobile-app-development', label: 'Mobile App Development' },
  { value: 'software-testing-qa', label: 'Software Testing & QA' },
  { value: 'software-maintenance', label: 'Software Maintenance' },
  { value: 'planning-strategy', label: 'Planning & Strategy' },
  { value: 'ux-ui-design', label: 'UX/UI Design' },
  { value: 'it-support', label: 'IT Support' },
  { value: 'managed-it-services', label: 'Managed IT Services' },
  { value: 'hardware-software', label: 'Hardware & Software' },
  { value: 'business-internet', label: 'Business Internet' },
  { value: 'microsoft-tools', label: 'Microsoft Tools' },
  { value: 'it-security', label: 'IT Security' },
  { value: 'hosting', label: 'Hosting' },
  { value: 'other', label: 'Other' },
];

interface ConsultationFormProps {
  introText: string;
}

export function ConsultationForm({ introText }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    serviceInterest: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = consultationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      const data: FormResponse = await response.json();

      if (data.success) {
        setStatus('success');
        setServerMessage(data.message);
        setFormData({ fullName: '', email: '', companyName: '', serviceInterest: '', message: '' });
      } else {
        setStatus('error');
        setServerMessage(data.message);
        if (data.errors) {
          const fieldErrors: Record<string, string> = {};
          for (const [key, messages] of Object.entries(data.errors)) {
            fieldErrors[key] = messages[0];
          }
          setErrors(fieldErrors);
        }
      }
    } catch {
      setStatus('error');
      setServerMessage('Something went wrong. Please try again later.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-600 mb-4">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1.5">Request received</h3>
        <p className="text-sm text-slate-600 max-w-xs">{serverMessage}</p>
      </div>
    );
  }

  return (
    <div>
      {introText && (
        <p className="text-sm text-slate-600 mb-6">{introText}</p>
      )}

      {status === 'error' && serverMessage && (
        <div className="mb-5 rounded-xl bg-red-50 border border-red-100 px-4 py-3" role="alert">
          <p className="text-sm text-red-600">{serverMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} placeholder="Your full name" required />
          <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="you@company.com" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Company" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} placeholder="Your company" required />
          <Select label="Service interest" name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} error={errors.serviceInterest} options={serviceOptions} placeholder="Select a service" required />
        </div>
        <Textarea label="Message" name="message" value={formData.message} onChange={handleChange} error={errors.message} placeholder="Tell us about your project or needs..." required />
        <div className="pt-1">
          <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              'Send consultation request'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
