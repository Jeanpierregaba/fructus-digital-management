
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Monitor, 
  Leaf, 
  BarChart3, 
  Briefcase, 
  Heart,
  UserCheck
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">
              Découvrez comment notre expertise peut transformer votre entreprise et accélérer votre croissance dans l'ère numérique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Transformation Numérique"
              description="Accompagnement complet pour digitaliser vos processus et moderniser votre infrastructure technologique."
              icon={Monitor}
              color="blue"
              className="animate-fade-in-up"
            />
            
            <ServiceCard 
              title="Économie Verte"
              description="Solutions innovantes pour réduire votre empreinte carbone et adopter des pratiques durables."
              icon={Leaf}
              color="green"
              className="animate-fade-in-up [animation-delay:200ms]"
            />
            
            <ServiceCard 
              title="Fintech"
              description="Services financiers numériques, blockchain et solutions de paiement innovantes pour votre entreprise."
              icon={BarChart3}
              color="orange"
              className="animate-fade-in-up [animation-delay:400ms]"
            />
            
            <ServiceCard 
              title="Gestion d'Entreprise"
              description="Conseil stratégique et opérationnel pour optimiser la performance de votre organisation."
              icon={Briefcase}
              color="blue"
              className="animate-fade-in-up [animation-delay:200ms]"
            />
            
            <ServiceCard 
              title="Marketing Digital"
              description="Stratégies de communication digitale sur mesure pour accroître votre visibilité et acquérir de nouveaux clients."
              icon={UserCheck}
              color="orange"
              className="animate-fade-in-up [animation-delay:400ms]"
            />
            
            <ServiceCard 
              title="Santé Numérique"
              description="Solutions technologiques innovantes pour le secteur médical et de la santé."
              icon={Heart}
              color="green"
              className="animate-fade-in-up [animation-delay:600ms]"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-fructus-blue text-fructus-blue hover:bg-fructus-blue hover:text-white transition-colors"
            >
              <Link to="/services" className="flex items-center">
                Tous nos services <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-fructus-blue mb-6">
                Pourquoi choisir FRUCTUS DIGITAL & MANAGEMENT ?
              </h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-fructus-blue flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expertise Multidisciplinaire</h3>
                    <p className="text-gray-600">
                      Notre équipe réunit des experts dans de multiples domaines technologiques et de gestion pour vous offrir des solutions complètes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-fructus-green flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Approche Durable</h3>
                    <p className="text-gray-600">
                      Nous intégrons des considérations environnementales dans toutes nos solutions pour assurer un développement durable.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-fructus-orange flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation Continue</h3>
                    <p className="text-gray-600">
                      Nous restons à la pointe des avancées technologiques pour vous proposer les solutions les plus innovantes et efficaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-fructus-blue flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Résultats Mesurables</h3>
                    <p className="text-gray-600">
                      Nous nous engageons à fournir des résultats concrets et mesurables pour votre entreprise, avec un retour sur investissement visible.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  asChild 
                  className="bg-fructus-blue hover:bg-blue-800 text-white transition-colors"
                >
                  <Link to="/about">En savoir plus sur nous</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute top-8 -left-8 h-full w-full border-4 border-fructus-orange rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fructus-blue to-fructus-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite de 30 minutes et découvrez comment nous pouvons vous aider.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-fructus-blue hover:bg-gray-100 transition-colors"
          >
            <Link to="/contact">Réserver ma consultation gratuite</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
