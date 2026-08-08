import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import { MapPin, Clock, CheckCircle2, MessageCircle, Phone, Navigation } from 'lucide-react';

export const metadata = {
  title: "Delivery Areas & Locations | Tiffin Delivery Coverage",
  description: "Check our daily tiffin delivery locations, lunch & dinner timings, and coverage sectors. Free doorstep delivery to major tech parks, PGs, and residential areas."
};

export default function DeliveryAreasPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            City Coverage
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Delivery Areas & Timings
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            We provide fast insulated doorstep delivery across major sectors, student hubs, corporate tech parks, and residential societies.
          </p>
        </div>
      </section>

      {/* Coverage Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionHeading
            badge="Coverage Radius"
            title="Sectors & Locations We Serve Daily"
            subtitle="Don't see your specific sector listed? Send us a WhatsApp message with your pincode!"
          />

          <div className="grid-4" style={{ gap: '1.75rem', marginBottom: '3.5rem' }}>
            {siteConfig.deliveryAreas.map((area, idx) => (
              <div key={idx} className="card card-hover" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <MapPin size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {area.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary-green)', fontWeight: '700', fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={16} />
                  <span>{area.status}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Clock size={14} />
                  <span>Timeslot: {area.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Shift Timings Card */}
          <div className="card glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '2px solid var(--secondary-green-light)' }}>
            <div className="grid-2" style={{ gap: '2rem', alignItems: 'center' }}>
              <div>
                <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
                  On-Time Delivery Standard
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>
                  Daily Delivery Shifts & Deadlines
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  To ensure hot food reaches your desk or apartment at peak hunger time, we operate two dedicated delivery shifts every day.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <Clock size={24} color="var(--primary-orange)" />
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '1.05rem' }}>Lunch Delivery Window</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{siteConfig.business.hours.lunchDelivery} (Order cutoff: 10:00 AM)</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                    <Clock size={24} color="#6366F1" />
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '1.05rem' }}>Dinner Delivery Window</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{siteConfig.business.hours.dinnerDelivery} (Order cutoff: 4:30 PM)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '320px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)' }}>
                <iframe
                  title="Kitchen Location Map"
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
          </div>
        </div>
      </section>

      {/* Inquiry Banner */}
      <section style={{ backgroundColor: 'var(--accent-cream)', padding: '3.5rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>
            Check If Your Specific Location Is Covered!
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Send us your live location or address on WhatsApp and our delivery team will confirm instantly.
          </p>

          <a href={siteConfig.getWhatsAppUrl("Hello! Is tiffin delivery available at my address?")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '0.9rem 2.25rem' }}>
            <Navigation size={20} />
            <span>Check My Location on WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  );
}
