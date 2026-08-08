import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>
  );
}

export default function ReviewCard({ review }) {
  const { name, role, rating = 5, avatar, comment, date, isGoogle = true } = review;
  const googleMapsUrl = siteConfig.business?.address?.googleMapsUrl || "https://maps.app.goo.gl/3EG2busDsmvX7EuW6";

  return (
    <div className="card card-hover" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', gap: '0.2rem' }}>
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={18} fill="#FBBC05" color="#FBBC05" />
            ))}
          </div>
          {isGoogle && (
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: '600', color: '#4285F4', textDecoration: 'none', backgroundColor: 'rgba(66, 133, 244, 0.08)', padding: '0.25rem 0.6rem', borderRadius: '12px' }}
            >
              <GoogleIcon size={14} />
              <span>Google Review</span>
            </a>
          )}
        </div>

        <p style={{ color: 'var(--text-dark)', fontSize: '0.98rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          &ldquo;{comment}&rdquo;
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {avatar && (
            <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image
                src={avatar}
                alt={name}
                fill
                sizes="44px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          <div>
            <h4 style={{ fontSize: '1.02rem', fontWeight: '700', margin: 0 }}>{name}</h4>
            {role && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{role}</div>}
          </div>
        </div>

        {date && (
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {date}
          </span>
        )}
      </div>
    </div>
  );
}
