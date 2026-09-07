import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import {
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '../utils/whatsapp';
import { Reveal } from '../components/motion/Reveal';

/*
 * Plain-language privacy notice aligned to Indian law — the Digital
 * Personal Data Protection Act, 2023 and the SGX/IT Act, 2000 read with
 * the SPDI Rules, 2011 ("reasonable security practices"). This is a
 * good-faith template; have it reviewed by a lawyer before relying on it
 * and fill in a business email / named Grievance Officer where marked.
 */

const LAST_UPDATED = '7 September 2026';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({
  id,
  title,
  children,
}) => (
  <section id={id} className="space-y-2.5 scroll-mt-28">
    <h2 className="font-display text-lg sm:text-xl font-bold text-[#200f07]">{title}</h2>
    <div className="space-y-2.5 text-sm text-[#200f07]/75 leading-relaxed">{children}</div>
  </section>
);

export const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#fff9eb]">
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-[#200f07]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-4 mb-10">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-[#200f07]/60">
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#200f07] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#200f07]/70 leading-relaxed">
              How {BUSINESS_NAME} collects, uses, shares and protects your personal
              data, and the rights you have under India&apos;s Digital Personal Data
              Protection Act, 2023 and the Information Technology Act, 2000 (with the
              SPDI Rules, 2011).
            </p>
            <p className="text-xs text-[#200f07]/50">Last updated: {LAST_UPDATED}</p>
          </Reveal>

          <div className="space-y-8">
            <Section id="who-we-are" title="1. Who we are">
              <p>
                {BUSINESS_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a
                vehicle-rental and tour operator based in Hubballi&ndash;Dharwad,
                Karnataka, India. Our registered address is {BUSINESS_ADDRESS}. For the
                purpose of the Digital Personal Data Protection Act, 2023, we act as the
                &ldquo;Data Fiduciary&rdquo; for the personal data described below.
              </p>
            </Section>

            <Section id="what-we-collect" title="2. What we collect">
              <p>
                <strong>Information you give us</strong> when you use the booking form, send
                a WhatsApp enquiry, or call us: your name, phone number, pickup and drop
                locations, travel and return dates, passenger count, vehicle preference and
                any notes or requirements you share.
              </p>
              <p>
                <strong>Information collected automatically</strong> when analytics cookies
                are allowed (see section&nbsp;5): your device and browser type, approximate
                region, the pages you view and how you reached the site. If you choose
                &ldquo;Reject&rdquo; on the cookie notice, only cookies strictly necessary
                for the site to work are used.
              </p>
              <p>
                We do not ask for, and request that you do not send us, sensitive data such
                as government ID numbers, financial account details, health information or
                passwords through the website. Payment is arranged separately, offline.
              </p>
            </Section>

            <Section id="how-we-use" title="3. How we use your data">
              <p>We use the data you provide only to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>respond to your enquiry and prepare an itemised quotation;</li>
                <li>confirm, schedule and operate your booking, including assigning a driver and vehicle;</li>
                <li>contact you about your trip (pickup timing, changes, support);</li>
                <li>keep records required for accounting, tax and legal compliance;</li>
                <li>understand aggregate site usage so we can improve the service (analytics only, and only with your consent).</li>
              </ul>
              <p>
                We do not use your data for automated decision-making that has a legal or
                similarly significant effect on you, and we do not sell your personal data.
              </p>
            </Section>

            <Section id="legal-basis" title="4. Consent and legal basis">
              <p>
                We collect and process your personal data on the basis of the consent you
                give when you submit an enquiry or accept cookies, and, where applicable,
                for the legitimate purposes permitted under the DPDP Act (such as responding
                to a request you have made and meeting legal obligations). You may withdraw
                your consent at any time by contacting us (section&nbsp;10); withdrawing
                consent does not affect processing already carried out, and may mean we can
                no longer provide a quote or booking.
              </p>
            </Section>

            <Section id="cookies" title="5. Cookies">
              <p>
                <strong>Essential cookies / local storage</strong> keep the site working —
                for example remembering your cookie choice and preventing a pop-up from
                repeating. These are always active and store data only in your browser.
              </p>
              <p>
                <strong>Analytics cookies</strong> are used only after you select
                &ldquo;Accept&rdquo; on the cookie notice. You can change your mind at any
                time by clearing this site&apos;s data in your browser settings, which
                removes the stored choice and shows the notice again.
              </p>
            </Section>

            <Section id="sharing" title="6. Who we share it with">
              <p>We share personal data only as needed to run the service:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Drivers</strong> assigned to your trip receive the details needed
                  to carry it out (name, contact number, pickup/drop, timing).
                </li>
                <li>
                  <strong>Service providers</strong> that operate the website and messaging
                  — our hosting provider (Vercel) and the messaging platform you choose to
                  contact us on (WhatsApp / Meta) — process data strictly to deliver those
                  functions and under their own terms and safeguards.
                </li>
                <li>
                  <strong>Authorities</strong>, where disclosure is required by law, court
                  order, or to protect our rights, safety or property.
                </li>
              </ul>
              <p>
                If you contact us over WhatsApp, that conversation is also governed by
                WhatsApp&apos;s / Meta&apos;s privacy terms, and may be processed on their
                infrastructure outside India.
              </p>
            </Section>

            <Section id="retention" title="7. How long we keep it">
              <p>
                We keep enquiry and booking data only for as long as needed to serve you and
                to meet accounting, tax and legal requirements — typically up to eight years
                for records with a financial or tax element, and a shorter period for
                enquiries that do not lead to a booking. After that it is deleted or
                anonymised.
              </p>
            </Section>

            <Section id="security" title="8. How we protect it">
              <p>
                We follow reasonable security practices and procedures as required under the
                IT Act, 2000 and the SPDI Rules, 2011 — the site is served over HTTPS,
                access to enquiry data is limited to staff who need it, and we review our
                practices periodically. No method of transmission or storage is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="your-rights" title="9. Your rights">
              <p>Under the Digital Personal Data Protection Act, 2023 you may:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ask for a summary of the personal data we hold about you and how it is processed;</li>
                <li>ask us to correct, complete or update inaccurate or incomplete data;</li>
                <li>ask us to erase your data where it is no longer needed;</li>
                <li>withdraw consent you have given;</li>
                <li>nominate another person to exercise these rights on your behalf in the event of death or incapacity;</li>
                <li>raise a grievance with us, and escalate to the Data Protection Board of India if unresolved.</li>
              </ul>
              <p>
                To exercise any of these, contact us using the details in section&nbsp;10.
                We may need to verify your identity before acting on a request, and we will
                respond within the timelines prescribed under applicable law.
              </p>
            </Section>

            <Section id="grievance" title="10. Contact / Grievance Officer">
              <p>
                For any question, request or complaint about your personal data, contact our
                Grievance Officer:
              </p>
              <p className="text-[#200f07]">
                {BUSINESS_NAME}
                <br />
                {BUSINESS_ADDRESS}
                <br />
                Phone / WhatsApp:{' '}
                <a
                  href={PHONE_TEL_HREF}
                  className="font-semibold underline decoration-[#200f07]/30 underline-offset-2 hover:decoration-[#200f07]"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </p>
              <p>
                If you are not satisfied with our response, you may complain to the Data
                Protection Board of India under the DPDP Act, 2023.
              </p>
            </Section>

            <Section id="children" title="11. Children">
              <p>
                Our services are intended for adults arranging travel. We do not knowingly
                collect the personal data of a child (under 18) without the consent of a
                parent or lawful guardian. If you believe a child has given us data, contact
                us and we will delete it.
              </p>
            </Section>

            <Section id="changes" title="12. Changes to this policy">
              <p>
                We may update this policy from time to time. The &ldquo;Last updated&rdquo;
                date at the top shows the current version. Significant changes will be
                reflected here; please review the page periodically.
              </p>
            </Section>

            <Section id="law" title="13. Governing law">
              <p>
                This policy is governed by the laws of India. Any dispute relating to it is
                subject to the exclusive jurisdiction of the courts at Hubballi&ndash;Dharwad,
                Karnataka.
              </p>
            </Section>
          </div>

          <div className="mt-12 pt-6 border-t border-[#200f07]/10">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#200f07]/70 hover:text-[#200f07] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
