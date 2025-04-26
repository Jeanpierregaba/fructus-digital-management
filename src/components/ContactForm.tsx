
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message envoyé avec succès. Nous vous contacterons bientôt!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+33 1 23 45 67 89"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Entreprise</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Sujet *</Label>
        <Select value={formData.subject} onValueChange={handleSelectChange} required>
          <SelectTrigger id="subject">
            <SelectValue placeholder="Sélectionnez un sujet" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="transformation-numerique">Transformation Numérique</SelectItem>
            <SelectItem value="economie-verte">Économie Verte</SelectItem>
            <SelectItem value="fintech">Fintech</SelectItem>
            <SelectItem value="gestion-entreprise">Gestion d'Entreprise</SelectItem>
            <SelectItem value="sante-numerique">Santé Numérique</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Comment pouvons-nous vous aider ?"
          className="min-h-[150px]"
          required
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full md:w-auto bg-fructus-blue hover:bg-blue-800 text-white"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
};

export default ContactForm;
