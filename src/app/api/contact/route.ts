import { NextResponse } from 'next/server';
import { consultationSchema } from '@/lib/validation/consultation';
import type { FormResponse } from '@/domain/contact/types';

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

    // TODO: Integrate email delivery service (e.g., Resend, SendGrid)
    // For now, log the submission and return success
    console.log('Consultation request received:', result.data);

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We'll be in touch within one business day.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    );
  }
}
