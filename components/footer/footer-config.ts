// TypeScript interfaces for footer configuration
export interface FooterHero {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButton: {
    label: string;
    route: string;
  };
  secondaryButton: {
    label: string;
    route: string;
  };
}

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterServiceItem {
  label: string;
  href: string;
}

export interface FooterContact {
  phone: string;
  email: string;
  location: string;
  whatsapp?: string;
}

export interface FooterConfig {
  hero: FooterHero;
  brand: {
    name: string;
    description: string;
  };
  navigation: FooterNavItem[];
  services: FooterServiceItem[];
  contact: FooterContact;
  copyright: string;
  legal: FooterNavItem[];
}

// Footer configuration data
export const footerConfig: FooterConfig = {
  hero: {
    title: "Your Wild Adventure Awaits",
    subtitle: "Join us for an unforgettable journey through Sri Lanka's most spectacular wildlife sanctuary",
    backgroundImage: "/images/wildlife/leopard1.jpg",
    primaryButton: {
      label: "Book Safari",
      route: "/book"
    },
    secondaryButton: {
      label: "Explore Safaris",
      route: "/services"
    }
  },
  brand: {
    name: "Yala Sri Lanka",
    description: "Experience the untamed beauty of Sri Lanka's most famous national park. We are dedicated to sustainable wildlife tourism and conservation excellence."
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ],
  services: [
    // Private All-Inclusive Safaris
    { label: "Standard Morning Safari", href: "/services/standard-morning-safari" },
    { label: "Standard Afternoon Safari", href: "/services/standard-afternoon-safari" },
    // Shared All-Inclusive Safaris
    { label: "Luxury Morning Safari", href: "/services/luxury-morning-safari" },
    { label: "Sunset Photography Safari", href: "/services/sunset-photography-safari" },
    // Private Jeep-Only Tours
    { label: "Photography Morning Safari", href: "/services/photography-morning-safari" },
    { label: "Elephant Watching Afternoon Safari", href: "/services/elephant-watching-afternoon-safari" },
    // Shared Jeep-Only Tours
    { label: "Birdwatching Morning Safari", href: "/services/birdwatching-morning-safari" },
    { label: "Romantic Couples Afternoon Safari", href: "/services/romantic-couples-afternoon-safari" },
  ],
  contact: {
    phone: "+94 77 123 4567",
    email: "info@yalasrilanka.com",
    location: "Tissamaharama, Yala, Sri Lanka",
    whatsapp: "+94771234567"
  },
  copyright: "© 2026 Yala Sri Lanka. All rights reserved.",
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Booking Terms", href: "/booking-terms" }
  ]
};
