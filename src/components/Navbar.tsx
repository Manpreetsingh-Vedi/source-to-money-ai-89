
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="border-b py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Link to="/" className="font-bold text-lg flex items-center">
              <span className="gradient-text">LetAIMakeMoney</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/content-creation" className="text-muted-foreground hover:text-primary transition-colors">
              Content Creation
            </Link>
            <a href="#methods" className="text-muted-foreground hover:text-primary transition-colors">
              Monetization Methods
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors">
              Resources
            </a>
          </nav>
          
          <div>
            <Button variant="outline" size="sm" asChild>
              <a href="#newsletter">Join Newsletter</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
