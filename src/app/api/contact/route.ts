import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { consultationSchema } from '@/lib/validation/consultation';
import type { FormResponse } from '@/domain/contact/types';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO_EMAIL = process.env.CONTACT_EMAIL_TO || 'info@infinicorex.co.za';
const FROM_EMAIL = process.env.CONTACT_EMAIL_FROM || 'INFINICOREX <onboarding@resend.dev>';

export async function POST(request: Request): Promise<NextResponse<FormResponse>> {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid request body.' },
        { status: 400 },
      );
    }
    const result = consultationSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!errors[field]) errors[field] = [];
        errors[field].push(issue.message);
      }

      return NextResponse.json(
        { success: false, message: 'Please fix the form errors below.', errors },
        { status: 400 },
      );
    }

    const { fullName, email, companyName, serviceInterest, message } = result.data;

    if (resend) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New consultation request from ${fullName} — ${companyName}`,
        html: `
          <h2>New Consultation Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Company</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(companyName)}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Service</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(serviceInterest)}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px 12px">${escapeHtml(message).replace(/\n/g, '<br>')}</td></tr>
          </table>
        `,
      });
    } else {
      console.log('Resend not configured — consultation request:', result.data);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We'll be in touch within one business day.",
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
