import React from 'react';
import { Award, Heart, MapPin, Utensils } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { label: "Years of Experience", value: "7+", icon: Award, color: "#F97316" },
    { label: "Happy Customers", value: "100+", icon: Heart, color: "#EF4444" },
    { label: "Delivery Areas Covered", value: "7", icon: MapPin, color: "#F59E0B" },
    { label: "Cooked Every Day", value: "Fresh", icon: Utensils, color: "#16A34A" },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '2.5rem 0' }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', backgroundColor: `${stat.color}15`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: 1, color: 'var(--text-dark)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
