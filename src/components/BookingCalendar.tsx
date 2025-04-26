
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { addDays, format, setHours, setMinutes, isBefore, isAfter } from 'date-fns';
import { fr } from 'date-fns/locale';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

const BookingCalendar = () => {
  const today = new Date();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast.error("Veuillez sélectionner une date et un horaire");
      return;
    }
    
    setIsSubmitting(true);
    
    // Extract hours and minutes from timeSlot
    const [hours, minutes] = timeSlot.split(':').map(num => parseInt(num));
    const dateTime = setMinutes(setHours(date, hours), minutes);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(
        `Votre consultation gratuite a été réservée pour le ${format(dateTime, 'PPPP', { locale: fr })} à ${timeSlot}.`,
        { duration: 5000 }
      );
      setDate(undefined);
      setTimeSlot('');
      setBookingData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectDescription: '',
      });
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Disable past dates and weekends
  const disabledDays = (date: Date) => {
    const day = date.getDay();
    const isPastDate = isBefore(date, today) && !isSameDay(date, today);
    const isWeekend = day === 0 || day === 6;
    return isPastDate || isWeekend;
  };
  
  // Helper function to check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-6 text-fructus-blue">Réservez une consultation gratuite de 30 minutes</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Label className="mb-2 block">Sélectionnez une date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={disabledDays}
              fromDate={today}
              toDate={addDays(today, 30)}
              className="border rounded-md p-3 pointer-events-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="time">Sélectionnez un horaire</Label>
              <Select value={timeSlot} onValueChange={setTimeSlot}>
                <SelectTrigger id="time" disabled={!date}>
                  <SelectValue placeholder="Choisir un horaire" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                value={bookingData.name}
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
                value={bookingData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                value={bookingData.phone}
                onChange={handleChange}
                placeholder="+33 1 23 45 67 89"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Entreprise</Label>
              <Input
                id="company"
                name="company"
                value={bookingData.company}
                onChange={handleChange}
                placeholder="Nom de votre entreprise"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="projectDescription">Description de votre projet *</Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            value={bookingData.projectDescription}
            onChange={handleChange}
            placeholder="Décrivez brièvement votre projet ou votre besoin"
            className="min-h-[100px]"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting || !date || !timeSlot}
          className="w-full bg-fructus-green hover:bg-teal-600 text-white"
        >
          {isSubmitting ? "Réservation en cours..." : "Réserver ma consultation gratuite"}
        </Button>
        
        <p className="text-sm text-gray-500">
          En réservant une consultation, vous acceptez nos conditions générales d'utilisation et notre politique de confidentialité.
        </p>
      </form>
    </div>
  );
};

export default BookingCalendar;
