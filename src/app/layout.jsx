import '@/styles/globals.css';
import '@/styles/components.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { siteConfig } from '@/config/siteConfig';

export const metadata = {
  metadataBase: new URL('https://www.prashmamess.com'),
  title: {
    default: "Prashma Mess Tiffin Services | Homemade Tiffin Service in Nagpur",
    template: `%s | Prashma Mess Tiffin Services`
  },
  description: "Prashma Mess Tiffin Services provides fresh homemade tiffins across Nagpur. Affordable daily and monthly meal plans with hygienic cooking, timely delivery, and the comforting taste of home.",
  keywords: [
    "Prashma Mess Tiffin Services",
    "Tiffin Service Nagpur",
    "Homemade Food Nagpur",
    "Mess Service Nagpur",
    "Daily Tiffin Nagpur",
    "Monthly Tiffin Nagpur",
    "Home Cooked Meals Nagpur",
    "Student Tiffin Nagpur",
    "Office Lunch Nagpur"
  ],
  authors: [{ name: "Prashma Mess Tiffin Services" }],
  creator: "Prashma Mess Tiffin Services",
  publisher: "Prashma Mess Tiffin Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  openGraph: {
    title: "Prashma Mess Tiffin Services | Homemade Tiffin Service in Nagpur",
    description: "Prashma Mess Tiffin Services provides fresh homemade tiffins across Nagpur. Affordable daily and monthly meal plans with hygienic cooking, timely delivery, and the comforting taste of home.",
    url: 'https://www.prashmamess.com',
    siteName: 'Prashma Mess Tiffin Services',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "Prashma Mess Tiffin Services Nagpur",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prashma Mess Tiffin Services | Homemade Tiffin Service in Nagpur",
    description: "Prashma Mess Tiffin Services provides fresh homemade tiffins across Nagpur. Affordable daily and monthly meal plans with hygienic cooking, timely delivery, and the comforting taste of home.",
    images: ['https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data Schema for Local Business & FoodEstablishment
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    'name': 'Prashma Mess Tiffin Services',
    'image': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://www.prashmamess.com',
    'url': 'https://www.prashmamess.com',
    'telephone': '+918767598542',
    'priceRange': '₹60 - ₹3200',
    'servesCuisine': ['Homemade', 'Indian', 'Maharashtrian', 'North Indian'],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Plot No. 18, New Kailash Nagar, Near Sariputta Buddha Vihar',
      'addressLocality': 'Nagpur',
      'addressRegion': 'Maharashtra',
      'postalCode': '440027',
      'addressCountry': 'IN'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '08:00',
        'closes': '20:00'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '100'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
