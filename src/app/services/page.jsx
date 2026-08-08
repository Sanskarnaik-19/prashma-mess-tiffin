import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { MessageCircle, Phone } from 'lucide-react';

export const metadata = {
  title: "Our Tiffin Services | Veg, Non-Veg, Student & Office Meal Plans",
  description: "Explore our complete range of homemade tiffin services including Pure Veg Thalis, Non-Veg Specials, Student Combos, Office Lunch Boxes, and Monthly Subscriptions."
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            Daily Meal Plans
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Our Tiffin & Mess Services
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            Nutritious, home-style meal boxes crafted for students, office workers, PG residents, and busy families.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionHeading
            badge="Tailored Options"
            title="Choose A Plan That Fits Your Routine"
            subtitle="All meal plans include insulated hot delivery and flexible pause options with zero cancellation penalties."
          />

          <div className="grid-3" style={{ gap: '2rem' }}>
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Customization Callout */}
      <section style={{ backgroundColor: 'var(--accent-cream)', padding: '3.5rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>
            Need A Custom Corporate Or Event Catering Package?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            We provide bulk lunch boxes for IT offices, seminars, PG hostels, and family gatherings with customizable menu options.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={siteConfig.getWhatsAppUrl("Hello! I need a custom catering quote for bulk tiffin meals.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} />
              <span>Get Custom Quote via WhatsApp</span>
            </a>
            <a href={siteConfig.getPhoneUrl()} className="btn btn-call">
              <Phone size={18} />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
