import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BackToTop } from '@/components/ui/BackToTop';
import { getHomePageData } from '@/features/home/queries/get-home-data';

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { siteSettings, serviceCategories } = await getHomePageData();

  return (
    <>
      <Header settings={siteSettings} serviceCategories={serviceCategories} />
      <main className="flex-1 isolate">{children}</main>
      <Footer settings={siteSettings} serviceCategories={serviceCategories} />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
