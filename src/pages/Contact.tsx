
import React from 'react';
import ContactForm from '@/components/ContactForm';
import BookingCalendar from '@/components/BookingCalendar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-fructus-blue mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Nous sommes là pour répondre à vos questions et vous aider à transformer votre entreprise. N'hésitez pas à nous contacter.
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-fructus-blue mb-6">Informations de Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <MapPin className="text-fructus-blue" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de la Technologie<br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Phone className="text-fructus-green" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33123456789" className="hover:text-fructus-blue transition-colors">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Mail className="text-fructus-orange" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@fructus-digital.com" className="hover:text-fructus-blue transition-colors">
                        contact@fructus-digital.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="text-fructus-blue" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Heures d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Samedi - Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10">
                <div className="bg-gray-200 rounded-xl h-[250px] flex items-center justify-center">
                  <p className="text-gray-500">Carte Google Maps</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form & Booking Calendar */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-8">
                  <TabsTrigger value="contact">Formulaire de Contact</TabsTrigger>
                  <TabsTrigger value="booking">Réserver une Consultation</TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact">
                  <div className="bg-gray-50 rounded-xl shadow-md p-8">
                    <h2 className="text-2xl font-bold text-fructus-blue mb-6">Envoyez-nous un message</h2>
                    <ContactForm />
                  </div>
                </TabsContent>
                
                <TabsContent value="booking">
                  <BookingCalendar />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-fructus-blue text-center mb-6">
            Questions Fréquemment Posées
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services et notre processus.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-fructus-blue mb-3">
                Comment se déroule une première consultation ?
              </h3>
              <p className="text-gray-600">
                Lors de la première consultation, nous discutons de vos besoins, objectifs et défis actuels. Nous présentons ensuite nos services et proposons des solutions adaptées à votre situation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-fructus-blue mb-3">
                Combien coûtent vos services ?
              </h3>
              <p className="text-gray-600">
                Nos tarifs varient en fonction de la complexité et de l'étendue du projet. Nous proposons des devis personnalisés après avoir compris vos besoins spécifiques.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-fructus-blue mb-3">
                Combien de temps prend un projet typique ?
              </h3>
              <p className="text-gray-600">
                La durée d'un projet dépend de sa complexité. Un projet standard peut prendre de quelques semaines à plusieurs mois. Nous établissons un calendrier détaillé lors de la phase de planification.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-fructus-blue mb-3">
                Travaillez-vous avec des petites entreprises ?
              </h3>
              <p className="text-gray-600">
                Oui, nous travaillons avec des entreprises de toutes tailles, des startups aux grandes organisations. Nous adaptons nos services pour répondre aux besoins spécifiques de chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
