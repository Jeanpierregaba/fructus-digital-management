
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Leaf, 
  BarChart3, 
  Briefcase, 
  Heart, 
  UserCheck,
  Database,
  Shield,
  Code,
  Cpu,
  Cloud,
  Gift
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'transformation-numerique',
      title: 'Transformation Numérique',
      description: 'Accompagnement complet pour digitaliser vos processus et moderniser votre infrastructure technologique.',
      icon: Monitor,
      color: 'bg-blue-100 text-fructus-blue',
      details: [
        'Audit et conseil en transformation digitale',
        'Migration vers le cloud',
        'Automatisation des processus',
        'Solutions ERP et CRM personnalisées',
        'Intégration de l\'intelligence artificielle'
      ]
    },
    {
      id: 'economie-verte',
      title: 'Économie Verte',
      description: 'Solutions innovantes pour réduire votre empreinte carbone et adopter des pratiques durables.',
      icon: Leaf,
      color: 'bg-green-100 text-fructus-green',
      details: [
        'Analyse de l\'empreinte carbone',
        'Stratégie de développement durable',
        'Solutions d\'énergie renouvelable',
        'Gestion durable des ressources',
        'Certification environnementale'
      ]
    },
    {
      id: 'fintech',
      title: 'Fintech',
      description: 'Services financiers numériques, blockchain et solutions de paiement innovantes pour votre entreprise.',
      icon: BarChart3,
      color: 'bg-orange-100 text-fructus-orange',
      details: [
        'Solutions de paiement électronique',
        'Applications financières mobiles',
        'Implémentation de blockchain',
        'Automatisation des processus financiers',
        'Analyse des données financières'
      ]
    },
    {
      id: 'gestion-entreprise',
      title: 'Gestion d\'Entreprise',
      description: 'Conseil stratégique et opérationnel pour optimiser la performance de votre organisation.',
      icon: Briefcase,
      color: 'bg-blue-100 text-fructus-blue',
      details: [
        'Stratégie d\'entreprise',
        'Optimisation des opérations',
        'Gestion des ressources humaines',
        'Analyse financière et budgétaire',
        'Gestion de projet'
      ]
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital',
      description: 'Stratégies de communication digitale sur mesure pour accroître votre visibilité et acquérir de nouveaux clients.',
      icon: UserCheck,
      color: 'bg-orange-100 text-fructus-orange',
      details: [
        'Stratégie de contenu digital',
        'Référencement naturel (SEO)',
        'Campagnes publicitaires en ligne',
        'Marketing sur les réseaux sociaux',
        'Analyse des performances et optimisation'
      ]
    },
    {
      id: 'sante-numerique',
      title: 'Santé Numérique',
      description: 'Solutions technologiques innovantes pour le secteur médical et de la santé.',
      icon: Heart,
      color: 'bg-green-100 text-fructus-green',
      details: [
        'Télémédecine et solutions de consultation à distance',
        'Gestion des dossiers médicaux électroniques',
        'Applications mobiles de santé',
        'Systèmes d\'information hospitaliers',
        'Conformité RGPD pour les données de santé'
      ]
    },
    {
      id: 'cybersecurite',
      title: 'Cybersécurité',
      description: 'Protection de vos systèmes et données contre les menaces informatiques.',
      icon: Shield,
      color: 'bg-blue-100 text-fructus-blue',
      details: [
        'Audit de sécurité informatique',
        'Mise en place de solutions de protection',
        'Formation à la sécurité',
        'Gestion des incidents',
        'Conformité aux normes de sécurité'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Analyse de Données',
      description: 'Exploitation de vos données pour des insights stratégiques et opérationnels.',
      icon: Database,
      color: 'bg-orange-100 text-fructus-orange',
      details: [
        'Big Data et Data Mining',
        'Business Intelligence',
        'Tableaux de bord et reporting',
        'Prédiction et modélisation',
        'Visualisation de données'
      ]
    },
    {
      id: 'developpement-logiciel',
      title: 'Développement Logiciel',
      description: 'Création d\'applications et de logiciels sur mesure pour répondre à vos besoins spécifiques.',
      icon: Code,
      color: 'bg-green-100 text-fructus-green',
      details: [
        'Développement d\'applications web',
        'Applications mobiles (iOS, Android)',
        'Logiciels métier sur mesure',
        'Interfaces API et intégrations',
        'Tests et assurance qualité'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-fructus-blue mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Découvrez notre gamme complète de services pour accompagner votre entreprise dans sa transformation numérique et son développement durable.
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-fructus-blue mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-fructus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className="bg-fructus-blue hover:bg-blue-800 text-white transition-colors"
                  >
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </div>
                
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative z-10">
                    <img 
                      src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                      alt={service.title} 
                      className="rounded-lg shadow-xl w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute top-8 ${index % 2 !== 0 ? '-right-8' : '-left-8'} h-full w-full border-4 ${
                    index % 3 === 0 ? 'border-fructus-blue' : index % 3 === 1 ? 'border-fructus-green' : 'border-fructus-orange'
                  } rounded-lg z-0`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fructus-blue to-fructus-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nous développons également des solutions sur mesure adaptées à vos besoins spécifiques. Contactez-nous pour discuter de votre projet.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-fructus-blue hover:bg-gray-100 transition-colors"
          >
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
