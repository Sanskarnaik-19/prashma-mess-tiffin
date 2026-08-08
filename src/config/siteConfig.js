/**
 * Central Site Configuration File for Prashma Mess Tiffin Services (Nagpur)
 * Update business details, phone numbers, WhatsApp, menu items, pricing, and coverage areas here.
 */

export const siteConfig = {
  business: {
    name: "Prashma Mess",
    legalName: "Prashma Mess Tiffin Services",
    tagline: "Experience the Taste of Home – Homemade Food, Delivered with Love.",
    subheading: "Experience the Taste of Home with freshly prepared homemade meals delivered across major areas of Nagpur. Healthy, hygienic, affordable, and made with love.",
    description: "Prashma Mess Tiffin Services provides fresh homemade tiffins across Nagpur. Affordable daily and monthly meal plans with hygienic cooking, timely delivery, and the comforting taste of home.",

    // Centralized Contact Credentials
    phoneNumber: "+918767598542", // Primary phone for tel: links
    secondaryPhoneNumber: "+919881935173", // Secondary phone
    whatsappNumber: "918767598542", // WhatsApp country code format without + or spaces
    whatsappDirectUrl: "https://wa.me/918767598542", // Direct WhatsApp URL
    email: "contact@prashmamess.com",

    address: {
      street: "Plot No. 18, New Kailash Nagar",
      area: "Near Sariputta Buddha Vihar",
      city: "Nagpur",
      state: "Maharashtra",
      pincode: "440027",
      country: "India",
      googleMapsUrl: "https://maps.app.goo.gl/3EG2busDsmvX7EuW6",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.254194098909!2d79.1026042!3d21.102434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf2a6ebbbbbb%3A0x123456789abcdef!2sNew%20Kailash%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440027!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },

    hours: {
      morning: "8:00 AM – 11:00 AM",
      evening: "5:00 PM – 8:00 PM",
      lunchDelivery: "8:00 AM – 11:00 AM",
      dinnerDelivery: "5:00 PM – 8:00 PM",
      workingDays: "Monday to Sunday (7 Days a Week)",
    },

    metrics: {
      yearsExperience: "7+",
      happyCustomers: "100+",
      deliveryAreasCount: "7",
      cookedDaily: "Fresh Daily",
      rating: "4.9/5",
      hygieneScore: "100%",
    },

    mission: "To provide fresh, hygienic, affordable, and delicious homemade meals that make every customer feel at home.",
    vision: "To become Nagpur's most trusted homemade tiffin and mess service by consistently delivering quality food and excellent customer service.",
    customerPromise: "Every meal is prepared with fresh ingredients, balanced spices, and no preservatives. We believe healthy food should also be delicious and affordable."
  },

  // Helper Functions for WhatsApp and Call links
  getWhatsAppUrl: (customMessage) => {
    if (!customMessage) {
      return `https://wa.me/${siteConfig.business.whatsappNumber}`;
    }
    return `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  },

  getPhoneUrl: (secondary = false) => {
    const number = secondary ? siteConfig.business.secondaryPhoneNumber : siteConfig.business.phoneNumber;
    return `tel:${number.replace(/\s+/g, '')}`;
  },

  // Target Customer Audiences
  targetAudiences: [
    { title: "Students & PG Residents", desc: "Nutritious, home-cooked food in Nagpur that reminds you of mom's cooking at affordable rates.", icon: "GraduationCap" },
    { title: "Working Professionals", desc: "Timely delivery at your office desk or apartment so you never miss a healthy lunch break.", icon: "Briefcase" },
    { title: "Families & Couples", desc: "Low-oil, balanced meal boxes cooked fresh every morning and evening with 100% hygiene guarantee.", icon: "Heart" },
    { title: "Anyone Living Away From Home", desc: "Wholesome daily meals made with fresh vegetables and zero preservatives.", icon: "Building2" },
  ],

  // Why Choose Us Feature Cards
  features: [
    { title: "Homemade Food", desc: "Authentic recipes cooked with genuine home style warmth and care.", icon: "Home" },
    { title: "Freshly Cooked Every Day", desc: "Prepared fresh morning and evening using quality ingredients.", icon: "Utensils" },
    { title: "Hygienic Kitchen", desc: "Sanitized kitchen environment with glove-handled clean packaging.", icon: "ShieldCheck" },
    { title: "Fresh Vegetables Daily", desc: "Farm fresh seasonal vegetables hand-picked every morning.", icon: "Leaf" },
    { title: "Balanced Spices", desc: "Light, non-oily prep with pure spices for easy digestion.", icon: "Sparkles" },
    { title: "Timely Delivery", desc: "Punctual delivery directly to your doorstep across Nagpur.", icon: "Truck" },
    { title: "Clean & Safe Packaging", desc: "Food-grade, leak-proof, microwave-safe meal containers.", icon: "Package" },
    { title: "No Preservatives Used", desc: "100% natural, healthy food cooked without artificial chemicals.", icon: "Ban" },
    { title: "Taste Like Mother's Cooking", desc: "Hearty flavors that make every single customer feel at home.", icon: "Heart" },
    { title: "Trusted by 100+ Happy Customers", desc: "7+ years of serving happy regular foodies in Nagpur.", icon: "Star" },
  ],

  // Services Offered & Specific Meal Contents
  services: [
    {
      id: "half-tiffin-daily",
      title: "Half Tiffin (Daily)",
      category: "Daily Light Meal",
      price: "₹60 / meal",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      description: "Light balanced meal box consisting of 3 Chapatis, Half Tiffin Rice, Flavorful Dal & Daily Fresh Sabji.",
      highlights: ["3 Soft Chapatis", "Half Tiffin Rice", "Flavorful Dal", "Daily Fresh Sabji", "Free Doorstep Delivery"],
      popular: false,
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I would like to order the Half Tiffin (₹60)."
    },
    {
      id: "full-tiffin-daily",
      title: "Full Tiffin (Daily)",
      category: "Daily Complete Meal",
      price: "₹80 / meal",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      description: "Hearty full thali meal box consisting of 5 Chapatis, Full Tiffin Rice, Flavorful Dal & Daily Fresh Sabji with Salad & Pickle.",
      highlights: ["5 Soft Chapatis", "Full Tiffin Rice", "Flavorful Dal", "Daily Fresh Sabji", "Includes Salad & Pickle"],
      popular: true,
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I would like to order the Full Tiffin (₹80)."
    },
    {
      id: "monthly-half-tiffin",
      title: "Monthly Half Tiffin Subscription",
      category: "Monthly Subscription",
      price: "₹2,400 / month",
      period: "per month",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      description: "Monthly light meal package available in both Veg & Non-Veg options. Each meal includes 3 Chapatis, Half Tiffin Rice, Dal & Sabji/Curry for 30 days.",
      highlights: ["30 Days Service (60 Meals)", "Veg & Non-Veg Options Available", "3 Chapatis + Half Rice + Dal + Sabji", "Easy 1-Click WhatsApp Pause", "Free Doorstep Delivery", "Zero Extra Hidden Fees"],
      popular: false,
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I would like to subscribe to the Monthly Half Tiffin Plan (₹2400/month - Veg/Non-Veg)."
    },
    {
      id: "monthly-full-tiffin",
      title: "Monthly Full Tiffin Subscription",
      category: "Monthly Best Value",
      price: "₹3,200 / month",
      period: "per month",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      description: "Complete 30-day full thali service available in both Veg & Non-Veg options. Each meal includes 5 Chapatis, Full Tiffin Rice, Dal, Sabji/Curry, Salad & Pickle.",
      highlights: ["Full 30 Days Service (60 Meals)", "Veg & Non-Veg Options Available", "5 Chapatis + Full Rice + Dal + Sabji", "Includes Salad & Pickle", "Sunday Special Dish Upgrade", "Free Doorstep Delivery"],
      popular: true,
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I would like to subscribe to the Monthly Full Tiffin Plan (₹3200/month - Veg/Non-Veg)."
    }
  ],

  // Pricing Plans Breakdown
  pricingPlans: [
    {
      id: "half-tiffin",
      name: "Half Tiffin",
      price: "₹60",
      period: "per meal",
      badge: "Light Meal",
      description: "Consists of 3 Chapatis, Half Tiffin Rice, Dal & Sabji.",
      features: [
        "3 Soft Chapatis",
        "Half Tiffin Rice",
        "Flavorful Dal",
        "Daily Fresh Sabji",
        "Free Doorstep Delivery",
        "WhatsApp instant booking"
      ],
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I would like to book a Half Tiffin meal (₹60)."
    },
    {
      id: "full-tiffin",
      name: "Full Tiffin",
      price: "₹80",
      period: "per meal",
      badge: "Most Popular",
      popular: true,
      description: "Consists of 5 Chapatis, Full Tiffin Rice, Dal, Sabji, Salad & Pickle.",
      features: [
        "5 Soft Chapatis",
        "Full Tiffin Rice",
        "Flavorful Dal",
        "Daily Fresh Sabji",
        "Includes Salad & Pickle",
        "Free Doorstep Delivery"
      ],
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I would like to book a Full Tiffin meal (₹80)."
    },
    {
      id: "monthly-half",
      name: "Monthly Half Tiffin",
      price: "₹2,400",
      period: "per month (30 Days)",
      badge: "Veg & Non-Veg Available",
      description: "Includes BOTH Lunch & Dinner daily (60 total meals). Veg & Non-Veg options. 3 Chapatis, Half Rice, Dal & Sabji/Curry per meal.",
      features: [
        "Includes BOTH Lunch & Dinner daily",
        "Total 60 meals delivered over 30 Days",
        "Veg & Non-Veg Options Available",
        "Per meal: 3 Chapatis + Half Rice + Dal + Sabji",
        "Delivered Morning (Lunch) & Evening (Dinner)",
        "Easy 1-click WhatsApp pause & rollover",
        "Zero extra delivery charges"
      ],
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I want to subscribe to the Monthly Half Tiffin Plan (₹2400 for Lunch & Dinner - Veg/Non-Veg)."
    },
    {
      id: "monthly-full",
      name: "Monthly Full Tiffin",
      price: "₹3,200",
      period: "per month (30 Days)",
      badge: "Veg & Non-Veg Available",
      popular: true,
      description: "Includes BOTH Lunch & Dinner daily (60 total meals). Veg & Non-Veg options. 5 Chapatis, Full Rice, Dal, Sabji/Curry, Salad & Pickle per meal.",
      features: [
        "Includes BOTH Lunch & Dinner daily",
        "Total 60 meals delivered over 30 Days",
        "Veg & Non-Veg Options Available",
        "Per meal: 5 Chapatis + Full Rice + Dal + Sabji",
        "Includes fresh Salad & Pickle with every meal",
        "Delivered Morning (Lunch) & Evening (Dinner)",
        "Zero extra delivery charges"
      ],
      whatsappMsg: "Hello Prashma Mess Tiffin Services, I want to subscribe to the Monthly Full Tiffin Plan (₹3200 for Lunch & Dinner - Veg/Non-Veg)."
    }
  ],

  // Service & Delivery Coverage Locations in Nagpur
  deliveryAreas: [
    { name: "Tukdoji Putla", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
    { name: "Chota Tajbagh", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
    { name: "Medical Square", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
    { name: "Rameshwari", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
    { name: "Bhagwan Nagar", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
    { name: "Omkar Nagar", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
    { name: "Manewada", status: "Active Delivery", time: "8:00 - 11:00 AM / 5:00 - 8:00 PM", icon: "CheckCircle2" },
  ],

  // Google Business & Customer Reviews
  // Replace these with your exact Google Maps customer reviews
  googleReviewsUrl: "https://maps.app.goo.gl/3EG2busDsmvX7EuW6",
  testimonials: [
    {
      id: 1,
      name: "Customer Name 1",
      role: "Nagpur Resident",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
      comment: "Paste your 1st real Google Maps review text here...",
      date: "Recent Google Review",
      isGoogle: true
    },
    {
      id: 2,
      name: "Customer Name 2",
      role: "Nagpur Resident",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      comment: "Paste your 2nd real Google Maps review text here...",
      date: "Recent Google Review",
      isGoogle: true
    }
  ],

  // Accordion FAQ Items
  faqs: [
    {
      question: "Do your monthly plans include both Lunch and Dinner?",
      answer: "Yes! All monthly subscription plans include BOTH Lunch and Dinner delivered fresh to your doorstep every day (a total of 60 meals per month). Morning Lunch is delivered between 8:00 AM – 11:00 AM and Evening Dinner between 5:00 PM – 8:00 PM.",
      category: "Pricing & Plans"
    },
    {
      question: "What is included in a Half Tiffin vs Full Tiffin?",
      answer: "A Half Tiffin (₹60) consists of 3 Chapatis, Half Tiffin Rice, Flavorful Dal, and Fresh Sabji. A Full Tiffin (₹80) consists of 5 Chapatis, Full Tiffin Rice, Flavorful Dal, Fresh Sabji, Green Salad, and Pickle.",
      category: "Food Quality"
    },
    {
      question: "How do I subscribe or order a tiffin from Prashma Mess?",
      answer: "Ordering is easy! Click any 'Order on WhatsApp' button or call us at +91 8767598542. Share your address in Nagpur, meal preference (Half Tiffin or Full Tiffin), and start date.",
      category: "Subscription"
    },
    {
      question: "What are your delivery timings for Morning and Evening?",
      answer: "Morning delivery (Lunch) takes place between 8:00 AM – 11:00 AM. Evening delivery (Dinner) takes place between 5:00 PM – 8:00 PM.",
      category: "Delivery"
    },
    {
      question: "Which areas in Nagpur do you cover for delivery?",
      answer: "We deliver daily across Tukdoji Putla, Chota Tajbagh, Medical Square, Rameshwari, Bhagwan Nagar, Omkar Nagar, and Manewada.",
      category: "Delivery"
    },
    {
      question: "What are your monthly subscription rates?",
      answer: "Monthly Half Tiffin is ₹2,400 (30 Days - Lunch & Dinner included) and Monthly Full Tiffin is ₹3,200 (30 Days - Lunch & Dinner included) with zero extra delivery charges.",
      category: "Pricing"
    },
    {
      question: "Are Non-Veg options available for Monthly Subscriptions?",
      answer: "Yes! We offer both Pure Veg and Non-Veg options for our Monthly Half Tiffin (₹2,400) and Monthly Full Tiffin (₹3,200) subscription plans. You can specify your Non-Veg meal preferences when ordering via WhatsApp.",
      category: "Subscription"
    },
    {
      question: "Is your food prepared fresh without preservatives?",
      answer: "Yes! Every single meal is cooked fresh daily using quality ingredients and balanced spices in a hygienic kitchen with zero preservatives.",
      category: "Food Quality"
    }
  ]
};
