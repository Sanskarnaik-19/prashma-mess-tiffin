import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Home, Utensils, Sparkles, Leaf, ShieldCheck, Truck, Package, Ban, Heart, Star } from 'lucide-react';

export default function FeaturesSection() {
  const featureList = [
    { title: "Homemade Food", icon: Home, emoji: "🏠", desc: "Authentic recipes prepared with traditional home style warmth and care." },
    { title: "Freshly Cooked Every Day", icon: Utensils, emoji: "🍲", desc: "Prepared fresh morning and evening using quality hand-selected ingredients." },
    { title: "Hygienic Kitchen", icon: ShieldCheck, emoji: "🧼", desc: "Sanitized kitchen environment adhering to standard safety and hygiene norms." },
    { title: "Fresh Vegetables Daily", icon: Leaf, emoji: "🥬", desc: "Farm fresh seasonal vegetables sourced fresh every single morning." },
    { title: "Balanced Spices", icon: Sparkles, emoji: "🌿", desc: "Light, non-oily preparation with pure spices for easy digestion and health." },
    { title: "Timely Delivery", icon: Truck, emoji: "🚚", desc: "Punctual doorstep delivery across Tukdoji Putla, Medical Square, Manewada, etc." },
    { title: "Clean & Safe Packaging", icon: Package, emoji: "📦", desc: "Food-grade, leak-proof thermal containers ensuring food stays hot." },
    { title: "No Preservatives Used", icon: Ban, emoji: "🚫", desc: "100% natural, healthy food prepared without synthetic additives or preservatives." },
    { title: "Taste Like Mother's Cooking", icon: Heart, emoji: "❤️", desc: "Comforting meals that make every student and working professional feel at home." },
    { title: "Trusted by 100+ Happy Customers", icon: Star, emoji: "⭐", desc: "7+ years of serving healthy regular meals to food lovers in Nagpur." }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeading
          badge="Why Choose Us"
          title="Experience The Pure Taste Of Home"
          subtitle="Every meal is cooked fresh daily in a clean kitchen with balanced spices and zero preservatives."
        />

        <div className="grid-3" style={{ gap: '1.75rem' }}>
          {featureList.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="card card-hover" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.6rem' }}>{feature.emoji}</span>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-orange-light)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent size={22} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6' }}>
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
