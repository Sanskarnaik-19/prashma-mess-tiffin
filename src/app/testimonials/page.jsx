import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import ReviewCard from '@/components/ui/ReviewCard';
import { Star, MessageCircle } from 'lucide-react';

export const metadata = {
  title: "Customer Reviews & Ratings | What Foodies Say About Us",
  description: "Read genuine customer reviews from students, corporate employees, doctors, and families enjoying our daily homemade tiffins."
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            Trusted By 1,200+ Food Lovers
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Customer Reviews & Ratings
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            See why students, working professionals, and PG residents trust us for their daily lunch and dinner.
          </p>
        </div>
      </section>

      {/* Review Breakdown & Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Rating Summary Bar with Google Business Branding */}
          <div
            className="card glass-card"
            style={{
              padding: '2.25rem 2rem',
              marginBottom: '3.5rem',
              textAlign: 'center',
              maxWidth: '650px',
              margin: '0 auto 3.5rem auto',
              border: '2px solid rgba(66, 133, 244, 0.3)',
              boxShadow: '0 8px 30px rgba(66, 133, 244, 0.08)'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', backgroundColor: 'rgba(66, 133, 244, 0.08)', padding: '0.35rem 1rem', borderRadius: '20px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#4285F4' }}>Google Business Reviews</span>
            </div>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#4285F4', lineHeight: 1 }}>
              4.9
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', margin: '0.6rem 0' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FBBC05" color="#FBBC05" />
              ))}
            </div>
            <p style={{ fontWeight: '600', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '1.25rem' }}>
              4.9 out of 5 stars based on verified Google Reviews across Nagpur
            </p>
            <a
              href={siteConfig.googleReviewsUrl || siteConfig.business.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: '#4285F4', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '8px', fontSize: '0.92rem', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#ffffff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#ffffff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#ffffff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>View & Write Reviews on Google Maps</span>
            </a>
          </div>

          <SectionHeading
            badge="Verified Feedbacks"
            title="Real Words From Our Regular Customers"
            subtitle="Honest reviews from real people who eat our tiffins every single day."
          />

          {siteConfig.testimonials && siteConfig.testimonials.length > 0 ? (
            <div className="grid-2" style={{ gap: '2rem' }}>
              {siteConfig.testimonials.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="card glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                No customer reviews have been added yet. Real reviews can be added inside <code style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>siteConfig.js</code>!
              </p>
            </div>
          )}

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <a
              href={siteConfig.getWhatsAppUrl("Hello! I read your customer reviews and want to start my trial tiffin.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.9rem 2.25rem' }}
            >
              <MessageCircle size={20} />
              <span>Join 1,200+ Happy Foodies on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
