import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import SectionHeading from '@/components/ui/SectionHeading';
import { ShieldCheck, Heart, ChefHat, Sparkles, MessageCircle, Phone, Award } from 'lucide-react';

export const metadata = {
  title: "About Us | Prashma Mess Tiffin Services Nagpur",
  description: "Learn about Prashma Mess Tiffin Services - 7+ years of serving delicious, fresh, hygienic homemade tiffins across Nagpur."
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-orange" style={{ marginBottom: '0.75rem' }}>
            7+ Years of Serving Taste of Home
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            About Prashma Mess Tiffin Services
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            {siteConfig.business.tagline}
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Prashma Mess Hygienic Kitchen Nagpur"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
                Cooked With Love & Care in Nagpur
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '1.25rem', lineHeight: '1.2' }}>
                Homemade Food, Delivered With Love
              </h2>
              <p style={{ color: 'var(--text-dark)', fontSize: '1.08rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Prashma Mess Tiffin Services has proudly served customers in Nagpur for more than seven years. Our mission is to provide delicious homemade meals that remind people of the comfort and warmth of food prepared at home. Every meal is cooked fresh daily using quality ingredients in a hygienic kitchen, ensuring taste, nutrition, and consistency.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                Whether you are a student, working professional, family, or someone living away from home, we strive to deliver healthy, affordable, and satisfying meals right to your doorstep.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--accent-cream)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-orange)' }}>7+ Years</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: '700' }}>Proven Experience</div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--secondary-green-light)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--secondary-green)' }}>100+</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: '700' }}>Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <SectionHeading
            badge="Core Philosophy"
            title="Our Mission & Vision"
            subtitle="The principles that guide every meal cooked in our kitchen."
          />

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            <div className="card glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-dark)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                {siteConfig.business.mission}
              </p>
            </div>

            <div className="card glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--secondary-green-light)', color: 'var(--secondary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ChefHat size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-dark)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                {siteConfig.business.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Promise */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="card glass-card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto', border: '2px solid var(--primary-orange-light)' }}>
            <span className="badge badge-orange" style={{ marginBottom: '1rem' }}>
              Our Promise To You
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>
              Customer Promise
            </h2>
            <p style={{ color: 'var(--text-dark)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              &ldquo;{siteConfig.business.customerPromise}&rdquo;
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={siteConfig.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </a>
              <a href={siteConfig.getPhoneUrl()} className="btn btn-call">
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
