import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, PiggyBank, Award } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    description: 'Enterprise-grade security protocols protect your data and financial transactions.',
    icon: ShieldCheck,
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'Fast Processing',
    description: 'Get paid within 48 hours of accepting our offer, with no hidden delays.',
    icon: Clock,
    iconColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    id: 3,
    title: 'Best Market Rates',
    description: 'Our AI pricing engine ensures you get the highest possible value for your licenses.',
    icon: PiggyBank,
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 4,
    title: 'Certified Compliance',
    description: 'All transactions are fully compliant with software licensing regulations.',
    icon: Award,
    iconColor: 'text-purple-600 dark:text-purple-400'
  }
];

const WhyChooseUs: React.FC = () => {
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
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 transition-opacity duration-1000 ease-out"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose SoftSell</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide the most secure, transparent, and profitable way to resell software licenses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              ref={el => itemRefs.current[index] = el}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-5">
                <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;