"use client"
import React from 'react';

interface GtagEventParams {
  event_category: string;
  event_label: string;
  value: string;
}

declare global {
  interface Window {
    gtag: (command: string, action: string, params: GtagEventParams) => void;
  }
}

interface EventParams {
  action: string;
  category: string;
  label: string;
  value: string;
}

const Home: React.FC = () => {
  const event = ({ action, category, label, value }: EventParams): void => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button
        onClick={() => {
          event({
            action: 'add_to_cart',
            category: 'ecommerce',
            label: 'Item added to cart',
            value: 'Tesla',
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Home;