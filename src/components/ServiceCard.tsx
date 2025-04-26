
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'orange';
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color = 'blue',
  className 
}: ServiceCardProps) => {
  const colorClasses = {
    blue: 'border-fructus-blue bg-gradient-to-br from-white to-blue-50 shadow-blue-100/50',
    green: 'border-fructus-green bg-gradient-to-br from-white to-green-50 shadow-green-100/50',
    orange: 'border-fructus-orange bg-gradient-to-br from-white to-orange-50 shadow-orange-100/50'
  };

  const iconColors = {
    blue: 'text-fructus-blue bg-blue-100',
    green: 'text-fructus-green bg-green-100',
    orange: 'text-fructus-orange bg-orange-100'
  };

  const buttonColors = {
    blue: 'border-fructus-blue text-fructus-blue hover:bg-fructus-blue',
    green: 'border-fructus-green text-fructus-green hover:bg-fructus-green',
    orange: 'border-fructus-orange text-fructus-orange hover:bg-fructus-orange'
  };

  return (
    <div 
      className={cn(
        'group rounded-xl border p-6 transition-all duration-300 hover:shadow-lg',
        colorClasses[color],
        className
      )}
    >
      <div className={cn(
        'rounded-full w-14 h-14 flex items-center justify-center mb-4',
        iconColors[color]
      )}>
        <Icon size={28} />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Button 
        asChild 
        variant="outline" 
        className={cn(
          'group-hover:text-white transition-colors',
          buttonColors[color]
        )}
      >
        <Link to="/contact">En savoir plus</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
