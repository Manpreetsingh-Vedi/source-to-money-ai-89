
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold">$</span>
          </div>
          <h1 className="text-xl font-bold">
            Let<span className="gradient-text">AI</span>MakeMoney
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#methods" className="text-sm font-medium hover:text-primary transition-colors">
            Methods
          </a>
          <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#newsletter" className="text-sm font-medium hover:text-primary transition-colors">
            Newsletter
          </a>
        </nav>
        
        <div>
          <Button variant="outline" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
