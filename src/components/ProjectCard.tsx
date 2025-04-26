
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  client: string;
  year: string;
  linkUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  client,
  year,
  linkUrl,
  className
}: ProjectCardProps) => {
  return (
    <div className={cn(
      'group rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl',
      className
    )}>
      <div className="relative overflow-hidden h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <p className="text-white text-sm mb-2">{client} • {year}</p>
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {linkUrl && (
          <Button 
            asChild 
            variant="outline" 
            className="text-fructus-blue hover:bg-fructus-blue hover:text-white transition-colors"
          >
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Voir le projet <ExternalLink size={16} className="ml-2" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
