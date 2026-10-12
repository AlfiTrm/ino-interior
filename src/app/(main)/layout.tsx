import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollMotion } from '@/components/layout/scroll-motion';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollMotion>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="content" tabIndex={-1} className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ScrollMotion>
  );
}
