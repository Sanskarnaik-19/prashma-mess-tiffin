import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import PricingCard from '@/components/ui/PricingCard';
import { ShieldCheck, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "Pricing & Plans | Affordable Tiffin Subscription Rates",
  description: "Transparent tiffin pricing starting at ₹80 per meal. Explore Daily Trial, Weekly Saver, and Monthly Regular & Premium subscriptions with zero extra delivery charges."
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            Transparent & Honest Rates
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Simple & Affordable Pricing Plans
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            No hidden costs, no surprise charges. Pay for what you eat with easy pause and carry-forward options.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionHeading
            badge="Select Your Plan"
            title="Tiffin Subscription Packages"
            subtitle="All packages include doorstep delivery and insulated leak-proof hot containers."
          />

          <div className="grid-4" style={{ gap: '1.75rem' }}>
            {siteConfig.pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Guarantee */}
      <section className="section-padding" style={{ backgroundColor: 'var(--accent-cream)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="card glass-card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="badge badge-green" style={{ marginBottom: '1rem' }}>
              100% Satisfaction Guarantee
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>
              Why Hundreds Choose Our Monthly Subscription
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              When you subscribe monthly, you save over 20% compared to eating out or daily restaurant orders. You get home-cooked nutrition delivered daily without worrying about grocery shopping or dishwashing.
            </p>

            <div className="grid-4" style={{ textAlign: 'left', marginBottom: '2rem', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '700' }}>
                <CheckCircle2 color="var(--secondary-green)" />
                <span>Includes Both Lunch & Dinner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '700' }}>
                <CheckCircle2 color="var(--secondary-green)" />
                <span>Zero Delivery Charges</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '700' }}>
                <CheckCircle2 color="var(--secondary-green)" />
                <span>Easy 1-Click WhatsApp Pause</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '700' }}>
                <CheckCircle2 color="var(--secondary-green)" />
                <span>Unused Balance Rollover</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={siteConfig.getWhatsAppUrl("Hello! I want to enroll in your Monthly Tiffin Plan.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} />
                <span>Book Monthly Plan on WhatsApp</span>
              </a>
              <a href={siteConfig.getPhoneUrl()} className="btn btn-call">
                <Phone size={18} />
                <span>Call Kitchen Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
