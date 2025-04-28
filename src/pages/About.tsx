
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '5+', label: "Années d'expérience" },
    { value: '50+', label: 'Projets réussis' },
    { value: '30+', label: 'Clients satisfaits' },
    { value: '15+', label: 'Experts' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Nous recherchons constamment des solutions novatrices pour résoudre les défis complexes de nos clients.',
      icon: Target
    },
    {
      title: 'Excellence',
      description: 'Nous nous engageons à fournir un travail de la plus haute qualité, dépassant les attentes de nos clients.',
      icon: Award
    },
    {
      title: 'Durabilité',
      description: 'Nous intégrons des pratiques durables dans toutes nos solutions pour contribuer à un avenir meilleur.',
      icon: CheckCircle
    },
    {
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour créer des solutions parfaitement adaptées à leurs besoins.',
      icon: Users
    }
  ];

  const team = [
    {
      name: 'Alexandre Dubois',
      role: 'CEO & Fondateur',
      bio: "Expert en transformation numérique avec plus de 15 ans d'expérience dans le conseil technologique.",
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Lefèvre',
      role: 'Directrice Technique',
      bio: "Spécialiste en développement logiciel et architecture de systèmes avec une passion pour l'innovation technologique.",
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Thomas Martin',
      role: 'Responsable Économie Verte',
      bio: "Ingénieur environnemental dédié à créer des solutions technologiques durables pour un avenir plus vert.",
      imageUrl: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      name: 'Émilie Rousseau',
      role: 'Directrice Santé Numérique',
      bio: "Médecin et informaticienne, spécialisée dans les technologies de santé et les systèmes d'information médicale.",
      imageUrl: 'https://randomuser.me/api/portraits/women/17.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-fructus-blue mb-6">
                À Propos de FRUCTUS DIGITAL & MANAGEMENT
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Nous sommes une entreprise spécialisée dans la transformation numérique et l'économie verte, dédiée à propulser votre entreprise vers un avenir plus durable et technologiquement avancé.
              </p>
              <Button 
                asChild 
                className="bg-fructus-blue hover:bg-blue-800 text-white transition-colors"
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-4xl font-bold text-fructus-blue mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10">
                <img 
                  src="https://img.freepik.com/free-photo/african-american-research-agency-coworkers-meeting-about-startup-project-financial-status-business-people-desk-company-office-finance-department-talking-about-marketing-expenses_482257-40197.jpg?t=st=1745655082~exp=1745658682~hmac=f007e749389b6cf7cef8fe637782f3eeabb9c56b9ba16435703ddc6666364bd2&w=1380" 
                  alt="Notre histoire" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute top-8 -left-8 h-full w-full border-4 border-fructus-green rounded-lg z-0"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-fructus-blue mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Fondée en 2023, FRUCTUS DIGITAL & MANAGEMENT est née de la vision d'Alexandre Dubois, qui souhaitait créer une entreprise combinant expertise technologique et engagement environnemental.
              </p>
              <p className="text-gray-600 mb-6">
                Au fil des années, nous avons évolué d'une petite équipe de consultants à une entreprise complète offrant un large éventail de services technologiques innovants. Nous avons toujours gardé à l'esprit notre mission initiale : aider les entreprises à prospérer grâce à des solutions numériques durables.
              </p>
              <p className="text-gray-600 mb-6">
                Aujourd'hui, nous sommes fiers d'être reconnus comme un acteur majeur de la transformation numérique et de l'économie verte, ayant aidé des dizaines d'organisations à atteindre leurs objectifs commerciaux tout en réduisant leur impact environnemental.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-fructus-blue text-center mb-6">Nos Valeurs</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Ces principes guident toutes nos actions et nos décisions, garantissant que nous fournissons toujours le meilleur service possible à nos clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-fructus-green bg-opacity-10 flex items-center justify-center mr-4">
                      <Icon className="text-fructus-green" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-fructus-blue text-center mb-6">Notre Équipe</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            FRUCTUS DIGITAL & MANAGEMENT est composé d'experts passionnés par la technologie, l'innovation et le développement durable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-fructus-green font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="bg-fructus-blue hover:bg-blue-800 text-white transition-colors"
            >
              <Link to="/contact">Rejoindre notre équipe</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fructus-blue to-fructus-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Prêt à transformer votre entreprise avec des solutions numériques durables ? Contactez-nous dès aujourd'hui pour discuter de votre projet.
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

export default About;
