
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Transform Your <span className="gradient-text">AI Knowledge</span> Into Income Streams
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover proven strategies to monetize AI tools and capabilities. From creating content to building applications, we'll show you how to leverage AI for profit in 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white" onClick={() => scrollToSection('methods')}>
              Explore Methods
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('resources')}>
              View Resources
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full -z-10"></div>
          <div className="bg-card border rounded-xl shadow-lg p-8 relative">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 animate-float">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path><path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path><line x1="12" y1="22" x2="12" y2="13"></line><path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Low Initial Investment</h3>
                <p className="text-muted-foreground">Start with minimal capital and scale as your AI business grows</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="12" cy="12" r="10"></circle><path d="m16 8-4 4-4-4"></path><path d="m16 16-4-4-4 4"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Sustainable Passive Income</h3>
                <p className="text-muted-foreground">Build AI-powered systems that generate revenue 24/7</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Infinitely Scalable</h3>
                <p className="text-muted-foreground">Leverage AI to grow your income exponentially with minimal effort</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
