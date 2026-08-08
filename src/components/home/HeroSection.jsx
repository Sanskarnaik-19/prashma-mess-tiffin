import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { MessageCircle, Phone, Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange-hover)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              <ShieldCheck size={18} />
              <span>7+ Years of Homemade Excellence in Nagpur</span>
            </div>

            <h1 className="hero-title">
              Fresh <span className="text-orange">Homemade Tiffins</span> Delivered Daily
            </h1>

            <p className="hero-subheading">
              Experience the Taste of Home with freshly prepared homemade meals delivered across major areas of Nagpur. Healthy, hygienic, affordable, and made with love.
            </p>

            {/* Main Buttons */}
            <div className="hero-btn-group">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
              >
                <MessageCircle size={22} />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={siteConfig.getPhoneUrl()}
                className="btn btn-call"
                style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
              >
                <Phone size={22} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: '700' }}>
                <CheckCircle size={18} color="var(--secondary-green)" />
                <span>No Preservatives Used</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: '700' }}>
                <CheckCircle size={18} color="var(--secondary-green)" />
                <span>Hygienic Kitchen</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: '700' }}>
                <CheckCircle size={18} color="var(--secondary-green)" />
                <span>Taste Like Mother&apos;s Cooking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Hero Image & Floating Cards */}
          <div className="hero-image-container">
            <div className="hero-image-frame animate-float">
              <Image
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh Prashma Mess Homemade Tiffin"
                fill
                priority
                sizes="(max-width: 992px) 100vw, 500px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Top Right Floating Badge */}
            <div className="floating-badge badge-top-right">
              <div style={{ backgroundColor: 'var(--accent-amber-light)', padding: '0.5rem', borderRadius: '50%', color: 'var(--accent-amber)' }}>
                <Star size={20} fill="var(--accent-amber)" />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', lineHeight: '1.1' }}>100+ Happy Customers</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Served in Nagpur</div>
              </div>
            </div>

            {/* Bottom Left Floating Badge */}
            <div className="floating-badge badge-bottom-left">
              <div style={{ backgroundColor: 'var(--secondary-green-light)', padding: '0.5rem', borderRadius: '50%', color: 'var(--secondary-green)' }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', lineHeight: '1.1' }}>Delivery Timings</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Morning 8-11 AM | Evening 5-8 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
