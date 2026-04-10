import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-white">
        <Container>
          <div className="text-center max-w-md mx-auto py-24">
            <div className="w-16 h-16 rounded-2xl bg-navy-950 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">404</span>
            </div>
            <h1 className="text-2xl font-bold tracking-[-0.02em] text-slate-900 mb-2">
              Page not found
            </h1>
            <p className="text-base text-slate-500 mb-8">
              The page you are looking for does not exist or has been moved.
            </p>
            <Button href="/" variant="primary" size="lg">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Button>
          </div>
        </Container>
      </main>
    </div>
  );
}
