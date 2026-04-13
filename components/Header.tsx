'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScroll = useRef(0);
  const isVisible = useRef(true);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      const cur = window.pageYOffset;
      if (cur <= 50) {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
        header.classList.remove('bg-white', 'shadow-md');
      } else {
        header.classList.add('bg-white', 'shadow-md');
        if (cur > lastScroll.current && isVisible.current) {
          header.style.transform = 'translateY(-100%)';
          header.style.opacity = '0';
          isVisible.current = false;
        } else if (cur < lastScroll.current && !isVisible.current) {
          header.style.transform = 'translateY(0)';
          header.style.opacity = '1';
          isVisible.current = true;
        }
      }
      lastScroll.current = cur;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header ref={headerRef} id="header" className="sticky top-0 bg-none backdrop-blur-md z-[80] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            PwT <span className="font-ivyora italic">Tech Solutions</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <a href="/#ecommerce" className="text-black hover:text-gray-900 font-medium transition-colors">E-commerce Website</a>
            <span className="text-gray-300">|</span>
            <a href="/#payment-gateway" className="text-black hover:text-gray-900 font-medium transition-colors">Payment Gateway Integration</a>
            <span className="text-gray-300">|</span>
            <a href="/#marketing" className="text-black hover:text-gray-900 font-medium transition-colors">Digital Marketing</a>
            <a href="/#orderForm" className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Book a Free Consultation
            </a>
          </nav>
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-gray-700 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div onClick={closeMobile} className={`mobile-menu-backdrop fixed inset-0 bg-black bg-opacity-50 z-[90] md:hidden ${mobileOpen ? 'active' : ''}`} />

      {/* Mobile menu */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-[110] md:hidden overflow-y-auto ${mobileOpen ? 'active' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <Link href="/" className="text-xl font-bold">
              PwT <span className="font-ivyora italic">Tech Solutions</span>
            </Link>
            <button onClick={closeMobile} className="text-gray-700 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-1">
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Services</p>
              {[['/#ecommerce','E-commerce Website'],['/#payment-gateway','Payment Gateway Integration'],['/#marketing','Digital Marketing']].map(([href, label]) => (
                <a key={href} href={href} onClick={closeMobile} className="flex items-center gap-3 px-3 py-3 text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-all">{label}</a>
              ))}
            </div>
            <div className="mb-6">
              <a href="/#orderForm" onClick={closeMobile} className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-full font-semibold text-center hover:bg-gray-800 transition-all shadow-lg">
                Book Free Consultation
              </a>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Legal</p>
              {[
                ['/privacy-policy','Privacy Policy'],
                ['/terms-of-service','Terms of Service'],
                ['/legal-agreement','Legal Agreement'],
                ['/payment-refund-policy','Refund Policy'],
                ['/service-payment-policy','Service Policy'],
              ].map(([href, label]) => (
                <Link key={href} href={href} onClick={closeMobile} className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all text-sm">{label}</Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
