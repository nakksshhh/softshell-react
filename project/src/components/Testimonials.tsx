import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. Their valuation was fair and the payment was processed within 24 hours. I highly recommend their service.",
    author: "Sarah Johnson",
    position: "IT Director",
    company: "Acme Technologies",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    quote: "After transitioning to cloud software, we had several expensive desktop licenses gathering dust. SoftSell helped us recoup nearly 65% of our original investment with minimal effort.",
    author: "Michael Chen",
    position: "CTO",
    company: "Innovate Solutions",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 transition-opacity duration-1000 ease-out"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who've successfully sold their software licenses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => itemRefs.current[index] = el}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Quote marks */}
                  <svg className="h-10 w-10 text-blue-400 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;