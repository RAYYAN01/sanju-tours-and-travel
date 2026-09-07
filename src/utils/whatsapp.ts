export const BUSINESS_PHONE = "+917338148518";
export const BUSINESS_PHONE_DISPLAY = "+91 73381 48518";
export const BUSINESS_NAME = "Sanju Tours & Travels";
export const BUSINESS_ADDRESS = "P.B. Road, Opp. Siddhappilla Temple, Unkal, Hubli – 580031";
export const BUSINESS_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;

// Ready-to-use href for tel: links — always derived from the canonical dial
// string, never re-parsed from the formatted display value.
export const PHONE_TEL_HREF = `tel:${BUSINESS_PHONE}`;
// Accessible label for icon-only / short-text call buttons.
export const CALL_ARIA_LABEL = `Call ${BUSINESS_NAME} at ${BUSINESS_PHONE_DISPLAY}`;

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

// Prefer this for static/link-style triggers: render a real <a href> so the
// action supports open-in-new-tab, middle-click and long-press, keeps proper
// link semantics for assistive tech, and is never eaten by a popup blocker.
export function whatsappHref(data: BookingData = {}): string {
  return buildWhatsAppUrl(data);
}

// For triggers that must run after JS work (e.g. form validation) and so
// can't be a plain anchor. Falls back to a same-tab navigation when the
// popup is blocked, so the enquiry is never silently lost.
export function openWhatsAppEnquiry(data: BookingData): void {
  const url = buildWhatsAppUrl(data);
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if (!win) {
    window.location.href = url;
  }
}
