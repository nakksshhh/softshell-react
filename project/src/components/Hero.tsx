import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-20 lg:pt-28 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute inset-0 opacity-30 dark:opacity-10 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
      
      <div ref={heroRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 transition-opacity duration-1000 ease-out">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
              Software License Marketplace
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Turn Unused Software into <span className="text-blue-600 dark:text-blue-400">Cash</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The easiest way to sell your unused or surplus software licenses at the best market rate, all in one secure platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get a Quote
              </a>
              <a href="#how-it-works"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg text-lg border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
                How It Works
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by companies like</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 dark:opacity-50">
              <div className="text-xl font-bold text-gray-500 dark:text-gray-400">ACME Inc.</div>
              <div className="text-xl font-bold text-gray-500 dark:text-gray-400">TechCorp</div>
              <div className="text-xl font-bold text-gray-500 dark:text-gray-400">GlobalSoft</div>
              <div className="text-xl font-bold text-gray-500 dark:text-gray-400">Innovate Ltd</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;