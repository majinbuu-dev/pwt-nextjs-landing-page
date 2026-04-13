'use client';
import { useEffect, useRef } from 'react';

const STEPS = [
  { n: 1, title: 'Discover', sub: 'Clarity From the Start', desc: 'We begin with a focused call to understand your goals, users, and product direction. This gives us shared direction before design or development begins.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', imgAlt: 'Video Call', reverse: false },
  { n: 2, title: 'Design & Build', sub: 'One Team. One Execution Flow.', desc: 'Design and development move forward within one team, working in parallel from the start. This reduces handoffs, shortens feedback cycles, and keeps delivery consistent.', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop', imgAlt: 'Design & Development', reverse: true },
  { n: 3, title: 'Launch & Scale', sub: 'Built to Grow Beyond Day One', desc: 'Following launch, the product is refined through structured updates and ongoing improvements to support long-term progress.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', imgAlt: 'Launch & Scale', reverse: false },
];

export default function WorkflowSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = document.querySelectorAll('.workflow-step');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          const dot = entry.target.querySelector('.timeline-dot > div') as HTMLElement;
          if (dot) { dot.classList.remove('bg-gray-300'); dot.classList.add('bg-gray-900'); }
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
    steps.forEach(s => observer.observe(s));

    const onScroll = () => {
      const tl = timelineRef.current, pr = progressRef.current;
      if (!tl || !pr) return;
      const rect = tl.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.top + rect.height > 0) {
        const p = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
        pr.style.height = `${p * 100}%`;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <section id="marketing" className="py-16 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4 md:mb-6">Workflow</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span className="font-ivyora italic">We Provide,</span> Done Simply<br />Delivered Fast.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Most founders waste months juggling freelancers or waiting on agencies. We move at startup speed. Here&apos;s exactly how we work together to get you investor-ready and launch-ready fast:
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden lg:block" />
          <div ref={progressRef} className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 bg-gray-900 hidden lg:block transition-all duration-300" style={{ height: '0%' }} />

          {STEPS.map((step, i) => (
            <div key={step.n} className="workflow-step relative mb-16 md:mb-32" data-step={step.n}
              style={{ opacity: 0, transform: 'translateY(80px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Content */}
                <div className={`${step.reverse ? 'lg:text-left order-1 lg:order-2' : 'lg:text-right order-2 lg:order-1'}`}>
                  <div className={`inline-block ${step.reverse ? 'lg:max-w-md' : 'lg:float-right lg:max-w-md'}`}>
                    <span className="text-sm tracking-wider text-gray-500 mb-2 block">Step {step.n}</span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-ivyora italic text-gray-900 mb-3 md:mb-4">{step.title}</h3>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{step.sub}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center timeline-dot">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-500">
                    <span className="text-white font-bold">{step.n}</span>
                  </div>
                </div>
                {/* Image */}
                <div className={`${step.reverse ? 'lg:pr-12 order-2 lg:order-1' : 'lg:pl-12 order-1 lg:order-2'}`}>
                  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.img} alt={step.imgAlt} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
