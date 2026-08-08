'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { Sparkles, Utensils, Moon, Gift, MessageCircle } from 'lucide-react';

export default function WeeklyMenuTabs() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const { todaySpecial, schedule } = siteConfig.weeklyMenu;
  const currentDayMenu = schedule[activeDayIndex];

  return (
    <div>
      {/* Today's Special Banner */}
      <div
        className="glass-card"
        style={{
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '3.5rem',
          border: '2px solid var(--primary-orange-light)',
          background: 'linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div className="grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--primary-orange)', color: 'white', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: '800', marginBottom: '1rem' }}>
              <Sparkles size={16} />
              <span>{todaySpecial.tag}</span>
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              {todaySpecial.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {todaySpecial.desc}
            </p>
            <a
              href={siteConfig.getWhatsAppUrl(`Hello, I would like to order today's special meal: ${todaySpecial.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Order Today&apos;s Special</span>
            </a>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <Image
              src={todaySpecial.image}
              alt={todaySpecial.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Weekly Menu Tab Navigation */}
      <div className="menu-tab-nav">
        {schedule.map((item, idx) => (
          <button
            key={item.day}
            onClick={() => setActiveDayIndex(idx)}
            className={`menu-tab-btn ${activeDayIndex === idx ? 'active' : ''}`}
          >
            {item.day}
          </button>
        ))}
      </div>

      {/* Active Day Menu Card Display */}
      <div className="card" style={{ padding: '2.25rem', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-orange)' }}>
            {currentDayMenu.day} Menu Matrix
          </h3>
          <span className="badge badge-green" style={{ fontSize: '0.9rem' }}>
            Freshly Prepared Meals
          </span>
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {/* Lunch Item */}
          <div className="card" style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-orange)', marginBottom: '0.75rem', fontWeight: '800', fontSize: '1.1rem' }}>
              <Utensils size={20} />
              <span>Lunch Menu</span>
            </div>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.98rem', lineHeight: '1.6' }}>
              {currentDayMenu.lunch}
            </p>
          </div>

          {/* Dinner Item */}
          <div className="card" style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#6366F1', marginBottom: '0.75rem', fontWeight: '800', fontSize: '1.1rem' }}>
              <Moon size={20} />
              <span>Dinner Menu</span>
            </div>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.98rem', lineHeight: '1.6' }}>
              {currentDayMenu.dinner}
            </p>
          </div>

          {/* Sweet / Special Dish */}
          <div className="card" style={{ backgroundColor: 'var(--accent-cream)', border: '1px solid var(--accent-amber-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-amber)', marginBottom: '0.75rem', fontWeight: '800', fontSize: '1.1rem' }}>
              <Gift size={20} />
              <span>Day&apos;s Dessert Special</span>
            </div>
            <p style={{ color: 'var(--text-dark)', fontWeight: '700', fontSize: '1.1rem' }}>
              {currentDayMenu.special}
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Complimentary with every weekly & monthly tiffin box!
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href={siteConfig.getWhatsAppUrl(`Hello, I want to inquire about the ${currentDayMenu.day} tiffin menu.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.85rem 2rem' }}
          >
            <MessageCircle size={18} />
            <span>Book {currentDayMenu.day} Tiffin Box</span>
          </a>
        </div>
      </div>
    </div>
  );
}
