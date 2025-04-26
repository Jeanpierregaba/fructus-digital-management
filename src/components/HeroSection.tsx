
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-fructus-green opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 -left-12 w-64 h-64 bg-fructus-blue opacity-5 rounded-full"></div>
        <div className="absolute bottom-12 right-1/4 w-48 h-48 bg-fructus-orange opacity-5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-fructus-blue to-fructus-green bg-clip-text text-transparent">
                Transformation Numérique
              </span>
              <br />pour un avenir durable
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              FRUCTUS DIGITAL & MANAGEMENT vous accompagne dans votre transition numérique, écologique et technologique pour propulser votre entreprise vers l'avenir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-fructus-blue hover:bg-blue-800 text-white transition-colors"
              >
                <Link to="/services">Découvrir nos services</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-fructus-green text-fructus-green hover:bg-fructus-green hover:text-white transition-colors"
              >
                <Link to="/contact" className="flex items-center">
                  Consultation gratuite <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital transformation" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-8 -right-8 h-full w-full border-4 border-fructus-green rounded-lg z-0"></div>
          </div>
        </div>
        
        <div className="mt-20 mb-10 text-center animate-fade-in">
          <p className="text-gray-500 mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual client logos */}
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">CLIENT 1</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">CLIENT 2</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">CLIENT 3</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 font-medium">CLIENT 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
