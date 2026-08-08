'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppContactForm() {
  const [name, setName] = useState('');
  const [mealPlan, setMealPlan] = useState('Full Tiffin (₹80)');
  const [deliveryArea, setDeliveryArea] = useState('Medical Square');
  const [mealType, setMealType] = useState('Both Morning & Evening');
  const [startDate, setStartDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = `Hello Prashma Mess Tiffin Services, I would like to know more about your tiffin service.

*ORDER INQUIRY DETAILS*
👤 *Name:* ${name || 'Customer'}
🍛 *Meal Plan:* ${mealPlan}
📍 *Nagpur Zone:* ${deliveryArea}
⏰ *Timing:* ${mealType}
📅 *Preferred Start:* ${startDate || 'As soon as possible'}
📝 *Special Note:* ${notes || 'None'}`;

    window.open(siteConfig.getWhatsAppUrl(formattedMessage), '_blank');
  };

  return (
    <div className="card glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="badge badge-orange" style={{ marginBottom: '0.5rem' }}>
          Direct WhatsApp Order
        </span>
        <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }}>
          Inquire Or Book Your Tiffin
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Select your preferences to send a direct message to Prashma Mess Tiffin Services on WhatsApp!
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        <div className="grid-2" style={{ gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              Select Tiffin Plan
            </label>
            <select
              value={mealPlan}
              onChange={(e) => setMealPlan(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.95rem',
                backgroundColor: 'white'
              }}
            >
              <option value="Half Tiffin (₹60)">Half Tiffin (₹60)</option>
              <option value="Full Tiffin (₹80)">Full Tiffin (₹80)</option>
              <option value="Monthly Half Tiffin (₹2400)">Monthly Half Tiffin (₹2400)</option>
              <option value="Monthly Full Tiffin (₹3200)">Monthly Full Tiffin (₹3200)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              Nagpur Delivery Location
            </label>
            <select
              value={deliveryArea}
              onChange={(e) => setDeliveryArea(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.95rem',
                backgroundColor: 'white'
              }}
            >
              {siteConfig.deliveryAreas.map((area, idx) => (
                <option key={idx} value={area.name}>
                  {area.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid-2" style={{ gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              Timing Slot
            </label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.95rem',
                backgroundColor: 'white'
              }}
            >
              <option value="Both Morning & Evening">Both Morning & Evening</option>
              <option value="Morning Only (8:00 AM - 11:00 AM)">Morning Only</option>
              <option value="Evening Only (5:00 PM - 8:00 PM)">Evening Only</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.95rem',
                backgroundColor: 'white'
              }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
            Special Note (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Extra Roti, less spicy sabzi, near Landmark..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              fontSize: '0.95rem',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button type="submit" className="btn btn-whatsapp" style={{ padding: '0.9rem', width: '100%' }}>
            <MessageCircle size={20} />
            <span>Send Order via WhatsApp</span>
          </button>

          <div className="grid-2" style={{ gap: '0.75rem' }}>
            <a
              href={siteConfig.getPhoneUrl()}
              className="btn btn-call"
              style={{ padding: '0.75rem', fontSize: '0.88rem' }}
            >
              <Phone size={16} />
              <span>Call +91 8767598542</span>
            </a>

            <a
              href={siteConfig.getPhoneUrl(true)}
              className="btn btn-outline"
              style={{ padding: '0.75rem', fontSize: '0.88rem' }}
            >
              <Phone size={16} />
              <span>Alt +91 9881935173</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
