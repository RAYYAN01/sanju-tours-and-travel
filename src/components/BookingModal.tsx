import React, { useState, useEffect } from 'react';
import { X, Send, Phone, CheckCircle2, ShieldCheck, MessageSquareText } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';
import { VEHICLES } from '../data/vehicles';
import { openWhatsAppEnquiry, BUSINESS_PHONE_DISPLAY } from '../utils/whatsapp';

export const BookingModal: React.FC = () => {
  const { isOpen, selectedVehicle, closeModal } = useBookingModal();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    pickup: 'Hubballi',
    destination: '',
    date: '',
    returnDate: '',
    passengers: '1-4',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVehicle) {
      setFormData(prev => ({ ...prev, vehicle: selectedVehicle }));
    }
  }, [selectedVehicle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in your Name, Phone number, and Travel Date.');
      return;
    }
    openWhatsAppEnquiry(formData);
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#200f07]/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-lg bg-[#fff9eb] rounded-card-lg border border-[#200f07]/15 shadow-lifted z-10 overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 p-5 sm:p-6 bg-[#200f07] text-[#fff9eb]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#c5e384]/15 border border-[#c5e384]/25 text-[#c5e384] flex items-center justify-center shrink-0">
              <MessageSquareText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-[#c5e384] font-bold block">
                Quick Quotation Desk
              </span>
              <h2 id="modal-title" className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                {selectedVehicle ? `Book Your ${selectedVehicle}` : 'Request a Free Quote'}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="p-1.5 rounded-lg text-[#fff9eb]/80 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#200f07]/20 text-[#200f07] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#200f07]">Redirecting to WhatsApp...</h3>
              <p className="text-xs text-[#200f07]/70 max-w-xs mx-auto">
                Opening your prefilled message to share with our booking team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kulkarni"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                  Preferred Vehicle
                </label>
                <select
                  value={formData.vehicle}
                  onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                >
                  <option value="">Best suitable option (Advise me)</option>
                  {VEHICLES.map(v => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.seating}) — {v.rateStarting}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hubli Railway Station / Airport"
                    value={formData.pickup}
                    onChange={e => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dandeli / Goa / Local"
                    value={formData.destination}
                    onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                    Travel Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                    Return Date (Optional)
                  </label>
                  <input
                    type="date"
                    min={formData.date || todayStr}
                    value={formData.returnDate}
                    onChange={e => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#200f07] uppercase tracking-wider mb-1">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Flight timing, passenger count, luggage volume, or special requests..."
                  value={formData.requirements}
                  onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#fff9eb] border border-[#200f07]/15 rounded-lg focus:outline-none focus:border-[#200f07] focus:ring-2 focus:ring-[#200f07]/15 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 btn-accent py-3 text-xs tracking-wider"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Quotation Request (WhatsApp)</span>
                </button>
                <a
                  href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s/g, '')}`}
                  className="btn-outline-dark py-3 px-4 text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-[#200f07]/70 pt-1 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#200f07]" />
                <span>Free quote · Transparent per-km rates · Verified drivers · 24/7 assistance</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
