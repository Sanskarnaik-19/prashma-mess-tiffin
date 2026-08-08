import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';

export default function ServiceCard({ service }) {
  const { title, category, price, image, description, highlights, popular, whatsappMsg } = service;

  return (
    <div className={`card card-hover ${popular ? 'glass-card' : ''}`} style={{ position: 'relative' }}>
      {popular && (
        <span
          className="badge badge-orange"
          style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 5, boxShadow: 'var(--shadow-md)' }}
        >
          ★ Most Popular
        </span>
      )}

      {/* Image Frame */}
      <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem' }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem' }}>
          <span className="badge badge-green">
            {category}
          </span>
        </div>
      </div>

      {/* Header & Price */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: '800' }}>{title}</h3>
        <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-orange)', backgroundColor: 'var(--primary-orange-light)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
          {price}
        </span>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', flexGrow: 1 }}>
        {description}
      </p>

      {/* Highlights List */}
      <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {highlights.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '500' }}>
            <CheckCircle2 size={16} color="var(--secondary-green)" style={{ flexShrink: 0 }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <a
          href={siteConfig.getWhatsAppUrl(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ padding: '0.65rem', fontSize: '0.88rem' }}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>

        <a
          href={siteConfig.getPhoneUrl()}
          className="btn btn-call"
          style={{ padding: '0.65rem', fontSize: '0.88rem' }}
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
