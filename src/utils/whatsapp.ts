export const BUSINESS_PHONE = "+917338148518";
export const BUSINESS_PHONE_DISPLAY = "+91 73381 48518";
export const BUSINESS_NAME = "Sanju Tours & Travels";
export const BUSINESS_ADDRESS = "P.B. Road, Opp. Siddhappilla Temple, Unkal, Hubli – 580031";
export const BUSINESS_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;

export interface BookingData {
  name?: string;
  phone?: string;
  vehicle?: string;
  pickup?: string;
  destination?: string;
  date?: string;
  returnDate?: string;
  passengers?: string;
  requirements?: string;
}

export function buildWhatsAppUrl(data: BookingData): string {
  const cleanNumber = BUSINESS_PHONE.replace(/[^0-9]/g, '');
  
  let text = `Hello ${BUSINESS_NAME},\n\nI would like to enquire about a vehicle booking.\n\n`;
  
  if (data.name) text += `*Name:* ${data.name}\n`;
  if (data.phone) text += `*Phone:* ${data.phone}\n`;
  if (data.vehicle) text += `*Vehicle:* ${data.vehicle}\n`;
  if (data.pickup) text += `*Pickup Location:* ${data.pickup}\n`;
  if (data.destination) text += `*Destination:* ${data.destination}\n`;
  if (data.date) text += `*Travel Date:* ${data.date}\n`;
  if (data.returnDate) text += `*Return Date:* ${data.returnDate}\n`;
  if (data.passengers) text += `*Passengers:* ${data.passengers}\n`;
  if (data.requirements) text += `*Requirement / Notes:* ${data.requirements}\n`;
  
  text += `\nPlease share vehicle availability and an itemized rate quotation. Thank you!`;
  
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppEnquiry(data: BookingData): void {
  const url = buildWhatsAppUrl(data);
  window.open(url, '_blank', 'noopener,noreferrer');
}
