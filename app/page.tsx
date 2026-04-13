import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ElevateSection from '@/components/ElevateSection';
import WorkflowSection from '@/components/WorkflowSection';
import PackageSection from '@/components/PackageSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ElevateSection />
        <WorkflowSection />
        <TestimonialsSection />
        <PackageSection />
      </main>
      <Footer />
    </>
  );
}
