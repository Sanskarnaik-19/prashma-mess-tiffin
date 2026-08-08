import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { Check, MessageCircle } from 'lucide-react';

export default function PricingCard({ plan }) {
  const { name, price, period, badge, popular, description, features, whatsappMsg } = plan;

  return (
    <div
      className={`card card-hover ${popular ? 'glass-card' : ''}`}
      style={{
        position: 'relative',
        border: popular ? '2px solid var(--primary-orange)' : '1px solid var(--border-color)',
        boxShadow: popular ? 'var(--shadow-xl)' : 'var(--shadow-md)'
      }}
    >
      {badge && (
        <div style={{ position: 'absolute', top: '-0.85rem', left: '50%', transform: 'translateX(-50%)' }}>
          <span className={`badge ${popular ? 'badge-orange' : 'badge-green'}`} style={{ boxShadow: 'var(--shadow-sm)' }}>
            {badge}
          </span>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '0.75rem', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>{name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{description}</p>
      </div>

      <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-orange)' }}>{price}</span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.3rem' }}>/{period}</span>
      </div>

      <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--secondary-green-light)', color: 'var(--secondary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Check size={13} strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={siteConfig.getWhatsAppUrl(whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${popular ? 'btn-primary' : 'btn-whatsapp'}`}
        style={{ width: '100%' }}
      >
        <MessageCircle size={18} />
        <span>Subscribe via WhatsApp</span>
      </a>
    </div>
  );
}
