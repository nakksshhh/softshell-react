import React, { useEffect, useRef } from 'react';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload License Details',
    description: 'Provide information about your software licenses through our secure platform.',
    icon: Upload,
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'Get Instant Valuation',
    description: 'Our AI-powered system calculates the best market value for your licenses instantly.',
    icon: DollarSign,
    iconBg: 'bg-amber-100 dark:bg-amber-900',
    iconColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    id: 3,
    title: 'Get Paid Quickly',
    description: 'Accept our offer and receive payment through your preferred method within 48 hours.',
    icon: CheckCircle,
    iconBg: 'bg-green-100 dark:bg-green-900',
    iconColor: 'text-green-600 dark:text-green-400'
  }
];

const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 opacity-0 transition-opacity duration-1000 ease-out"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Turn your unused software licenses into cash in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              ref={el => itemRefs.current[index] = el}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`${step.iconBg} ${step.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <step.icon size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;