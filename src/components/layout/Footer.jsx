import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="grid-4" style={{ gap: '2.5rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="logo-badge" style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }}>
                P
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white' }}>
                {siteConfig.business.legalName}
              </span>
            </div>
            <p style={{ color: '#D1D5DB', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              {siteConfig.business.tagline}
            </p>
            <div style={{ color: '#9CA3AF', fontSize: '0.88rem' }}>
              Nagpur, Maharashtra, India
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/services" className="footer-link">Tiffin Services</Link></li>
              <li><Link href="/pricing" className="footer-link">Pricing Plans</Link></li>
              <li><Link href="/delivery-areas" className="footer-link">Delivery Areas</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Service Delivery Zones in Nagpur */}
          <div>
            <h3 className="footer-heading">Nagpur Delivery Zones</h3>
            <ul className="footer-links">
              {siteConfig.deliveryAreas.map((area, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} color="#F97316" />
                  <span style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Address */}
          <div>
            <h3 className="footer-heading">Contact & Address</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.7rem 1rem', fontSize: '0.9rem' }}
              >
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={siteConfig.getPhoneUrl()}
                className="btn btn-call"
                style={{ width: '100%', padding: '0.7rem 1rem', fontSize: '0.9rem' }}
              >
                <Phone size={18} />
                <span>Call: {siteConfig.business.phoneNumber}</span>
              </a>

              <a
                href={siteConfig.getPhoneUrl(true)}
                className="btn btn-outline"
                style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', color: 'white', borderColor: '#4B5563' }}
              >
                <Phone size={16} />
                <span>Alt: {siteConfig.business.secondaryPhoneNumber}</span>
              </a>

              <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                <strong style={{ color: 'white' }}>Address:</strong><br />
                {siteConfig.business.address.street},<br />
                {siteConfig.business.address.area},<br />
                {siteConfig.business.address.city} – {siteConfig.business.address.pincode}
              </div>

              <a
                href={siteConfig.business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#F97316', fontSize: '0.85rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <span>View on Google Maps</span>
                <ExternalLink size={14} />
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.82rem', marginTop: '0.5rem' }}>
                <Clock size={16} color="#F97316" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                <div>
                  <div><strong>Morning:</strong> {siteConfig.business.hours.morning}</div>
                  <div><strong>Evening:</strong> {siteConfig.business.hours.evening}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {siteConfig.business.legalName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Delivered with <Heart size={14} color="#F97316" fill="#F97316" /> in Nagpur.
          </div>
        </div>
      </div>
    </footer>
  );
}
