'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/siteConfig';
import { Phone, MessageCircle, Menu, X, UtensilsCrossed, Star, MapPin, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing & Plans', href: '/pricing' },
    { label: 'Delivery Areas', href: '/delivery-areas' },
    { label: 'Reviews', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Header Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} />
              <span>Serving New Kailash Nagar, Manewada, Medical Sq & nearby Nagpur</span>
            </span>
            <span className="top-bar-item desktop-only">
              <Clock size={13} />
              <span>Deliveries: 8 AM - 11 AM & 5 PM - 8 PM</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href={siteConfig.getPhoneUrl()} className="top-bar-link">
              <Phone size={13} />
              <span>{siteConfig.business.phoneNumber}</span>
            </a>
            <span className="top-bar-badge">
              <Star size={12} fill="#ffc107" color="#ffc107" />
              <span>4.9 Google Rating</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="navbar-sticky">
        <div className="container nav-container">
          {/* Logo */}
          <Link href="/" className="logo-group">
            <div className="logo-badge">
              <UtensilsCrossed size={22} />
            </div>
            <div>
              <div className="logo-text">{siteConfig.business.name}</div>
              <div className="logo-sub">Nagpur Homemade Tiffins</div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="nav-actions">
            <a
              href={siteConfig.getPhoneUrl()}
              className="btn btn-call nav-call-btn"
              title="Call Us Direct"
            >
              <Phone size={15} />
              <span className="btn-text">Call Now</span>
            </a>

            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-wa-btn"
            >
              <MessageCircle size={16} />
              <span>Order Tiffin</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-header">
              <div className="logo-text" style={{ fontSize: '1.1rem' }}>Menu Navigation</div>
              <button onClick={() => setIsOpen(false)} className="mobile-close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-arrow">→</span>
                </Link>
              ))}
            </div>

            <div className="mobile-drawer-actions">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                <span>Order Tiffin on WhatsApp</span>
              </a>

              <a
                href={siteConfig.getPhoneUrl()}
                className="btn btn-call"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={18} />
                <span>Call Us ({siteConfig.business.phoneNumber})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
