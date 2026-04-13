const TESTIMONIALS = [
  {
    name: 'James Whitfield',
    role: 'Owner, Oakridge Goods',
    text: "PwT built our store from scratch in under 3 weeks. The checkout flow is seamless and our conversion rate jumped almost immediately. Couldn't be happier.",
    rating: 5,
  },
  {
    name: 'Rachel Monroe',
    role: 'Small Business Owner, Luminary Skincare',
    text: "We struggled with payment gateway issues for months. PwT integrated Stripe and Airwallex in days. Everything just works now — across currencies too.",
    rating: 5,
  },
  {
    name: 'Derek Callahan',
    role: 'Shop Owner, NovaBrew Co.',
    text: "Their digital marketing setup was exactly what we needed. Google Ads ROI improved within the first month. The team is responsive and knows their stuff.",
    rating: 5,
  },
  {
    name: 'Stephanie Holt',
    role: 'Owner, Vantage Supply',
    text: "Professional, fast, and transparent. PwT delivered everything on time and the post-launch support was genuinely helpful. Highly recommend the bundle.",
    rating: 5,
  },
  {
    name: 'Marcus Ellison',
    role: 'Seller, Trailhead Outdoors',
    text: "We went from zero online presence to a fully functional e-commerce site with payment processing in about a month. PwT made it painless.",
    rating: 5,
  },
  {
    name: 'Courtney Baxter',
    role: 'Boutique Owner, Finch & Co. Apparel',
    text: "The setup was thorough and well-documented. Our site has been running smoothly since launch with zero issues. Great experience overall.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">What Clients Say</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Trusted by <span className="font-ivyora italic font-normal">businesses worldwide</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
