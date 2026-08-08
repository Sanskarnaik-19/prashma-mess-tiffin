import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import HeroSection from '@/components/home/HeroSection';
import StatsBar from '@/components/home/StatsBar';
import AudienceSection from '@/components/home/AudienceSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import PricingCard from '@/components/ui/PricingCard';
import ReviewCard from '@/components/ui/ReviewCard';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { MessageCircle, Phone, ArrowRight, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof Stats Bar */}
      <StatsBar />

      {/* Target Audiences */}
      <AudienceSection />

      {/* Featured Meal Plans */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionHeading
            badge="Popular Meal Plans"
            title="Choose Your Favorite Tiffin Service"
            subtitle="Prepared fresh daily with balanced nutrition and authentic home taste."
          />

          <div className="grid-2" style={{ marginBottom: '2.5rem', gap: '2rem' }}>
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/pricing" className="btn btn-outline" style={{ padding: '0.85rem 2rem' }}>
              <span>View All Pricing & Subscription Plans</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <FeaturesSection />

      {/* Transparent Pricing */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Flexible Pricing"
            title="Affordable Daily & Monthly Subscriptions"
            subtitle="No long-term contracts. Half Tiffin at ₹60 and Full Tiffin at ₹80."
          />

          <div className="grid-2" style={{ marginBottom: '2.5rem', gap: '2rem' }}>
            {siteConfig.pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/pricing" className="btn btn-outline" style={{ padding: '0.85rem 2rem' }}>
              <span>View Full Pricing Breakdown</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Areas Highlight */}
      <section className="section-padding" style={{ backgroundColor: 'var(--accent-cream)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <SectionHeading
            badge="Doorstep Delivery"
            title="Active Delivery Coverage Across Nagpur"
            subtitle="Punctual delivery directly to your home, PG, or office."
          />

          <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
            {siteConfig.deliveryAreas.map((area, idx) => (
              <div key={idx} className="card card-hover" style={{ backgroundColor: 'white', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <MapPin size={20} color="var(--primary-orange)" />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800' }}>{area.name}</h4>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--secondary-green)', fontWeight: '700' }}>
                  ✓ {area.status} ({area.time})
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/delivery-areas" className="btn btn-outline">
              <span>Check Delivery Timings & Map</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      {siteConfig.testimonials && siteConfig.testimonials.length > 0 && (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="container">
            <SectionHeading
              badge="Customer Feedback"
              title="Loved By 100+ Regular Foodies"
              subtitle="Read real reviews from students, IT professionals, and families who enjoy our daily tiffins."
            />

            <div className="grid-2" style={{ marginBottom: '2.5rem', gap: '2rem' }}>
              {siteConfig.testimonials.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about starting your tiffin subscription with us."
          />

          <FaqAccordion />
        </div>
      </section>

      {/* Large Bottom Call-to-Action Banner */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="badge badge-orange" style={{ marginBottom: '1rem' }}>
            Ready To Enjoy Hot Home Food?
          </span>
          <h2 style={{ fontSize: '2.75rem', fontWeight: '800', color: 'white', marginBottom: '1rem' }}>
            Order Your First Homemade Meal Today!
          </h2>
          <p style={{ color: '#D6D3D1', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Call or send us a WhatsApp message to book your tiffin box. No app downloads or registration needed!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '1rem 2.25rem', fontSize: '1.1rem' }}
            >
              <MessageCircle size={22} />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href={siteConfig.getPhoneUrl()}
              className="btn btn-call"
              style={{ padding: '1rem 2.25rem', fontSize: '1.1rem' }}
            >
              <Phone size={22} />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
