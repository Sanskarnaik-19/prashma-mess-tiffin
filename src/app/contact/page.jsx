import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import WhatsAppContactForm from '@/components/contact/WhatsAppContactForm';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Contact Us & Order | Phone & WhatsApp Tiffin Desk",
  description: "Get in touch with Annapurna Tiffins. Contact us directly via WhatsApp or phone call for daily lunch and dinner tiffin delivery."
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            We&apos;re Ready To Serve You
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Contact & Instant WhatsApp Desk
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            Have a question or ready to book your first meal? Call us or send a message directly on WhatsApp!
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3.5rem', alignItems: 'flex-start' }}>
            {/* Left Column: Direct Contact Info & Map */}
            <div>
              <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
                Direct Kitchen Access
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '1.25rem' }}>
                Get In Touch Directly
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                No automated bot responses or complicated forms! You get directly connected with our kitchen manager on WhatsApp or phone.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Phone */}
                <a
                  href={siteConfig.getPhoneUrl()}
                  className="card card-hover"
                  style={{ flexDirection: 'row', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>Direct Phone Call</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)' }}>{siteConfig.business.phoneNumber}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover"
                  style={{ flexDirection: 'row', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', backgroundColor: 'var(--secondary-green-light)' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--secondary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--secondary-green-hover)', fontWeight: '700' }}>WhatsApp Desk (Fastest Response)</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--secondary-green-hover)' }}>Chat on WhatsApp Now</div>
                  </div>
                </a>

                {/* Email */}
                <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', backgroundColor: 'var(--bg-secondary)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-amber-light)', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>Official Email</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-dark)' }}>{siteConfig.business.email}</div>
                  </div>
                </div>

                {/* Address & Hours */}
                <div className="card" style={{ padding: '1.5rem', backgroundColor: 'white', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1rem' }}>
                    <MapPin size={22} color="var(--primary-orange)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '1.05rem' }}>Kitchen Location</div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {siteConfig.business.address.street}, {siteConfig.business.address.area}, {siteConfig.business.address.city} - {siteConfig.business.address.pincode}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <Clock size={22} color="var(--secondary-green)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '1.05rem' }}>Kitchen Operating Hours</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        <div>• <strong>Lunch Delivery:</strong> {siteConfig.business.hours.lunchDelivery}</div>
                        <div>• <strong>Dinner Delivery:</strong> {siteConfig.business.hours.dinnerDelivery}</div>
                        <div>• <strong>Days:</strong> {siteConfig.business.hours.workingDays}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Lead Form */}
            <div>
              <WhatsAppContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <SectionHeading
            badge="Google Map View"
            title="Find Our Kitchen Premise"
            subtitle="Visit our kitchen premise anytime during operating hours."
          />

          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '420px', boxShadow: 'var(--shadow-xl)', border: '2px solid var(--border-color)' }}>
            <iframe
              title="Google Map Location"
              src={siteConfig.business.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
