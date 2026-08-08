'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Subscription', 'Delivery', 'Food Quality', 'Pricing'];

  const filteredFaqs = activeCategory === 'All'
    ? siteConfig.faqs
    : siteConfig.faqs.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      {/* Category Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
            className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.45rem 1.1rem', fontSize: '0.88rem' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        {filteredFaqs.map((faq, idx) => (
          <div key={idx} className="accordion-item">
            <button
              onClick={() => toggleAccordion(idx)}
              className="accordion-header"
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={20}
                style={{
                  transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                  color: openIndex === idx ? 'var(--primary-orange)' : 'var(--text-muted)'
                }}
              />
            </button>

            {openIndex === idx && (
              <div className="accordion-body">
                <p>{faq.answer}</p>
                <div style={{ marginTop: '0.85rem' }}>
                  <a
                    href={siteConfig.getWhatsAppUrl(`Hi, I have a question about: "${faq.question}"`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', color: 'var(--secondary-green)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <MessageCircle size={14} />
                    <span>Ask more on WhatsApp →</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
