import React, { useState } from 'react';
import { Send, Calendar, Car, Phone, User, MapPin, Zap } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const BookingForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.date) {
      alert('Please fill in your Phone / WhatsApp Number and Travel Date.');
      return;
    }
    openWhatsAppEnquiry(formData);
  };

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
            <label htmlFor="bkf-card-name" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Your Name *
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="bkf-card-name"
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
            <label htmlFor="bkf-card-phone" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Phone / WhatsApp *
            </label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="bkf-card-phone"
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
            <label htmlFor="bkf-card-vehicle" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Select Vehicle
            </label>
            <div className="relative">
              <Car className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                id="bkf-card-vehicle"
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
            <label htmlFor="bkf-card-pickup" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Pickup Point
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="bkf-card-pickup"
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
            <label htmlFor="bkf-card-date" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Travel Date *
            </label>
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="bkf-card-date"
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
            <label htmlFor="bkf-card-return-date" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
              Return Date (If Round-Trip)
            </label>
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-[#200f07]/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="bkf-card-return-date"
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
          <label htmlFor="bkf-card-requirements" className="block text-[11px] font-display font-bold text-[#200f07] uppercase tracking-wider mb-1">
            Destination &amp; Specific Travel Requirements
          </label>
          <input
            id="bkf-card-requirements"
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
