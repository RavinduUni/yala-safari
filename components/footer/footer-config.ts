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
    { label: "Contact", href: "/contact" }
  ],
  services: [
    { label: "Private All-Inclusive Safaris", href: "/services?category=Private All-Inclusive" },
    { label: "Shared All-Inclusive Safaris", href: "/services?category=Shared All-Inclusive" },
    { label: "Private Jeep-Only Tours", href: "/services?category=Private Jeep-Only" },
    { label: "Shared Jeep-Only Tours", href: "/services?category=Shared Jeep-Only" },
    { label: "Morning Safari Expeditions", href: "/services#morning" },
    { label: "Afternoon Wildlife Tours", href: "/services#afternoon" },
    { label: "Full-Day Adventures", href: "/services#full-day" }
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
