
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MonetizationMethods from '@/components/MonetizationMethods';
import AutoUpdatingAIContent from '@/components/AutoUpdatingAIContent';
import Resources from '@/components/Resources';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MonetizationMethods />
      <AutoUpdatingAIContent />
      <Resources />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
