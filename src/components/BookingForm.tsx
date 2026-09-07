import React, { useState } from 'react';
import { Send, Calendar, Car, Phone, User, MapPin, Navigation, Plane, Clock, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface BookingFormProps {
  variant?: 'card' | 'bar';
}

type TripType = 'outstation' | 'oneway' | 'airport' | 'local';

export const BookingForm: React.FC<BookingFormProps> = ({ variant = 'card' }) => {
  const [tripType, setTripType] = useState<TripType>('outstation');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    pickup: 'Hubballi',
    destination: '',
    date: '',
    returnDate: '',
    requirements: ''
  });

  const todayStr = new Date().toISOString().split('T')[0];

  const handleTripTypeChange = (type: TripType) => {
    setTripType(type);
    if (type === 'airport') {
      setFormData(prev => ({
        ...prev,
        pickup: 'Hubli Airport (HBX)',
        destination: prev.destination || 'Hubballi City / Dharwad'
      }));
    } else if (type === 'local') {
      setFormData(prev => ({
        ...prev,
        pickup: 'Hubballi',
        destination: '8 Hrs / 80 Km Local Twin-City Package'
      }));
    } else {
      if (formData.pickup === 'Hubli Airport (HBX)') {
        setFormData(prev => ({ ...prev, pickup: 'Hubballi' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.date) {
      alert('Please fill in your Phone / WhatsApp Number and Travel Date.');
      return;
    }

    const tripTypeLabels: Record<TripType, string> = {
      outstation: 'Outstation Round-Trip',
      oneway: 'One-Way Drop',
      airport: 'Airport Transfer (Hubli HBX)',
      local: 'Local Hourly Rental'
    };

    const payload = {
      ...formData,
      requirements: `[${tripTypeLabels[tripType]}] ${formData.requirements || ''}`.trim()
    };

    openWhatsAppEnquiry(payload);
  };

  /* =========================================================================
     1. BAR VARIANT (Modern Luxury Travel Search Console)
     ========================================================================= */
  if (variant === 'bar') {
    return (
      <div className="w-full max-w-6xl mx-auto bg-[#fff9eb]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#200f07]/12 shadow-[0_20px_60px_-15px_rgba(32,15,7,0.16)] p-5 sm:p-7 transition-[box-shadow,border-color] duration-200">
        
        {/* Top Header & Segmented Trip Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#200f07]/8">
          
          {/* Trip Type Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: 'outstation', label: 'Outstation Round-Trip', icon: Car },
              { id: 'oneway', label: 'One-Way Drop', icon: Navigation },
              { id: 'airport', label: 'Airport Taxi', icon: Plane },
              { id: 'local', label: 'Local Rental', icon: Clock },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = tripType === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTripTypeChange(tab.id as TripType)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-colors duration-200 shrink-0 ${
                    isActive
                      ? 'bg-[#200f07] text-white shadow-sm'
                      : 'bg-[#fff9eb]/40 text-[#200f07]/70 hover:text-[#200f07] hover:bg-[#fff9eb]/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#200f07]' : 'text-[#200f07]/70'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick response pill */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#200f07] bg-[#fff9eb] px-3 py-1 rounded-full border border-[#200f07]/10 shrink-0 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#c5e384] animate-pulse"></span>
            <span>Instant WhatsApp Quote · 5 Min Dispatch</span>
          </div>

        </div>

        {/* Search Console Form Grid */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* TIER 1: Pickup, Drop, Dates */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${tripType === 'outstation' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-3`}>
            
            {/* Pickup Location */}
            <div className="bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
              <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Pickup Point</span>
              </label>
              <input
                type="text"
                placeholder="Hubballi / Station / Airport"
                value={formData.pickup}
                onChange={e => setFormData({ ...formData, pickup: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] placeholder-[#200f07]/60 focus:outline-none"
              />
            </div>

            {/* Destination / Drop */}
            <div className="bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
              <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                <Navigation className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Destination / Drop</span>
              </label>
              <input
                type="text"
                placeholder={tripType === 'local' ? 'Local Sightseeing / Errands' : 'Goa, Dandeli, Gokarna, Bengaluru...'}
                value={formData.destination}
                onChange={e => setFormData({ ...formData, destination: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] placeholder-[#200f07]/60 focus:outline-none"
              />
            </div>

            {/* Departure Date */}
            <div className="bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
              <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Travel Date *</span>
              </label>
              <input
                type="date"
                required
                min={todayStr}
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] focus:outline-none cursor-pointer"
              />
            </div>

            {/* Return Date (Shown only for Round-Trip) */}
            {tripType === 'outstation' && (
              <div className="bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
                <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#200f07]" />
                  <span>Return Date</span>
                </label>
                <input
                  type="date"
                  min={formData.date || todayStr}
                  value={formData.returnDate}
                  onChange={e => setFormData({ ...formData, returnDate: e.target.value })}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] focus:outline-none cursor-pointer"
                />
              </div>
            )}

          </div>

          {/* TIER 2: Vehicle, Contact Info & Action Button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            
            {/* Vehicle Selection */}
            <div className="lg:col-span-4 bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
              <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                <Car className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Select Fleet Option</span>
              </label>
              <select
                value={formData.vehicle}
                onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] focus:outline-none cursor-pointer"
              >
                <option value="">Advise Best Option for My Group</option>
                {VEHICLES.map(v => (
                  <option key={v.id} value={v.name}>
                    {v.name} ({v.seating}) — {v.rateStarting}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="lg:col-span-2 bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
              <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                <User className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh K."
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] placeholder-[#200f07]/60 focus:outline-none"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div className="lg:col-span-3 bg-[#fff9eb] border border-[#200f07]/12 hover:border-[#200f07]/70 focus-within:border-[#200f07] focus-within:ring-2 focus-within:ring-[#200f07]/15 rounded-xl p-2.5 sm:p-3 transition-[border-color,box-shadow] duration-150">
              <label className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07] mb-1">
                <Phone className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Phone / WhatsApp *</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98XXX XXXXX"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#200f07] placeholder-[#200f07]/60 focus:outline-none"
              />
            </div>

            {/* Submit Action Button */}
            <div className="lg:col-span-3">
              <button
                type="submit"
                className="w-full btn-accent py-3.5 sm:py-4 px-5 text-xs font-display font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-[background-color,box-shadow] duration-200 flex items-center justify-center gap-2 rounded-xl"
              >
                <span>Get Instant Quote</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Bottom Trust Line */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#200f07]/70 border-t border-[#200f07]/6">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#200f07]" />
                <span>Transparent Per-Km Billing</span>
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">No Hidden Surge Charges</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Commercial Verified Chauffeurs</span>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#200f07]">
              24/7 Dispatch Coordination
            </span>
          </div>

        </form>

      </div>
    );
  }

  /* =========================================================================
     2. CARD VARIANT (For Contact Page or Sidebar)
     ========================================================================= */
  return (
    <div className="w-full bg-[#fff9eb] rounded-card border border-[#200f07]/12 shadow-card p-5 sm:p-7">
      <div className="flex items-center justify-between border-b border-[#200f07]/10 pb-3.5 mb-5">
        <div>
          <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#200f07] block">
            Instant WhatsApp Quotation
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-[#200f07]">
            Get a Free <span className="font-accent italic font-bold text-[#8fae52]">Travel Quote</span>
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-[#200f07] bg-[#fff9eb] px-2.5 py-1 rounded-full border border-[#200f07]/10 flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#200f07]" />
          <span>Quick Dispatch Response</span>
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Name */}
          <div>
            <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Your Name *
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kulkarni"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Phone / WhatsApp *
            </label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                required
                placeholder="+91 98XXX XXXXX"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors"
              />
            </div>
          </div>

          {/* Vehicle */}
          <div>
            <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Select Vehicle
            </label>
            <div className="relative">
              <Car className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={formData.vehicle}
                onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors cursor-pointer"
              >
                <option value="">Advise Best Option</option>
                {VEHICLES.map(v => (
                  <option key={v.id} value={v.name}>
                    {v.name} ({v.seating})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pickup */}
          <div>
            <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Pickup Point
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Hubli Railway Station / Airport / Home"
                value={formData.pickup}
                onChange={e => setFormData({ ...formData, pickup: e.target.value })}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors"
              />
            </div>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Travel Date *
            </label>
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                required
                min={todayStr}
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors"
              />
            </div>
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Return Date (If Round-Trip)
            </label>
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                min={formData.date || todayStr}
                value={formData.returnDate}
                onChange={e => setFormData({ ...formData, returnDate: e.target.value })}
                className="w-full pl-8 pr-3 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
            Destination &amp; Specific Travel Requirements
          </label>
          <input
            type="text"
            placeholder="e.g. Round trip to Dandeli with 6 family members, starting 6:00 AM..."
            value={formData.requirements}
            onChange={e => setFormData({ ...formData, requirements: e.target.value })}
            className="w-full px-3.5 py-2 text-xs bg-[#fff9eb]/40 border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:bg-[#fff9eb] transition-colors"
          />
        </div>

        {/* Submit */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto btn-accent py-3.5 px-8 text-xs tracking-wider font-bold shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Get a Quote via WhatsApp</span>
          </button>
          
          <span className="text-[11px] text-[#200f07]/70 text-center sm:text-right">
            Per-km rates &amp; driver Bata shared upfront · No surge charges
          </span>
        </div>
      </form>
    </div>
  );
};

