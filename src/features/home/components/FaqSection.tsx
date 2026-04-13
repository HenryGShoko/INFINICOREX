'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How do you price your services?',
    answer: 'We scope every project individually. After an initial consultation, we provide a fixed-price quote for defined deliverables, or a monthly retainer for ongoing work. No hidden fees, no hourly billing surprises.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'It depends on scope. A marketing site takes 2-4 weeks. A custom web application is typically 6-12 weeks. An IT infrastructure overhaul can be 4-8 weeks. We give you a realistic timeline upfront and stick to it.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We are technology-agnostic. Our team works across modern web, mobile, backend, cloud, and data stacks — and will meet you on whatever platforms, languages, or tools your business already relies on. The choice is driven by your goals, your team, and what the problem actually needs — not by trends.',
  },
  {
    question: 'Do you work with businesses outside Zimbabwe?',
    answer: 'Yes. We serve clients across Southern Africa and internationally. Our team is set up for remote collaboration with regular video check-ins, shared project boards, and async communication.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer: 'We offer ongoing maintenance and support packages. Every project includes a handover with documentation. We stay available for bug fixes, feature additions, and scaling as your business grows.',
  },
  {
    question: 'Can you take over an existing codebase?',
    answer: 'Absolutely. We regularly inherit and improve existing systems. We start with a technical audit to assess the current state, then propose a roadmap for stabilisation and improvement.',
  },
  {
    question: 'How do we get started?',
    answer: 'Book a free consultation through the form on this page or message us on WhatsApp. We will discuss your needs, give you an honest assessment, and if we are a good fit, we will send a proposal within a few days.',
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-slate-900 pr-4">{item.question}</span>
        <ChevronDown
          className={`w-4.5 h-4.5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-[300px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-slate-600 leading-relaxed pr-8">{item.answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-slate-50">
      <Container narrow>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          subtitle="Straightforward answers to what businesses typically ask us before getting started."
        />

        <div className="rounded-2xl bg-white border border-slate-200 px-6 sm:px-8">
          {faqs.map((faq) => (
            <FaqAccordion key={faq.question} item={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
