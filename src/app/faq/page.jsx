import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { siteConfig } from '@/config/siteConfig';
import { MessageCircle, Phone } from 'lucide-react';

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Tiffin Service Answers",
  description: "Find answers to popular questions about our daily tiffin delivery timings, pricing, subscription pause options, hygiene standards, and menu customization."
};

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            Help & Information
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            Have questions about ordering, delivery timings, menu items, or subscription options? Find all answers below.
          </p>
        </div>
      </section>

      {/* Accordion Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionHeading
            badge="Categorized FAQ"
            title="Everything You Need To Know"
            subtitle="Click on any category to filter questions or click a question to expand the answer."
          />

          <FaqAccordion />
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section style={{ backgroundColor: 'var(--accent-cream)', padding: '3.5rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>
            Still Have Questions Not Answered Here?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Our kitchen desk team is online on WhatsApp to answer your custom queries instantly!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={siteConfig.getWhatsAppUrl("Hello! I have a question about your tiffin service.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} />
              <span>Ask on WhatsApp</span>
            </a>
            <a href={siteConfig.getPhoneUrl()} className="btn btn-call">
              <Phone size={18} />
              <span>Call Us Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
