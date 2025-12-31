export interface PricingTier {
  groupSize: string;
  pricePerPerson: number;
  childPrice: number; // Age 5-11
  infantPrice: number; // Under 5
}

export interface SafariPackage {
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  duration: string;
  startingPrice: number;
  image: string;
  heroImage: string;
  
  // Long-form content
  overview: string;
  
  // Tiered pricing
  pricingTiers: PricingTier[];
  
  // Highlights
  wildlifeHighlights: string[];
  experienceHighlights: string[];
  
  // Itinerary
  itinerary: {
    time: string;
    activity: string;
    description: string;
  }[];
  
  // Standards
  vehicleStandards: string[];
  trackerStandards: string[];
  
  // Tips
  photographyTips: string[];
  packingList: string[];
  
  // Responsible Tourism
  responsibleTourism: string[];
  
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const safariCategories = [
  "Private All-Inclusive Morning Safari",
  "Private All-Inclusive Afternoon Safari",
  "Private All-Inclusive 7-Hour Half-Day Safari",
  "Private All-Inclusive Full-Day Safari"
];

export const safariPackages: SafariPackage[] = [
  // ========================================
  // MORNING SAFARI - SUBCATEGORY 1
  // ========================================
  {
    slug: "standard-morning-safari",
    category: "Private All-Inclusive Morning Safari",
    title: "Standard Morning Safari Experience",
    shortDescription: "Experience the magic of Yala at dawn with our classic morning safari. Perfect for first-time visitors seeking authentic wildlife encounters.",
    duration: "4-5 Hours",
    startingPrice: 85,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
    
    overview: `Embark on an unforgettable journey through Yala National Park as the first rays of sunlight pierce through the jungle canopy. Our Standard Morning Safari is designed for wildlife enthusiasts who want to experience the park during its most active hours.

Starting before dawn, this safari takes you deep into the heart of Yala's diverse ecosystems. The early morning hours offer the best opportunities to spot leopards returning from their nocturnal hunts, elephants gathering at waterholes, and countless bird species beginning their daily routines.

Our experienced wildlife trackers and naturalist guides have been navigating these trails for decades. They possess an intimate knowledge of animal behavior patterns, seasonal movements, and the best vantage points for wildlife photography. Every safari is unique, shaped by the natural rhythms of the wilderness.

The morning safari covers the main zones of the park, including grasslands, scrub forests, and lagoon areas. You'll travel in a comfortable 4x4 safari jeep, specially modified for optimal wildlife viewing with pop-up roofs and cushioned seating.

This package includes park entrance fees, tracker and driver services, bottled water, and comprehensive insurance coverage. We provide a brief orientation before departure and maintain radio contact with other safari vehicles to maximize your chances of significant sightings.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 145, childPrice: 26, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 95, childPrice: 26, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 85, childPrice: 26, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 75, childPrice: 26, infantPrice: 0 },
      { groupSize: "5 Persons", pricePerPerson: 68, childPrice: 26, infantPrice: 0 },
      { groupSize: "6 Persons", pricePerPerson: 62, childPrice: 26, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Sri Lankan Leopard - Yala has one of the highest leopard densities in the world",
      "Asian Elephants - Large herds frequent the park's waterholes",
      "Sloth Bears - Often spotted during fruiting seasons",
      "Spotted Deer, Sambar Deer, and Wild Boar",
      "Crocodiles basking in lagoons and water bodies",
      "Over 215 bird species including endemic and migratory birds",
      "Wild Buffalo herds in grassland areas",
      "Jackals, Mongoose, and other small mammals"
    ],

    experienceHighlights: [
      "Sunrise viewing from scenic vantage points",
      "Expert wildlife tracking and behavior interpretation",
      "Access to prime leopard territories",
      "Photography opportunities in golden morning light",
      "Educational commentary on park ecology",
      "Small group experience for personalized attention",
      "Radio network coordination for rare sightings",
      "Comprehensive safety protocols and insurance"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Hotel Pickup",
        description: "Our safari jeep will collect you from your accommodation in Tissamaharama, Kirinda, or nearby areas. Early start ensures we enter the park as gates open."
      },
      {
        time: "5:30 AM",
        activity: "Park Entry & Briefing",
        description: "Complete entry formalities at the park entrance. Your guide provides a safety briefing and explains what to expect during the safari."
      },
      {
        time: "6:00 AM",
        activity: "First Wildlife Zone",
        description: "Enter the prime wildlife areas as the sun rises. This is peak time for leopard activity. Your tracker positions the vehicle strategically for optimal viewing."
      },
      {
        time: "7:30 AM",
        activity: "Lagoon & Waterhole Visit",
        description: "Visit key water sources where elephants, buffalo, and crocodiles congregate. Excellent opportunities for photography and birdwatching."
      },
      {
        time: "8:30 AM",
        activity: "Exploration & Tracking",
        description: "Continue through various habitats based on recent sightings and animal movements. Your tracker reads signs and follows fresh trails."
      },
      {
        time: "9:30 AM",
        activity: "Return Journey & Exit",
        description: "Begin the return journey, with continued wildlife viewing. Final photo opportunities before exiting the park."
      },
      {
        time: "10:00 AM",
        activity: "Drop-off at Hotel",
        description: "Return to your accommodation with memories and photographs of your Yala adventure. Time to freshen up before breakfast."
      }
    ],

    vehicleStandards: [
      "4x4 Safari Jeep with pop-up roof for 360° viewing",
      "Comfortable cushioned seating for up to 6 passengers",
      "First-aid kit and emergency communication equipment",
      "Dust covers and rain protection",
      "Binoculars available on request",
      "Vehicle regularly serviced and inspected",
      "Experienced driver with park knowledge"
    ],

    trackerStandards: [
      "Licensed wildlife trackers with 10+ years experience",
      "Expert knowledge of animal behavior and movements",
      "Trained in safety protocols and emergency response",
      "Connected to park radio network for sightings",
      "Fluent in English (guides also speak multiple languages)",
      "Commitment to ethical wildlife viewing practices",
      "Certified in first aid and wildlife management"
    ],

    photographyTips: [
      "Bring a DSLR or mirrorless camera with telephoto lens (200-400mm ideal)",
      "Higher ISO settings (800-1600) needed in early morning low light",
      "Fast shutter speed (1/500s+) to freeze animal movement",
      "Shoot in RAW format for better post-processing flexibility",
      "Bean bag or monopod helps stabilize camera in moving vehicle",
      "Pack extra memory cards and fully charged batteries",
      "Lens cloth essential for dust protection",
      "Avoid flash photography - disturbs wildlife and ruins ambient light"
    ],

    packingList: [
      "Lightweight, neutral-colored clothing (khaki, olive, beige)",
      "Long-sleeved shirt and long pants (sun and insect protection)",
      "Wide-brimmed hat and sunglasses",
      "Sunscreen (SPF 50+) and insect repellent",
      "Reusable water bottle (we provide refills)",
      "Binoculars for distant viewing",
      "Small backpack for personal items",
      "Camera equipment and accessories",
      "Light jacket (early morning can be cool)",
      "Closed-toe shoes or boots"
    ],

    responsibleTourism: [
      "Maintain silence during wildlife encounters",
      "Never feed or attempt to touch wild animals",
      "Stay inside the vehicle at all times",
      "No littering - carry all waste back",
      "Respect park boundaries and designated routes",
      "Follow guide instructions regarding safe distances",
      "Support local communities through our employment practices",
      "Portion of fees contributes to park conservation",
      "Use of eco-friendly practices (no single-use plastics)",
      "Educational approach promotes wildlife conservation awareness"
    ],

    faqs: [
      {
        question: "What are my chances of seeing a leopard?",
        answer: "Yala National Park has the highest leopard density globally. While we cannot guarantee sightings, the morning safari offers approximately 60-70% success rate during peak seasons. Our trackers use radio networks and tracking skills to maximize your chances."
      },
      {
        question: "Is this safari suitable for children?",
        answer: "Absolutely! Children aged 5 and above typically enjoy the experience. Younger children are welcome (infant pricing applies). The safari is educational and exciting for all ages. We recommend bringing snacks and entertainment for very young children during quieter periods."
      },
      {
        question: "What happens if it rains?",
        answer: "Safaris operate rain or shine unless dangerous conditions exist. Rain often increases wildlife activity! Our vehicles have rain covers. We provide ponchos if needed. Refunds only given if park authorities close the park."
      },
      {
        question: "Can we customize the route?",
        answer: "While we follow established park routes, your tracker can prioritize areas based on your interests (birds, elephants, leopards, etc.). Routes adapt based on recent sightings and animal movements. Safety regulations require staying on designated tracks."
      },
      {
        question: "What's included in the price?",
        answer: "Price includes: private safari jeep, experienced tracker and driver, park entrance fees, all government taxes, bottled water, comprehensive insurance, and pickup/drop-off from nearby hotels. Not included: meals, personal expenses, and gratuities."
      },
      {
        question: "How do I book this safari?",
        answer: "Fill out the booking form below with your preferred date and guest details. You can also contact us via WhatsApp for instant confirmation. A small deposit secures your booking. Full payment accepted on safari day."
      }
    ]
  },

  // ========================================
  // MORNING SAFARI - SUBCATEGORY 2
  // ========================================
  {
    slug: "luxury-morning-safari",
    category: "Private All-Inclusive Morning Safari",
    title: "Luxury Morning Safari with Champagne Breakfast",
    shortDescription: "Elevate your Yala experience with VIP treatment, premium vehicle, professional photography service, and gourmet champagne breakfast in the wilderness.",
    duration: "5-6 Hours",
    startingPrice: 195,
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1600&q=80",
    
    overview: `Experience Yala National Park like never before with our exclusive Luxury Morning Safari. This premium experience combines world-class wildlife viewing with five-star service, creating an unforgettable adventure for discerning travelers.

Your journey begins with a VIP pickup in our specially customized luxury safari vehicle, featuring premium leather seating, climate control options, and state-of-the-art viewing platforms. Unlike standard safaris, you'll enjoy generous personal space with a maximum of 4 guests per vehicle, ensuring optimal comfort and photography angles.

What sets this experience apart is our professional photography concierge service. A trained wildlife photographer accompanies your safari, helping you capture publication-quality images while teaching advanced photography techniques. Whether you're using a smartphone or professional camera, you'll leave with stunning shots worthy of National Geographic.

The highlight of this safari is our exclusive champagne breakfast setup in a scenic location within the park (where permitted by park authorities). After an exhilarating morning of wildlife encounters, relax at a carefully selected spot overlooking a waterhole or scenic vista. Our team sets up a elegant breakfast spread featuring gourmet items, fresh tropical fruits, artisan pastries, and chilled champagne or sparkling juice.

This package includes everything from the standard safari plus: luxury vehicle, photography guide, gourmet breakfast, upgraded refreshments, premium binoculars, wildlife field guide books, and a complimentary photo memory book delivered after your safari. Every detail is crafted to exceed expectations.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 395, childPrice: 150, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 245, childPrice: 150, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 195, childPrice: 150, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 175, childPrice: 150, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Priority access to prime leopard territories with expert tracking",
      "Extended time at sighting locations for better photography",
      "Access to exclusive viewing points (where available)",
      "Focus on rare species and unique behaviors",
      "Comprehensive wildlife portfolio documentation",
      "Expert interpretation of animal behavior patterns",
      "Coordination with park network for extraordinary sightings",
      "Seasonal specialties (nesting, mating, migration patterns)"
    ],

    experienceHighlights: [
      "Maximum 4 guests per vehicle for intimate experience",
      "Professional photography guide and technical support",
      "Luxury safari vehicle with climate control options",
      "Gourmet champagne breakfast in scenic wilderness location",
      "Premium Zeiss or Swarovski binoculars provided",
      "Comprehensive wildlife field guides and reference materials",
      "Complimentary photo memory book (delivered post-safari)",
      "Refreshing towels and premium refreshments throughout",
      "Personalized service and attention to detail",
      "Flexible timing to accommodate special requests"
    ],

    itinerary: [
      {
        time: "4:45 AM",
        activity: "VIP Hotel Pickup",
        description: "Luxury vehicle pickup from your hotel with welcome refreshments. Your photography guide introduces themselves and discusses your interests and equipment."
      },
      {
        time: "5:15 AM",
        activity: "Park Entry & Strategy Session",
        description: "Fast-track entry process. Your team reviews recent sightings and creates a customized route based on your photography goals and wildlife interests."
      },
      {
        time: "5:45 AM",
        activity: "Golden Hour Wildlife Tracking",
        description: "Enter prime territories during magical morning light. Focus on leopards, elephants, and other priority species. Photography guide assists with camera settings and composition."
      },
      {
        time: "7:30 AM",
        activity: "Exclusive Champagne Breakfast",
        description: "Arrive at pre-arranged scenic breakfast location. Enjoy gourmet spread with champagne while overlooking waterholes or landscape. Perfect for relaxation and wildlife observation."
      },
      {
        time: "8:45 AM",
        activity: "Continued Wildlife Exploration",
        description: "Resume safari with focus on remaining wish-list species. Visit diverse habitats including lagoons, grasslands, and forest edges."
      },
      {
        time: "10:00 AM",
        activity: "Photography Review & Sharing",
        description: "Brief session where photography guide reviews your best shots and provides post-processing tips. Share highlights and stories from the morning."
      },
      {
        time: "10:30 AM",
        activity: "VIP Return Transfer",
        description: "Comfortable return to your hotel with refreshing towels and cold beverages. Discuss photo book customization preferences."
      }
    ],

    vehicleStandards: [
      "Luxury 4x4 with premium leather seating and extra legroom",
      "Climate control options and dust filtration system",
      "Advanced suspension for smooth ride on rough terrain",
      "Multiple viewing platforms with cushioned armrests",
      "Built-in charging ports for camera equipment",
      "Premium sound system for nature documentaries (optional)",
      "Refrigerated storage for refreshments",
      "Superior cleanliness and presentation standards",
      "Maximum 4 guests for spacious comfort"
    ],

    trackerStandards: [
      "Elite-level trackers with 15+ years experience",
      "Specialized training in photography support",
      "Advanced knowledge of rare species and behaviors",
      "Network connections for exclusive sighting information",
      "Multilingual capabilities (English, German, French available)",
      "Certified wildlife photography workshop leaders",
      "Expertise in leopard behavior and tracking",
      "Professional hospitality training"
    ],

    photographyTips: [
      "Photography guide provides personalized one-on-one instruction",
      "Learn composition techniques for wildlife photography",
      "Master use of natural light during golden hour",
      "Practice panning techniques for moving animals",
      "Understanding behavior helps anticipate photo moments",
      "Guide assists with lens selection for different scenarios",
      "Tips for editing workflow and post-processing",
      "Support for all skill levels from beginner to advanced"
    ],

    packingList: [
      "Camera equipment (guide helps optimize your gear setup)",
      "Multiple lenses including telephoto for flexibility",
      "Spare batteries and memory cards (provided if forgotten)",
      "Smartphone for quick shots (guide helps maximize results)",
      "Lightweight layers - temperature varies throughout morning",
      "Elegant casual attire for breakfast service",
      "Quality sunglasses and sun protection",
      "Small personal items bag",
      "Binoculars (premium ones provided)",
      "Any special dietary requirements (inform in advance)"
    ],

    responsibleTourism: [
      "Luxury experience with minimal environmental impact",
      "All breakfast items sourced from sustainable suppliers",
      "Zero single-use plastics policy",
      "Premium pricing supports enhanced park conservation funding",
      "Employment of local expert guides and trackers",
      "Educational focus on conservation challenges",
      "Strict adherence to ethical wildlife viewing distances",
      "Support for community development projects",
      "Champagne breakfast waste completely removed and properly disposed",
      "Carbon offset program for vehicle emissions"
    ],

    faqs: [
      {
        question: "What makes this safari worth the premium price?",
        answer: "Beyond standard wildlife viewing, you receive: professional photography guidance, luxury vehicle with maximum 4 guests, gourmet champagne breakfast, premium equipment (binoculars, field guides), personalized service, and a complimentary photo memory book. It's a complete VIP experience combining adventure with five-star hospitality."
      },
      {
        question: "Do I need an expensive camera to benefit from the photography guide?",
        answer: "Absolutely not! Our photography guides are trained to help guests with any camera, including smartphones. They teach composition, lighting, and timing that apply to all photography. Many guests create stunning images with just their phones."
      },
      {
        question: "Where is the champagne breakfast served?",
        answer: "We identify scenic spots approved by park authorities - typically overlooking waterholes, lagoons, or vista points. Location depends on wildlife activity and regulations. If weather or conditions don't permit, we offer the breakfast at a comfortable lodge location immediately after the safari."
      },
      {
        question: "Can this safari accommodate special dietary requirements?",
        answer: "Yes! Please inform us of any dietary restrictions, allergies, or preferences when booking. Our gourmet breakfast can be customized for vegetarian, vegan, gluten-free, or any other requirements. We source high-quality ingredients to meet your needs."
      },
      {
        question: "Is the photo memory book really included?",
        answer: "Yes! Within 2 weeks of your safari, we deliver a professionally designed photo book featuring the best images from your adventure (mix of your photos and those taken by our guide). This keepsake is complimentary with luxury safari bookings. Digital versions sent via email."
      },
      {
        question: "Can we book this for a special occasion?",
        answer: "Absolutely! This safari is perfect for honeymoons, anniversaries, birthdays, or celebrations. Inform us when booking and we'll add special touches like decorations, cake, or personalized elements to make your experience even more memorable."
      }
    ]
  },

  // ========================================
  // MORNING SAFARI - SUBCATEGORY 3
  // ========================================
  {
    slug: "photography-morning-safari",
    category: "Private All-Inclusive Morning Safari",
    title: "Photography-Focused Morning Safari",
    shortDescription: "Specialized safari designed for serious photographers with optimal positioning, extended stops, and expert guidance on wildlife photography techniques.",
    duration: "5-6 Hours",
    startingPrice: 125,
    image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=1600&q=80",
    
    overview: `Designed specifically for photography enthusiasts, this specialized morning safari prioritizes capturing exceptional wildlife images over simply accumulating sightings. Whether you're a seasoned pro or an ambitious amateur, this experience gives you the time, positioning, and expert support needed to create portfolio-quality photographs.

Unlike general tourist safaris that rush from one sighting to another, our Photography-Focused Safari allows extended time at each location. When we encounter compelling subjects - whether a leopard in perfect light or an elephant herd's social interaction - we stay positioned for as long as productive, giving you opportunities to capture behavior sequences and experiment with different compositions.

Your tracker is specially trained in photographic support, understanding the technical requirements of wildlife photography. They position the vehicle to optimize light direction, background quality, and shooting angles. They also read animal behavior to anticipate moments before they happen - the split second before a leopard yawns, the instant an elephant raises its trunk, the brief moment when birds take flight.

This safari operates with a maximum of 4 photographers per vehicle, ensuring everyone has prime shooting positions. We modify timing to prioritize the golden hours - those magical periods shortly after sunrise when warm, directional light creates dramatic images. Strategic route planning focuses on locations known for photographic opportunities rather than just wildlife density.

The package includes detailed pre-safari consultation about your equipment and goals, in-field coaching on technique, and post-safari image review session. You'll also receive a comprehensive digital guide to Yala's wildlife with tips specific to photographing each species found in the park.`,

    pricingTiers: [
      { groupSize: "1 Photographer", pricePerPerson: 265, childPrice: 50, infantPrice: 0 },
      { groupSize: "2 Photographers", pricePerPerson: 165, childPrice: 50, infantPrice: 0 },
      { groupSize: "3 Photographers", pricePerPerson: 125, childPrice: 50, infantPrice: 0 },
      { groupSize: "4 Photographers", pricePerPerson: 115, childPrice: 50, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards in varied poses and lighting conditions",
      "Elephant behavior sequences and family dynamics",
      "Bird photography opportunities (over 215 species)",
      "Predator-prey interactions when encountered",
      "Detailed close-ups of smaller species",
      "Landscape shots incorporating wildlife",
      "Abstract and artistic interpretations of nature",
      "Seasonal specialties (mating displays, nesting, etc.)"
    ],

    experienceHighlights: [
      "Maximum 4 photographers ensures optimal shooting positions",
      "Extended stops at quality subjects (not rushed sightings)",
      "Tracker trained in photographic vehicle positioning",
      "Strategic timing for golden hour light",
      "Behavior prediction for anticipatory shooting",
      "Technical advice on camera settings and technique",
      "Focus on photographic quality over quantity of sightings",
      "Pre-safari equipment consultation",
      "Post-safari image review and critique session",
      "Digital wildlife photography guide included",
      "Flexibility to pursue photographic opportunities"
    ],

    itinerary: [
      {
        time: "4:30 AM",
        activity: "Pre-Dawn Equipment Check",
        description: "Meet at designated location for final equipment check and sunrise timing discussion. Review camera settings for low-light conditions. Distribute reference cards for common species."
      },
      {
        time: "5:00 AM",
        activity: "Park Entry During Blue Hour",
        description: "Enter park during twilight for atmospheric landscape shots. Long exposure opportunities as darkness transitions to dawn. Focus on silhouettes and mood."
      },
      {
        time: "5:45 AM",
        activity: "Golden Hour Wildlife Search",
        description: "Intensive tracking during premium light. Prioritize leopards and elephants in warm, directional sunlight. Vehicle positioning optimized for side-lighting and backlighting effects."
      },
      {
        time: "7:00 AM",
        activity: "Extended Photography Session",
        description: "When significant subjects located, remain positioned for extended period. Capture behavior sequences, multiple compositions, and various exposures. Experiment with techniques."
      },
      {
        time: "8:30 AM",
        activity: "Bird & Detail Photography",
        description: "As harsh light increases, shift focus to shaded areas and smaller subjects. Macro opportunities for insects, textures, and botanical subjects. Practice different techniques."
      },
      {
        time: "9:30 AM",
        activity: "Landscape & Environmental Portraits",
        description: "Use stronger light for landscape photography showing habitat context. Environmental portraits placing wildlife in their ecosystem."
      },
      {
        time: "10:15 AM",
        activity: "Return & Image Review Session",
        description: "Brief in-vehicle review of key images. Discussion of successes and learning opportunities. Tips for post-processing and editing workflow."
      }
    ],

    vehicleStandards: [
      "Modified 4x4 with reinforced shooting positions",
      "Bean bags and support cushions at each position",
      "Roll bar padding for lens rest and stability",
      "Maximum 4 photographers for space and flexibility",
      "Driver trained in slow, smooth movements for stability",
      "Strategic positioning for light and background control",
      "Additional roof openings for vertical shots when needed",
      "Equipment storage compartments for quick lens changes",
      "Dust protection covers for gear"
    ],

    trackerStandards: [
      "Specialized training in wildlife photography support",
      "Understanding of technical requirements (light, angles, backgrounds)",
      "Expertise in predicting animal behavior for anticipatory shooting",
      "Knowledge of photogenic locations within the park",
      "Patience to wait for perfect moments rather than rushing",
      "Communication skills to coordinate positioning with driver",
      "Understanding of different photography styles and goals",
      "Ability to read light conditions and suggest optimal approaches"
    ],

    photographyTips: [
      "Arrive with fully charged batteries (bring at least 3 spares)",
      "Clear memory cards before safari (recommend 64GB minimum)",
      "Telephoto zoom (100-400mm or 150-600mm) most versatile",
      "Shoot in RAW format for maximum editing flexibility",
      "Use continuous autofocus (AF-C) for moving subjects",
      "Shutter speed minimum 1/500s for stationary, 1/1000s+ for movement",
      "Aperture priority mode (Av) gives good control with flexibility",
      "ISO 400-1600 in early morning, reduce as light increases",
      "Focus on eyes - always ensure sharp focus on animal eyes",
      "Burst mode helpful for action sequences",
      "Don't neglect backgrounds - they make or break images",
      "Underexpose slightly for better highlight retention",
      "Practice with your gear before the safari",
      "Bring lens cloth - dust is constant challenge"
    ],

    packingList: [
      "Camera body (bring backup if you have one)",
      "Telephoto lens 200-600mm range",
      "Spare batteries (minimum 3, fully charged)",
      "Multiple memory cards (64GB+ recommended)",
      "Lens cleaning kit and blower",
      "Bean bag or small tripod for vehicle stability",
      "Rain cover for camera equipment",
      "Lens hoods to control flare",
      "Polarizing filter (optional but useful)",
      "Remote shutter release (optional)",
      "Notebook for recording settings and locations",
      "Comfortable clothing in neutral colors",
      "Sun protection and water bottle",
      "Small backpack for gear organization"
    ],

    responsibleTourism: [
      "Extended stops done at safe, regulation-compliant distances",
      "Never pressure animals for photographic opportunities",
      "No baiting, luring, or manipulating wildlife behavior",
      "Respect other safari vehicles and visitors",
      "Stay on designated tracks - no off-road for better angles",
      "Silent operation during close encounters",
      "Education on ethical wildlife photography practices",
      "Support park conservation through premium fees",
      "Encourage authentic over manipulated images",
      "Promote conservation awareness through powerful imagery"
    ],

    faqs: [
      {
        question: "What camera equipment do I need?",
        answer: "Minimum recommendation: DSLR or mirrorless camera with telephoto lens (200mm+). Ideal setup includes 100-400mm or 150-600mm zoom lens. However, we welcome all skill levels and equipment - even high-quality phone cameras can produce great results with proper technique and guidance."
      },
      {
        question: "How does this differ from a standard safari?",
        answer: "Standard safaris prioritize quantity of sightings and rapid movement between animals. Photography-focused safari emphasizes quality over quantity - we stay longer at good subjects, position carefully for optimal light and angles, and operate at a pace that allows for considered composition and multiple attempts."
      },
      {
        question: "Can beginners join this safari?",
        answer: "Absolutely! While designed for serious photographers, we welcome enthusiastic beginners who want to learn. The tracker provides technical guidance appropriate to your skill level. The key requirement is genuine interest in improving your wildlife photography."
      },
      {
        question: "What if we find a great subject but poor light?",
        answer: "We balance photographic quality with efficient use of time. For exceptional subjects (like leopards), we may wait for light improvement. For common subjects, we usually continue and return if timing permits. Your tracker uses experience to make these judgment calls."
      },
      {
        question: "Do you guarantee certain shots or species?",
        answer: "Wildlife photography involves patience and luck. While we maximize opportunities through expertise and positioning, we cannot guarantee specific animals or shots. Yala offers excellent probabilities, especially for leopards and elephants, but nature operates on its own schedule."
      },
      {
        question: "Can I get help with post-processing?",
        answer: "The post-safari review session includes basic post-processing guidance and workflow tips. We provide recommendations for software and techniques. For more comprehensive training, we can arrange additional consultations at extra cost."
      }
    ]
  },

  // ========================================
  // MORNING SAFARI - SUBCATEGORY 4
  // ========================================
  {
    slug: "birdwatching-morning-safari",
    category: "Private All-Inclusive Morning Safari",
    title: "Specialized Birdwatching Morning Safari",
    shortDescription: "Expert-guided birding safari focusing on Yala's 215+ bird species, including endemic Sri Lankan species and seasonal migrants. Perfect for ornithology enthusiasts.",
    duration: "5-6 Hours",
    startingPrice: 110,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1600&q=80",
    
    overview: `For birding enthusiasts, Yala National Park is nothing short of paradise. This specialized Birdwatching Morning Safari is designed to maximize your opportunities to observe, photograph, and identify the incredible diversity of avian life that calls this park home - or visits during migration seasons.

Yala hosts over 215 bird species, including several Sri Lankan endemics found nowhere else on Earth. The park's varied habitats - from coastal lagoons to scrub forests, grasslands to wetlands - create ecological niches that support an exceptional variety of birdlife. Our specialized morning safari explores all these habitats strategically based on seasonal patterns and daily bird activity rhythms.

Your guide is a trained ornithologist or experienced birder with intimate knowledge of Yala's birdlife. They can identify species by sight, call, behavior, and habitat preference. They understand seasonal variations, migratory patterns, nesting behaviors, and the best locations for specific species. This expertise dramatically increases your likelihood of adding rare or sought-after birds to your life list.

The morning hours are prime time for bird activity - the dawn chorus, feeding behaviors, and increased visibility before midday heat. We move at a pace conducive to birding, taking time to listen for calls, scan tree canopies, and observe behavior. The safari vehicle is equipped with quality optics, comprehensive field guides, and recording equipment to document calls.

Beyond just identification, this safari educates about bird ecology, behavior, conservation challenges, and the critical role birds play in ecosystem health. Whether you're a serious birder seeking endemic species or a nature lover appreciating avian beauty, this experience caters to your interests and expertise level.`,

    pricingTiers: [
      { groupSize: "1 Birder", pricePerPerson: 235, childPrice: 45, infantPrice: 0 },
      { groupSize: "2 Birders", pricePerPerson: 150, childPrice: 45, infantPrice: 0 },
      { groupSize: "3 Birders", pricePerPerson: 110, childPrice: 45, infantPrice: 0 },
      { groupSize: "4 Birders", pricePerPerson: 95, childPrice: 45, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Sri Lankan Junglefowl (National Bird & Endemic)",
      "Ceylon Frogmouth (Endemic, nocturnal but sometimes visible)",
      "Malabar Pied Hornbill and Grey Hornbill",
      "Painted Stork and Asian Openbill colonies",
      "Various Kingfisher species (7 species recorded)",
      "Eagles including Crested Serpent Eagle and White-bellied Sea Eagle",
      "Endemic Sri Lankan Wood Pigeon and Green-billed Coucal",
      "Migratory waders and waterfowl (seasonal)",
      "Black-necked Stork (rare and endangered)",
      "Spot-billed Pelican and Lesser Adjutant",
      "Numerous bee-eaters, barbets, and minivets"
    ],

    experienceHighlights: [
      "Expert ornithologist guide with species-specific knowledge",
      "Focus on Sri Lankan endemic and rare species",
      "Comprehensive habitat coverage (wetlands, forests, scrub, coast)",
      "Quality optics provided (Zeiss or Swarovski binoculars)",
      "Field guides and bird checklists included",
      "Audio recording capabilities for call documentation",
      "Flexible pacing for observation and photography",
      "Small group (max 4) ensures personal attention",
      "Seasonal migration specialization when applicable",
      "Life list documentation and certification",
      "Educational interpretation of behavior and ecology"
    ],

    itinerary: [
      {
        time: "4:45 AM",
        activity: "Pre-Dawn Pickup & Briefing",
        description: "Early collection to enter park at optimal time. Your ornithology guide discusses target species, recent sightings, and seasonal considerations. Distribution of field guides and optics."
      },
      {
        time: "5:15 AM",
        activity: "Dawn Chorus at Park Entrance",
        description: "Begin birding at park periphery during dawn chorus - peak vocal activity. Focus on identifying species by call. Excellent time for owls returning to roosts and nightjars."
      },
      {
        time: "6:00 AM",
        activity: "Wetland & Lagoon Birding",
        description: "Visit key wetland areas for waterfowl, waders, and water-dependent species. Search for kingfishers, storks, ibises, and coastal birds. Photography opportunities in morning light."
      },
      {
        time: "7:30 AM",
        activity: "Scrub Forest Endemic Search",
        description: "Move to forest edges and scrub habitats where endemic species concentrate. Focus on Sri Lankan Junglefowl, Ceylon Frogmouth areas, and endemic wood pigeons. Listen for specific calls."
      },
      {
        time: "8:30 AM",
        activity: "Canopy & Raptor Observation",
        description: "Scan forest canopy and open areas for raptors. Look for eagles, hawks, and vultures beginning soaring behavior as thermals develop. Also check canopy for barbets and minivets."
      },
      {
        time: "9:30 AM",
        activity: "Final Habitat Check",
        description: "Visit any remaining target habitats or return to productive locations. Final opportunities for missed species on target list."
      },
      {
        time: "10:30 AM",
        activity: "Life List Review & Return",
        description: "Review species observed during return journey. Guide confirms identifications and provides life list documentation. Discuss conservation status and ecological roles of observed species."
      }
    ],

    vehicleStandards: [
      "Open-top safari vehicle for unobstructed sky viewing",
      "Comfortable seating with 360-degree visibility",
      "Quiet operation for approaching skittish species",
      "Multiple viewing positions for different angles",
      "Storage for optical equipment and field guides",
      "Binoculars secured at each position",
      "Dust protection for cameras and optics",
      "Strategic positioning for optimal light angles"
    ],

    trackerStandards: [
      "Certified ornithology guide or experienced birding expert",
      "Comprehensive knowledge of Yala's 215+ bird species",
      "Ability to identify species by call, flight pattern, and behavior",
      "Understanding of seasonal variations and migration patterns",
      "Knowledge of nesting sites and breeding behaviors",
      "Experience with rare and difficult-to-spot species",
      "Educational communication skills for all expertise levels",
      "Network connections for rare bird sightings",
      "Conservation knowledge and ethical birding practices"
    ],

    photographyTips: [
      "Longer telephoto lenses ideal (400-600mm) for small, distant subjects",
      "Fast autofocus system crucial for quick bird movements",
      "High shutter speeds (1/1000s minimum, faster for flight shots)",
      "Continuous shooting mode for action sequences",
      "Higher ISO may be needed in forest shade (1600-3200)",
      "Focus on eye sharpness - critical for bird photography",
      "Anticipate behavior - watch for feeding or preening signs",
      "Perched birds easier than flight shots - start with stationary subjects",
      "Background isolation using wider apertures (f/4-f/5.6)",
      "Patience essential - wait for good poses and light",
      "Learn common postures and behaviors for better anticipation",
      "Digiscoping through provided binoculars possible with adapters"
    ],

    packingList: [
      "Binoculars (quality ones provided, but bring your own if preferred)",
      "Camera with telephoto lens for photography",
      "Field guide to Sri Lankan birds (provided, but personal copy useful)",
      "Notebook and pencil for life list and observations",
      "Comfortable neutral-colored clothing (avoid bright colors)",
      "Hat and sun protection",
      "Insect repellent (early morning mosquitoes)",
      "Water bottle (provided, but bring refillable)",
      "Small daypack for personal items",
      "Smartphone for bird call apps and recording",
      "Spare batteries for camera and devices",
      "Light jacket (early morning cool)",
      "Checklist of target species (can be pre-arranged)"
    ],

    responsibleTourism: [
      "Ethical birding practices - no playback of calls to lure birds",
      "Maintain respectful distances, especially near nests",
      "No disturbance to nesting or breeding behaviors",
      "Quiet observation to avoid alarming flocks",
      "Stay on designated paths - no habitat trampling",
      "Support conservation through education and awareness",
      "Contribute to citizen science bird counts when applicable",
      "Respect other birders and safari visitors",
      "Report rare sightings to conservation organizations",
      "Promote bird conservation and habitat protection"
    ],

    faqs: [
      {
        question: "Do I need to be an experienced birder?",
        answer: "Not at all! This safari welcomes all levels from complete beginners to serious ornithologists. Your guide adapts their approach to your experience level. Beginners receive identification help and basic birding instruction, while experienced birders get technical ecological discussions and focus on rare species."
      },
      {
        question: "What endemic species might we see?",
        answer: "Yala offers good chances for several Sri Lankan endemics including Sri Lankan Junglefowl (national bird), Ceylon Frogmouth, Sri Lankan Wood Pigeon, Brown-capped Babbler, and Green-billed Coucal. Endemic sightings depend on season, luck, and habitat access, but we target all possible species systematically."
      },
      {
        question: "Best season for birdwatching in Yala?",
        answer: "Yala offers excellent birding year-round, but considerations include: November-March brings migratory species from Europe and Asia. February-June is breeding season with interesting behaviors. Dry season (May-September) concentrates birds at water sources. Each season has unique advantages."
      },
      {
        question: "Can we focus on photography or is it just observation?",
        answer: "Both! If your group is photography-focused, we adapt the pace and positioning accordingly. Photographers might spend longer at productive locations. If your priority is species count and observation, we cover more ground. Discuss preferences with your guide."
      },
      {
        question: "How many species can we expect to see?",
        answer: "Depends on season, luck, and your birding skill. A typical morning safari yields 40-60 species for attentive observers. Experienced birders in optimal conditions might record 70+ species. Quality of sightings often matters more than quantity - a good endemic view beats rapidly checking off common species."
      },
      {
        question: "Are field guides and optics really provided?",
        answer: "Yes! We provide quality binoculars (Zeiss or Swarovski), comprehensive field guide to Sri Lankan birds, and species checklist. You're welcome to bring personal optics if you prefer. Having quality equipment ensures everyone, regardless of experience, can properly observe and enjoy the birds."
      }
    ]
  },

  // ========================================
  // AFTERNOON SAFARI - SUBCATEGORY 1
  // ========================================
  {
    slug: "standard-afternoon-safari",
    category: "Private All-Inclusive Afternoon Safari",
    title: "Standard Afternoon Safari Experience",
    shortDescription: "Experience Yala's golden hour magic as wildlife emerges from the midday heat. Perfect for sunset photography and observing active predators.",
    duration: "3.5-4 Hours",
    startingPrice: 80,
    image: "https://images.unsplash.com/photo-1535338454770-6f7e8f8b0b1f?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1535338454770-6f7e8f8b0b1f?w=1600&q=80",
    
    overview: `The afternoon safari offers a completely different perspective on Yala National Park compared to morning expeditions. As the intense midday heat begins to subside around 2:30 PM, wildlife emerges from shade and rest to resume their daily activities, creating prime viewing opportunities during the magical golden hour.

This Standard Afternoon Safari is specially timed to capture the transformation of the park as temperatures cool and light becomes spectacular. Leopards, having rested through the hottest hours, begin moving along their territorial routes. Elephants congregate at waterholes for late afternoon bathing rituals. Deer herds become more active in the grasslands, attracting predators and creating dramatic interactions.

Afternoon safaris offer unique advantages that morning trips cannot match. The warm, golden light of late afternoon creates stunning photographic opportunities, painting the landscape in rich amber tones. Animal behavior shifts - elephants engage in social play, birds perform territorial displays, and predators position themselves for evening hunts. The cooler air brings increased activity levels across all species.

Your experienced tracker understands these afternoon rhythms and positions the vehicle strategically at key locations. They know which waterholes will attract the most activity, which leopard territories to check based on morning sightings, and where to position for breathtaking sunset silhouettes against Yala's dramatic landscapes.

The safari includes all park entrance fees, expert tracker and driver services, comprehensive insurance, and bottled water. We maintain radio contact with other safari vehicles to share significant sightings, ensuring you don't miss rare opportunities. The journey typically ends just before sunset, allowing you to witness the spectacular transition from day to night in the wilderness.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 140, childPrice: 26, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 90, childPrice: 26, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 80, childPrice: 26, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 72, childPrice: 26, infantPrice: 0 },
      { groupSize: "5 Persons", pricePerPerson: 65, childPrice: 26, infantPrice: 0 },
      { groupSize: "6 Persons", pricePerPerson: 60, childPrice: 26, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards emerging from daytime rest periods",
      "Elephant herds gathering at waterholes for bathing",
      "Sloth bears foraging for termites in late afternoon",
      "Deer species more active as temperatures cool",
      "Crocodiles basking in late afternoon sun",
      "Birds performing territorial displays and feeding",
      "Water buffalo herds moving to grazing areas",
      "Golden jackals beginning evening hunting routines"
    ],

    experienceHighlights: [
      "Golden hour photography with stunning warm light",
      "Sunset viewing from scenic vantage points",
      "Increased wildlife activity as day cools",
      "Elephant social behaviors and bathing rituals",
      "Strategic positioning for evening predator activity",
      "Breathtaking landscape photography opportunities",
      "Radio network coordination for recent sightings",
      "Cooler temperatures for comfortable viewing"
    ],

    itinerary: [
      {
        time: "2:00 PM",
        activity: "Hotel Pickup",
        description: "Collection from your accommodation in Tissamaharama or nearby areas. Brief introduction to your tracker and discussion of afternoon safari strategy."
      },
      {
        time: "2:30 PM",
        activity: "Park Entry",
        description: "Complete entry procedures at the park gate. Safety briefing and overview of what to expect during afternoon wildlife viewing."
      },
      {
        time: "3:00 PM",
        activity: "Initial Wildlife Zone",
        description: "Enter prime territories as animals begin emerging from midday rest. Focus on shaded areas and water sources where wildlife concentrates."
      },
      {
        time: "4:00 PM",
        activity: "Waterhole Congregation",
        description: "Visit key water sources during peak activity time. Elephants arrive for bathing, various species come to drink, creating concentrated viewing opportunities."
      },
      {
        time: "5:00 PM",
        activity: "Golden Hour Exploration",
        description: "Strategic positioning for optimal light and wildlife activity. Leopards become more active, predators begin positioning for evening hunts."
      },
      {
        time: "5:45 PM",
        activity: "Sunset Viewing",
        description: "Position at scenic location for spectacular sunset views. Final wildlife observations as the park transitions from day to evening."
      },
      {
        time: "6:15 PM",
        activity: "Return & Drop-off",
        description: "Exit the park and return to your hotel with memories of golden hour wildlife encounters and stunning sunset photographs."
      }
    ],

    vehicleStandards: [
      "4x4 Safari Jeep with pop-up roof for panoramic viewing",
      "Comfortable cushioned seating for up to 6 passengers",
      "First-aid kit and safety equipment",
      "Dust covers and sun protection",
      "Binoculars available on request",
      "Regular maintenance and safety inspections",
      "Experienced driver with park knowledge"
    ],

    trackerStandards: [
      "Licensed wildlife trackers with 10+ years experience",
      "Expert knowledge of afternoon animal behavior patterns",
      "Trained in safety protocols and emergency response",
      "Connected to park radio network for sightings",
      "Fluent in English with multilingual options",
      "Commitment to ethical wildlife viewing",
      "First aid certified"
    ],

    photographyTips: [
      "Golden hour provides stunning warm light - ideal time for photography",
      "Lower sun angle creates dramatic shadows and modeling",
      "Silhouette opportunities during sunset (expose for sky)",
      "ISO 400-800 sufficient due to strong afternoon light",
      "Shutter speed 1/500s+ still needed for animal movement",
      "Backlit subjects can create beautiful rim lighting",
      "Bring graduated ND filter for balanced sky/ground exposure",
      "White balance on cloudy setting enhances warm golden tones"
    ],

    packingList: [
      "Lightweight, neutral-colored clothing",
      "Long sleeves for sun protection (still hot early afternoon)",
      "Wide-brimmed hat and quality sunglasses",
      "Sunscreen (SPF 50+) and insect repellent",
      "Reusable water bottle",
      "Camera equipment with extra batteries",
      "Binoculars for distant viewing",
      "Light jacket for cooler late afternoon",
      "Closed-toe shoes",
      "Small backpack for personal items"
    ],

    responsibleTourism: [
      "Maintain silence during wildlife encounters",
      "Never feed or attempt to touch animals",
      "Stay inside vehicle at all times",
      "No littering - carry all waste back",
      "Respect park boundaries and routes",
      "Follow safe distance guidelines",
      "Support local employment through our practices",
      "Portion of fees supports park conservation",
      "Eco-friendly practices (no single-use plastics)",
      "Educational approach promotes conservation"
    ],

    faqs: [
      {
        question: "Is afternoon safari as good as morning for leopard sightings?",
        answer: "Afternoon safaris offer excellent leopard viewing opportunities! Leopards rest during midday heat and become active again from 4 PM onwards. They patrol territories, hunt, and are often seen on rocks surveying their domain during golden hour. Success rates are comparable to morning safaris."
      },
      {
        question: "What are the advantages of afternoon over morning safari?",
        answer: "Afternoon safaris offer: stunning golden hour light for photography, spectacular sunsets, cooler viewing temperatures, elephant bathing behaviors, different wildlife activity patterns, and generally fewer vehicles than peak morning hours. The experience is equally rewarding but distinctly different."
      },
      {
        question: "Will we see sunset from inside the park?",
        answer: "Yes! Afternoon safaris are timed specifically to include sunset viewing from scenic locations within the park. Your tracker positions the vehicle at viewpoints overlooking waterholes or landscapes for spectacular sunset photography opportunities."
      },
      {
        question: "Is it too hot in early afternoon?",
        answer: "We enter the park around 2:30-3 PM when heat is already subsiding. Safari vehicles have open tops for airflow, and we provide water. By 4 PM, temperatures are quite comfortable. Many guests prefer afternoon because it's cooler than midday but still offers great visibility."
      },
      {
        question: "Can children enjoy afternoon safari?",
        answer: "Absolutely! Afternoon safaris work well for children as they can rest during hot morning hours. The 3.5-4 hour duration is manageable for kids, and the golden hour light and sunset create magical memories. Child pricing applies for ages 5-11."
      },
      {
        question: "What's included in the price?",
        answer: "Price includes: private safari jeep, experienced tracker and driver, all park entrance fees, government taxes, comprehensive insurance, bottled water, and hotel pickup/drop-off. Not included: meals, gratuities, and personal expenses."
      }
    ]
  },

  // ========================================
  // AFTERNOON SAFARI - SUBCATEGORY 2
  // ========================================
  {
    slug: "sunset-photography-safari",
    category: "Private All-Inclusive Afternoon Safari",
    title: "Sunset Photography Specialist Safari",
    shortDescription: "Premium afternoon safari designed for photographers seeking perfect golden hour light, silhouettes, and dramatic sunset compositions with wildlife.",
    duration: "4-5 Hours",
    startingPrice: 120,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80",
    
    overview: `For photographers who understand that light is everything, the Sunset Photography Specialist Safari represents the pinnacle of afternoon wildlife photography experiences. This specialized safari is meticulously planned around the golden hour - that magical period when warm, directional light transforms ordinary scenes into extraordinary photographs.

Unlike general safaris that chase animal sightings, this photography-focused experience prioritizes light quality and composition opportunities. We enter the park in mid-afternoon, but the real focus begins around 4:30 PM when the sun angle becomes optimal for wildlife photography. Every decision - route selection, vehicle positioning, timing at locations - is made with photographic excellence in mind.

Your tracker is specially trained in photography support and understands the technical requirements of capturing award-winning images. They position the vehicle to optimize light direction, ensuring subjects are side-lit or back-lit for dramatic effect. They read animal behavior to predict photogenic moments and know which locations offer the best backgrounds for clean compositions.

The safari operates with a maximum of 4 photographers per vehicle, ensuring everyone has prime shooting positions without interference. We spend extended time at productive locations rather than rushing between sightings. When we find compelling subjects in perfect light - a leopard on a boulder with golden backlighting, elephants silhouetted against a colorful sunset, or a herd of deer with rim lighting - we stay positioned until you've captured your vision.

The climax of every safari is sunset positioning. Your tracker selects viewpoints based on sky conditions, wildlife presence, and compositional elements. You'll have opportunities for silhouettes, colorful sky backdrops, and landscape shots incorporating wildlife. This package includes pre-safari consultation about your equipment and post-safari image review with technical feedback.`,

    pricingTiers: [
      { groupSize: "1 Photographer", pricePerPerson: 260, childPrice: 50, infantPrice: 0 },
      { groupSize: "2 Photographers", pricePerPerson: 160, childPrice: 50, infantPrice: 0 },
      { groupSize: "3 Photographers", pricePerPerson: 120, childPrice: 50, infantPrice: 0 },
      { groupSize: "4 Photographers", pricePerPerson: 110, childPrice: 50, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards in golden light on rocky outcrops",
      "Elephant silhouettes against colorful sunsets",
      "Backlit bird photography with rim lighting",
      "Deer herds with dramatic side lighting",
      "Crocodiles with golden reflections in water",
      "Atmospheric shots with dust and light rays",
      "Wildlife portraits in warm afternoon glow",
      "Action shots with directional light modeling"
    ],

    experienceHighlights: [
      "Maximum 4 photographers for optimal positioning",
      "Extended stops at photogenic subjects",
      "Tracker trained in vehicle positioning for light",
      "Strategic sunset location selection",
      "Focus on composition and light quality",
      "Behavior prediction for anticipatory shooting",
      "Pre-safari technical consultation",
      "Post-safari image review and feedback",
      "Flexibility to pursue perfect moments",
      "Priority access to best vantage points"
    ],

    itinerary: [
      {
        time: "1:30 PM",
        activity: "Pre-Safari Consultation",
        description: "Meet at designated location for equipment discussion and sunset photography planning. Review camera settings for golden hour and discuss compositional goals."
      },
      {
        time: "2:00 PM",
        activity: "Park Entry & Initial Scouting",
        description: "Enter park and scout potential locations. Initial wildlife observations while waiting for optimal light to develop."
      },
      {
        time: "3:30 PM",
        activity: "Mid-Afternoon Exploration",
        description: "Visit water sources and shaded areas where animals rest. Practice compositions and test settings in preparation for golden hour."
      },
      {
        time: "4:30 PM",
        activity: "Golden Hour Intensive",
        description: "Begin focused photography as light becomes magical. Extended stops at quality subjects. Vehicle positioning optimized for side and back lighting."
      },
      {
        time: "5:30 PM",
        activity: "Sunset Positioning",
        description: "Move to pre-selected sunset location based on sky conditions and wildlife presence. Multiple composition opportunities with colorful sky backgrounds."
      },
      {
        time: "6:00 PM",
        activity: "Silhouette Photography",
        description: "Capture dramatic silhouettes as sun touches horizon. Experiment with exposures and compositions. Final moments of magic light."
      },
      {
        time: "6:30 PM",
        activity: "Image Review & Return",
        description: "Brief review of key images during return journey. Discuss successes and post-processing approaches. Return to hotel with portfolio-worthy shots."
      }
    ],

    vehicleStandards: [
      "Modified 4x4 with enhanced shooting positions",
      "Bean bags and support equipment provided",
      "Maximum 4 photographers for space",
      "Driver trained in smooth, stable operation",
      "Strategic positioning for optimal light angles",
      "Quick repositioning capability",
      "Dust protection for equipment",
      "Secure gear storage compartments"
    ],

    trackerStandards: [
      "Specialized photography support training",
      "Understanding of light quality and direction",
      "Expertise in composition and positioning",
      "Ability to predict photogenic behaviors",
      "Knowledge of best sunset locations",
      "Patience for extended shooting sessions",
      "Communication skills for collaborative shooting",
      "Network connections for wildlife locations"
    ],

    photographyTips: [
      "Golden hour: 4:30-6:00 PM - prime time for warm light",
      "Use spot metering for backlit subjects",
      "Expose for highlights in high-contrast scenes",
      "Silhouettes: meter on sky, underexpose subject 2-3 stops",
      "Shoot in RAW for maximum editing flexibility",
      "Graduated ND filter balances bright sky with dark foreground",
      "Lower ISO possible (200-400) due to strong afternoon light",
      "Fast shutter speeds (1/1000s+) still needed despite good light",
      "Use fill flash sparingly for backlit subjects",
      "Bracket exposures during dramatic sunset conditions",
      "Focus on eyes even in silhouettes for stronger images",
      "Experiment with different exposures - don't settle for first shot"
    ],

    packingList: [
      "Camera body (DSLR or mirrorless preferred)",
      "Telephoto lens 200-600mm range",
      "Wide angle lens for landscape/sunset shots",
      "Graduated ND filters for sunset photography",
      "Polarizing filter for sky enhancement",
      "Multiple spare batteries (at least 3)",
      "Large capacity memory cards (64GB+)",
      "Lens cleaning kit",
      "Bean bag or small tripod",
      "Rain cover for equipment",
      "Remote shutter release",
      "Neutral colored clothing",
      "Sun protection and water",
      "Small notebook for settings notes"
    ],

    responsibleTourism: [
      "Extended stops maintain safe distances",
      "No pressure or manipulation of wildlife",
      "Ethical photography practices emphasized",
      "Respect for other safari vehicles",
      "Stay on designated tracks",
      "Silent operation during close encounters",
      "Education on conservation through photography",
      "Premium fees support park management",
      "Promote authentic wildlife imagery",
      "Encourage conservation storytelling through images"
    ],

    faqs: [
      {
        question: "Why is afternoon better than morning for photography?",
        answer: "Afternoon offers superior light quality for many subjects. The low sun angle creates warm tones and dramatic shadows. Backlighting opportunities are exceptional. Sunset provides colorful sky backgrounds impossible in morning. The light has more color temperature variation, creating mood and atmosphere. For silhouettes and golden light portraits, afternoon is unmatched."
      },
      {
        question: "What camera equipment is essential?",
        answer: "Minimum: DSLR/mirrorless camera with telephoto lens (200mm+). Ideal: 100-400mm or 150-600mm zoom, multiple batteries, large memory cards. Graduated ND filter highly recommended for sunset shots. While not mandatory, these tools maximize your success during golden hour."
      },
      {
        question: "Can beginners join this photography safari?",
        answer: "Yes! While designed for serious photographers, enthusiastic beginners are welcome. Your tracker provides guidance appropriate to your skill level. The focus is on learning and improving. Basic understanding of camera settings (aperture, shutter, ISO) is helpful but not required."
      },
      {
        question: "Do you guarantee sunset conditions?",
        answer: "Weather is unpredictable, but we operate unless unsafe. Cloudy conditions often create even more dramatic sunsets! Your tracker adapts positioning based on conditions. Overcast days offer soft, even light excellent for wildlife portraits. Every afternoon offers unique photographic opportunities."
      },
      {
        question: "How many animals will we photograph?",
        answer: "This safari prioritizes quality over quantity. Rather than rushing between many animals, we spend extended time with fewer subjects in perfect light. A single leopard in golden light is more valuable than ten poorly lit sightings. Expect 3-5 quality encounters with optimal photographic conditions."
      },
      {
        question: "Is post-safari image review included?",
        answer: "Yes! Brief review during return journey covers your best shots with technical feedback. Your tracker discusses exposure decisions, composition choices, and post-processing suggestions. For extended consultation, we can arrange additional sessions at extra cost."
      }
    ]
  },

  // ========================================
  // AFTERNOON SAFARI - SUBCATEGORY 3
  // ========================================
  {
    slug: "elephant-watching-afternoon-safari",
    category: "Private All-Inclusive Afternoon Safari",
    title: "Elephant-Focused Afternoon Safari",
    shortDescription: "Specialized safari concentrating on Yala's magnificent elephant herds, their social behaviors, bathing rituals, and family dynamics during afternoon hours.",
    duration: "4-5 Hours",
    startingPrice: 95,
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600&q=80",
    
    overview: `Yala National Park is home to one of Sri Lanka's most significant elephant populations, and afternoon hours provide the absolute best opportunities to observe these magnificent creatures in their natural element. The Elephant-Focused Afternoon Safari is specifically designed for guests who want to understand and appreciate the complex social lives of Asian elephants.

Afternoon timing is crucial for elephant observation. As midday heat subsides, elephant herds emerge from forest shade and move toward water sources for their daily bathing rituals. Between 3:00 and 5:00 PM, waterholes and lagoons become stages for incredible elephant behaviors - social interactions, bathing sequences, mud wallowing, family bonding, and dominance displays.

Your specialized elephant tracker possesses deep knowledge of Yala's elephant population. They recognize individual elephants, understand herd composition, know family relationships, and can interpret complex social behaviors. They'll explain matriarchal structure, communication methods (including infrasonic calls you can't hear), feeding strategies, and conservation challenges facing Asian elephants.

Unlike general safaris that briefly observe elephants before moving on, this experience dedicates significant time to watching and understanding elephant behavior. We position at productive waterholes where herds congregate, allowing you to observe extended sequences: mothers teaching calves to use their trunks, teenagers play-fighting, bulls displaying dominance, entire families coordinating movements with subtle communication.

The safari includes educational commentary on elephant ecology, conservation status, and the critical importance of protecting these keystone species. You'll learn to read body language, understand vocalizations, and appreciate the intelligence and emotional depth of these remarkable animals. This is not just wildlife viewing - it's an immersive elephant education experience that creates deep appreciation and conservation awareness.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 195, childPrice: 40, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 125, childPrice: 40, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 95, childPrice: 40, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 85, childPrice: 40, infantPrice: 0 },
      { groupSize: "5 Persons", pricePerPerson: 78, childPrice: 40, infantPrice: 0 },
      { groupSize: "6 Persons", pricePerPerson: 72, childPrice: 40, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Large elephant herds (10-30+ individuals)",
      "Mother-calf bonding and teaching behaviors",
      "Bathing and mud wallowing rituals",
      "Social interactions and communication",
      "Feeding behaviors and trunk techniques",
      "Play behaviors among younger elephants",
      "Dominance displays and hierarchies",
      "Family coordination and movement patterns"
    ],

    experienceHighlights: [
      "Specialized elephant behavior expert guide",
      "Extended observation times at key waterholes",
      "Educational commentary on elephant ecology",
      "Understanding social structure and communication",
      "Prime afternoon timing for bathing rituals",
      "Small group (max 6) for questions and discussion",
      "Photography opportunities of close behaviors",
      "Conservation education and awareness",
      "Recognition of individual elephants",
      "Family-friendly educational experience"
    ],

    itinerary: [
      {
        time: "2:00 PM",
        activity: "Pickup & Elephant Introduction",
        description: "Collection from hotel with introduction to elephant ecology. Discussion of Yala's elephant population, conservation challenges, and what to expect during afternoon observations."
      },
      {
        time: "2:30 PM",
        activity: "Park Entry",
        description: "Enter park and begin journey toward known elephant territories. Your tracker explains how to read elephant signs - footprints, dung, broken branches - to locate herds."
      },
      {
        time: "3:15 PM",
        activity: "First Elephant Encounter",
        description: "Locate initial elephant group. Observe feeding behaviors, social interactions, and herd composition. Learn to identify individuals and understand family relationships."
      },
      {
        time: "4:00 PM",
        activity: "Waterhole Bathing Session",
        description: "Position at major waterhole as elephants arrive for bathing. Extended observation of complete bathing ritual - drinking, spraying, mud wallowing, social play. Prime photography time."
      },
      {
        time: "5:00 PM",
        activity: "Social Behavior Observation",
        description: "Continue watching herd dynamics as they interact post-bath. Observe communication methods, dominance behaviors, and family bonding. Q&A about elephant intelligence and emotions."
      },
      {
        time: "5:45 PM",
        activity: "Sunset & Final Sightings",
        description: "Observe elephants in golden light as they move toward evening grazing areas. Final photography opportunities with stunning backdrops."
      },
      {
        time: "6:15 PM",
        activity: "Return & Conservation Discussion",
        description: "Return journey with discussion of elephant conservation challenges, human-elephant conflict, and how tourism supports protection efforts."
      }
    ],

    vehicleStandards: [
      "4x4 Safari Jeep with excellent visibility",
      "Comfortable seating for extended observations",
      "Quiet operation for close approaches",
      "First-aid and safety equipment",
      "Binoculars provided for detailed viewing",
      "Educational materials about elephants",
      "Dust protection and comfort features",
      "Strategic positioning at safe distances"
    ],

    trackerStandards: [
      "Specialized elephant behavior expertise",
      "Knowledge of individual elephants in Yala",
      "Understanding of elephant communication and social structure",
      "Trained in safe elephant encounter protocols",
      "Educational teaching skills for all age groups",
      "Conservation knowledge and passion",
      "Ability to interpret complex behaviors",
      "Experience with extended observation sessions"
    ],

    photographyTips: [
      "Afternoon light perfect for behavioral photography",
      "Capture sequences of behaviors, not just single shots",
      "Focus on interactions between elephants",
      "Mother-calf bonding makes compelling images",
      "Bathing sequences tell complete stories",
      "Use continuous shooting for action",
      "Include environmental context showing habitat",
      "Expression and emotion visible in elephant faces",
      "Trunk movements and eye contact create connection",
      "Silhouettes powerful during sunset",
      "Close-ups show texture and detail",
      "Wide shots establish social group context"
    ],

    packingList: [
      "Camera with telephoto lens (200-400mm ideal)",
      "Binoculars for detailed observation",
      "Notebook for behavioral observations",
      "Sun protection (hat, sunscreen)",
      "Comfortable neutral-colored clothing",
      "Water bottle (provided but bring refillable)",
      "Insect repellent",
      "Light jacket for late afternoon",
      "Closed-toe shoes",
      "Small backpack for personal items",
      "Field guide to Asian elephants (optional)",
      "Children's activity book (if bringing kids)"
    ],

    responsibleTourism: [
      "Strict adherence to safe viewing distances",
      "Never approach or disturb elephant herds",
      "Respect elephant right-of-way on tracks",
      "Silent observation during sensitive behaviors",
      "No feeding or attraction attempts",
      "Education on human-elephant conflict issues",
      "Support for elephant conservation programs",
      "Ethical photography practices",
      "Portion of fees funds habitat protection",
      "Promote coexistence between humans and elephants"
    ],

    faqs: [
      {
        question: "Why is afternoon better for elephant watching?",
        answer: "Elephants seek water during late afternoon for bathing and drinking, creating concentrated viewing at waterholes. The cooler temperatures bring increased activity. Bathing behaviors - the highlight of elephant watching - primarily occur between 3-5 PM. Morning elephants are more dispersed and less interactive."
      },
      {
        question: "How close can we get to elephants?",
        answer: "Safety regulations require minimum distances (typically 25-30 meters). However, elephants often approach vehicles out of curiosity, sometimes coming very close. Your tracker manages safe encounters, reading elephant body language to ensure stress-free observations. Most viewing is within excellent photography range."
      },
      {
        question: "Is this safari suitable for children?",
        answer: "Absolutely! Children are fascinated by elephants and this educational safari is perfect for families. The extended observation times work well for kids. Your tracker adapts commentary to be engaging for all ages. Many children remember this experience as a highlight of their Sri Lanka trip."
      },
      {
        question: "Will we see baby elephants?",
        answer: "Yala has a healthy breeding population with calves frequently present in herds. While we can't guarantee specific individuals, the probability of seeing young elephants is very high. Mother-calf interactions are among the most touching wildlife observations possible."
      },
      {
        question: "Do we only watch elephants or see other wildlife too?",
        answer: "While elephants are the primary focus, you'll encounter diverse wildlife en route to elephant locations. We don't ignore leopards or other species! However, time allocation prioritizes elephant observation and understanding over collecting species sightings."
      },
      {
        question: "What conservation threats do these elephants face?",
        answer: "Your tracker discusses habitat loss, human-elephant conflict in surrounding villages, poaching threats, and climate change impacts. You'll learn how tourism revenue supports protection and how visitors can contribute to conservation efforts. Education is a key component of this experience."
      }
    ]
  },

  // ========================================
  // AFTERNOON SAFARI - SUBCATEGORY 4
  // ========================================
  {
    slug: "romantic-couples-afternoon-safari",
    category: "Private All-Inclusive Afternoon Safari",
    title: "Romantic Couples Sunset Safari",
    shortDescription: "Intimate afternoon safari designed for couples, featuring private vehicle, champagne sunset, gourmet snacks, and unforgettable wildlife encounters.",
    duration: "4-5 Hours",
    startingPrice: 180,
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1600&q=80",
    
    overview: `Transform your Yala safari experience into a romantic adventure with our exclusive Couples Sunset Safari. This specially curated package combines thrilling wildlife encounters with intimate moments, creating memories that will last a lifetime. Perfect for honeymoons, anniversaries, or simply celebrating your relationship in one of the world's most spectacular natural settings.

This is not just a safari - it's a romantic experience thoughtfully designed for two. You'll have a private safari vehicle exclusively for yourselves, ensuring complete intimacy and flexibility. Your expert tracker acts as both wildlife guide and personal host, ensuring your comfort and creating special moments throughout the journey.

The afternoon timing is deliberately chosen for its romantic ambiance. As the harsh midday sun softens into golden afternoon light, the entire park transforms into a scene of breathtaking beauty. The warm glow enhances everything - wildlife looks majestic, landscapes become painterly, and the atmosphere turns magical. This is nature's most romantic lighting.

The highlight of your safari is the champagne sunset experience. At a carefully selected scenic location - perhaps overlooking a lagoon where elephants bathe, or a vista point with sweeping wilderness views - we set up an intimate champagne service. As you sip premium champagne or sparkling juice, watch the sun paint the sky in brilliant colors while wildlife moves through the landscape below. Gourmet snacks complement the experience.

Beyond the champagne moment, this safari includes thoughtful touches: comfortable cushioned seating, personal attention from your guide, flexibility to spend extra time at locations you love, and the freedom to share this adventure at your own pace. Whether you're wildlife enthusiasts or simply seeking a unique romantic experience, this safari delivers unforgettable moments of connection with each other and with nature.`,

    pricingTiers: [
      { groupSize: "2 Persons (Couple)", pricePerPerson: 180, childPrice: 0, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards in romantic golden hour light",
      "Elephant families demonstrating lifelong bonds",
      "Pairs of birds in courtship displays",
      "Deer herds backlit by setting sun",
      "Crocodile pairs in breeding season",
      "Monkeys in family groups",
      "Scenic wildlife against colorful sunset skies",
      "Intimate wildlife moments reflecting partnership"
    ],

    experienceHighlights: [
      "Completely private vehicle for just the two of you",
      "Premium champagne or sparkling juice service",
      "Gourmet snack selection during sunset",
      "Romantic sunset viewing at exclusive location",
      "Flexible timing to suit your preferences",
      "Professional guide acts as personal host",
      "Comfortable premium seating and cushions",
      "Photography assistance for couple photos with wildlife",
      "Complimentary digital photo memories",
      "Optional decoration for special occasions",
      "Freedom to request stops and extended viewing",
      "Intimate and personal safari experience"
    ],

    itinerary: [
      {
        time: "2:00 PM",
        activity: "Private Pickup",
        description: "Exclusive vehicle collection from your hotel. Your guide welcomes you with refreshing towels and cold beverages. Brief introduction to the romantic safari experience ahead."
      },
      {
        time: "2:30 PM",
        activity: "Park Entry & Journey Begins",
        description: "Enter Yala's wilderness hand-in-hand as your adventure begins. The park is yours to explore together, with complete flexibility and privacy."
      },
      {
        time: "3:00 PM",
        activity: "Wildlife Exploration",
        description: "Seek leopards, elephants, and diverse wildlife while your guide shares fascinating stories. Comfortable pace allows for photography and simply enjoying each other's company in nature."
      },
      {
        time: "4:30 PM",
        activity: "Golden Hour Romance",
        description: "As light becomes magical, visit prime wildlife locations. The warm glow creates stunning photography opportunities - both of wildlife and of you as a couple."
      },
      {
        time: "5:30 PM",
        activity: "Champagne Sunset Setup",
        description: "Arrive at exclusive scenic location pre-selected for sunset viewing. Your guide sets up champagne service with gourmet snacks. Toast each other as the sun begins its descent."
      },
      {
        time: "6:00 PM",
        activity: "Sunset & Intimate Moments",
        description: "Share champagne while watching one of nature's most spectacular shows. Wildlife silhouettes move across the landscape as the sky explodes with color. Perfect for proposals or celebrating your bond."
      },
      {
        time: "6:30 PM",
        activity: "Romantic Return",
        description: "Leisurely return to your hotel under the early evening sky. Share your favorite moments from the day. Your guide ensures complete privacy during the journey back."
      }
    ],

    vehicleStandards: [
      "Premium safari vehicle exclusively for couple",
      "Enhanced comfortable cushioned seating",
      "Romantic atmosphere with thoughtful details",
      "Champagne cooling facilities",
      "Premium binoculars for wildlife viewing",
      "Dust covers and comfort amenities",
      "Professional cleanliness and presentation",
      "Privacy curtains if desired",
      "Decorative touches for special occasions"
    ],

    trackerStandards: [
      "Experienced guide with hospitality training",
      "Understanding of romantic experience requirements",
      "Professional yet unobtrusive presence",
      "Flexibility to accommodate couple's wishes",
      "Photography skills to capture couple moments",
      "Knowledge of most scenic sunset locations",
      "Multilingual capabilities",
      "Commitment to creating memorable experience"
    ],

    photographyTips: [
      "Guide assists with couple photos against wildlife backdrops",
      "Sunset silhouettes of you together make stunning keepsakes",
      "Golden hour light perfect for flattering portraits",
      "Wildlife photography opportunities throughout",
      "Romantic moments naturally captured by guide",
      "Bring smartphone for easy sharing on social media",
      "Professional camera welcome but not necessary",
      "Focus on experiencing moments, not just documenting them",
      "Guide helps with composition and lighting",
      "Complimentary digital photos provided post-safari"
    ],

    packingList: [
      "Comfortable romantic but practical clothing",
      "Light jacket or shawl (evenings can be cool)",
      "Sunglasses and sun protection",
      "Camera or smartphone for memories",
      "Any special items for surprise proposals",
      "Comfortable shoes for vehicle entry/exit",
      "Personal items (tissues, lip balm, etc.)",
      "Insect repellent (provided but bring preference)",
      "Small bag for personal belongings",
      "Elegant casual attire if desired for photos"
    ],

    responsibleTourism: [
      "Intimate experience with minimal environmental impact",
      "All champagne service waste properly removed",
      "Zero single-use plastics policy",
      "Premium pricing supports enhanced conservation",
      "Employment of local expert guides",
      "Education on wildlife conservation",
      "Ethical wildlife viewing practices",
      "Support for community development",
      "Celebration of nature strengthens conservation values",
      "Romantic experience promotes environmental appreciation"
    ],

    faqs: [
      {
        question: "Is this safari only for couples or can friends book it?",
        answer: "While designed for romantic couples, we welcome any pair of guests seeking an intimate, private safari experience. Friends, siblings, or parent-child pairs are absolutely welcome. The champagne, privacy, and special touches create a memorable experience for any relationship."
      },
      {
        question: "Can you help with marriage proposals?",
        answer: "Absolutely! We've facilitated many proposals and would be honored to help make yours perfect. Inform us in advance and we can arrange special decorations, timing, photography, and even coordinate with your hotel for post-proposal celebrations. We keep proposals completely confidential until the moment arrives."
      },
      {
        question: "What if we're not champagne drinkers?",
        answer: "No problem! We offer premium sparkling juice, fresh fruit juice, or other beverage preferences. Simply inform us when booking. The 'champagne sunset' is about the romantic moment and stunning views, not specifically about alcohol. All dietary preferences accommodated."
      },
      {
        question: "Is this suitable for older couples or those with mobility limitations?",
        answer: "Yes! The safari vehicle is easily accessible and we adjust the pace to your comfort level. The champagne setup is at the vehicle, not requiring walking. We've hosted couples from their 20s to their 80s. Just inform us of any specific needs so we can ensure your complete comfort."
      },
      {
        question: "Can we book this last minute?",
        answer: "While we try to accommodate last-minute bookings, advance reservation is strongly recommended to ensure vehicle availability and allow time for any special arrangements. For proposals or anniversaries, 3-7 days notice ensures we can create the perfect experience."
      },
      {
        question: "What makes this worth the premium price?",
        answer: "You receive: completely private vehicle (not shared), premium champagne service, gourmet snacks, exclusive sunset location, extended flexibility, personal hosting, complimentary photography, and romantic touches throughout. It's a comprehensive romantic experience, not just a safari. Couples consistently rate this as a highlight of their Sri Lanka honeymoon or anniversary trip."
      }
    ]
  },

  // ========================================
  // 7-HOUR HALF-DAY SAFARI - SUBCATEGORY 1
  // ========================================
  {
    slug: "comprehensive-half-day-safari",
    category: "Private All-Inclusive 7-Hour Half-Day Safari",
    title: "Comprehensive 7-Hour Half-Day Safari",
    shortDescription: "Extended safari experience combining morning wildlife activity with midday opportunities. Perfect for serious wildlife enthusiasts seeking more time in the park without full-day commitment.",
    duration: "7 Hours",
    startingPrice: 135,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1600&q=80",
    
    overview: `The 7-Hour Half-Day Safari represents the optimal balance between comprehensive wildlife coverage and practical time management. This extended experience captures the best of both worlds - the intense activity of early morning combined with the unique opportunities of midday when most tourists have departed, giving you semi-exclusive access to the park.

Starting before dawn, this safari allows you to experience the magical first light of morning when leopards are most active and the jungle awakens with bird calls and animal movement. However, unlike standard morning safaris that exit by 10 AM, you continue exploration through the late morning and into early afternoon, accessing different wildlife behaviors and species that emerge during these hours.

The extended duration provides several critical advantages. First, you have time to wait for elusive species rather than rushing between sightings. When tracks indicate a nearby leopard, you can invest time in patient tracking. Second, you cover significantly more territory, accessing remote zones that 4-hour safaris never reach. Third, you experience the fascinating transition period when diurnal and crepuscular species overlap in activity.

Midday wildlife viewing offers unique opportunities often overlooked by conventional wisdom. While activity levels decrease during peak heat, this creates different photography conditions with harsh, dramatic light. Water sources become concentrated focal points where diverse species converge. Reptiles like crocodiles and monitors become more visible. Some animals, particularly elephants, engage in specific midday behaviors like dust bathing and shade resting that are fascinating to observe.

Your experienced tracker understands how to maximize this extended timeframe. They know which zones remain productive during midday, where to position for optimal sightings across different times, and how to balance active searching with strategic waiting. The 7-hour duration also allows for a brief refreshment break where you can stretch, enjoy provided snacks, and process your morning's experiences before continuing the adventure.

This package includes all park fees, expert tracker and driver services, comprehensive insurance, bottled water, light refreshments, and strategic planning to ensure every hour delivers value. By the time you exit the park around 1-2 PM, you'll have experienced far more than standard safaris while still having your afternoon free for rest or other activities.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 245, childPrice: 35, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 170, childPrice: 35, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 135, childPrice: 35, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 120, childPrice: 35, infantPrice: 0 },
      { groupSize: "5 Persons", pricePerPerson: 108, childPrice: 35, infantPrice: 0 },
      { groupSize: "6 Persons", pricePerPerson: 98, childPrice: 35, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards during peak morning activity hours",
      "Elephant herds across multiple locations and times",
      "Sloth bears foraging in early morning and midday",
      "Over 100+ bird species possible in extended timeframe",
      "Crocodile activity increases as day warms",
      "Deer herds in both active and resting behaviors",
      "Water buffalo concentrating at remaining water sources",
      "Reptiles (monitors, snakes) more visible in warm hours",
      "Mongoose and jackal activity throughout",
      "Transitional behaviors between time periods"
    ],

    experienceHighlights: [
      "7 full hours of wildlife exploration",
      "Early morning peak activity plus midday opportunities",
      "Access to remote zones not reached by shorter safaris",
      "Extended time for patient wildlife tracking",
      "Semi-exclusive park access after morning crowds exit",
      "Multiple habitat coverage across different times",
      "Light refreshments and break included",
      "Comprehensive wildlife photography opportunities",
      "Both quantity and quality of sightings maximized",
      "Complete morning activity cycle observation",
      "Flexibility to spend extended time at good sightings",
      "Expert tracker's full attention for entire experience"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Pre-Dawn Pickup",
        description: "Early collection from your hotel to maximize time in the park. Brief welcome and preparation for extended safari. Check equipment and supplies."
      },
      {
        time: "5:30 AM",
        activity: "Park Entry at Dawn",
        description: "Enter park as gates open. Experience the magical transition from darkness to dawn. Listen to the morning chorus and watch for early leopard activity."
      },
      {
        time: "6:00 AM",
        activity: "Prime Morning Wildlife Search",
        description: "Intensive tracking during peak activity hours. Focus on leopard territories, elephant herds, and diverse species. Extended stops at quality sightings without time pressure."
      },
      {
        time: "7:30 AM",
        activity: "Lagoon & Waterhole Circuit",
        description: "Visit multiple water sources as animals come to drink and bathe. Excellent photography opportunities in strengthening morning light."
      },
      {
        time: "9:00 AM",
        activity: "Remote Zone Exploration",
        description: "Venture into deeper territories rarely reached by standard safaris. These zones often hold surprises as most other vehicles have departed."
      },
      {
        time: "10:30 AM",
        activity: "Refreshment Break",
        description: "Strategic pause at scenic location. Enjoy provided snacks and beverages. Stretch legs (where permitted), review morning highlights, discuss afternoon strategy."
      },
      {
        time: "11:00 AM",
        activity: "Midday Wildlife Observation",
        description: "Continue exploration focusing on species and behaviors specific to warmer hours. Water sources, shade areas, and reptile hotspots become priorities."
      },
      {
        time: "12:00 PM",
        activity: "Final Zone Sweep",
        description: "Comprehensive coverage of remaining priority areas. Final opportunities for species still missing from your sightings list."
      },
      {
        time: "12:30 PM",
        activity: "Return Journey & Exit",
        description: "Begin return to park exit with continued vigilance for last-minute sightings. Review highlights and compare notes from the extended adventure."
      },
      {
        time: "1:00 PM",
        activity: "Drop-off at Hotel",
        description: "Return to accommodation with comprehensive wildlife experiences and hundreds of photographs. Afternoon still free for rest or other activities."
      }
    ],

    vehicleStandards: [
      "4x4 Safari Jeep with enhanced comfort for extended journey",
      "Cushioned seating designed for 7-hour comfort",
      "Pop-up roof for 360-degree viewing",
      "Comprehensive first-aid and emergency equipment",
      "Cooler with refreshments for extended trip",
      "Dust protection and sun shades",
      "Binoculars and field guides provided",
      "Regular maintenance for reliability",
      "Strategic positioning capability throughout day"
    ],

    trackerStandards: [
      "Elite trackers with extensive Yala experience (15+ years)",
      "Expertise in both morning and midday wildlife patterns",
      "Stamina and focus for extended safari duration",
      "Knowledge of remote zones and secret locations",
      "Understanding of time-specific animal behaviors",
      "Radio network access for coordinated tracking",
      "First aid and emergency response certified",
      "Multilingual communication capabilities",
      "Passionate about delivering exceptional extended experiences"
    ],

    photographyTips: [
      "7 hours provides diverse lighting conditions for varied shots",
      "Early morning soft light for classic wildlife portraits",
      "Harsh midday light creates dramatic high-contrast images",
      "Extended time allows for behavioral sequence photography",
      "Opportunity to photograph same species in different lighting",
      "Bring extra batteries (6+ recommended) and memory cards",
      "Harsh light good for B&W conversion",
      "Midday shadows can create abstract compositions",
      "Water reflections stronger in calm midday conditions",
      "Time to experiment with different techniques and settings",
      "Remote zones often less disturbed, better behavior shots",
      "Extended sightings allow for perfect moment patience"
    ],

    packingList: [
      "Camera equipment with ample batteries and memory",
      "Multiple layers - cool morning, warm midday",
      "Sun protection - hat, sunscreen, sunglasses",
      "Personal snacks (provided but bring favorites)",
      "Large refillable water bottle",
      "Insect repellent (mosquitoes in early morning)",
      "Comfortable cushion or seat pad (optional)",
      "Binoculars if you have personal preference",
      "Field notebook for observations",
      "Personal medications if needed",
      "Light jacket for air-conditioned vehicle between locations",
      "Wet wipes and hand sanitizer",
      "Book or entertainment for break time",
      "Portable phone charger"
    ],

    responsibleTourism: [
      "Extended presence in park requires heightened responsibility",
      "Maintain silence during all wildlife encounters",
      "Absolutely no feeding or disturbing animals",
      "Stay in vehicle at all times except designated break areas",
      "All waste carried back - zero littering policy",
      "Respect park routes and boundaries",
      "Support extended conservation through premium fees",
      "Extended observation promotes deeper understanding",
      "Educational approach throughout 7 hours",
      "Local employment and community support",
      "Sustainable tourism practices modeled",
      "Contribution to habitat protection and management"
    ],

    faqs: [
      {
        question: "Is 7 hours too long in a safari vehicle?",
        answer: "Not at all! Our vehicles are designed for comfort with cushioned seating. We include a refreshment break for stretching. The extended time passes quickly due to continuous wildlife activity and diverse sightings. Most guests wish they had even more time! However, if you prefer shorter experiences, consider our 4-hour options."
      },
      {
        question: "What's the advantage over doing morning + afternoon safaris separately?",
        answer: "The 7-hour safari offers better value (lower per-hour cost) and continuous tracking. Your tracker builds on morning observations to predict afternoon locations. You access remote zones impossible in shorter trips. There's psychological advantage in sustained immersion. However, separate safaris offer different times of day with distinct advantages."
      },
      {
        question: "Will wildlife still be active during midday heat?",
        answer: "Activity levels decrease but don't stop. Water sources concentrate diverse species. Reptiles become more active. Some species like elephants engage in specific midday behaviors. Photography opportunities differ but remain excellent. The reduced tourist presence often means better sightings. Our trackers know exactly where to find action regardless of time."
      },
      {
        question: "What refreshments are included?",
        answer: "We provide bottled water throughout, plus light snacks during the mid-safari break - typically fresh fruit, energy bars, cookies, and additional beverages. If you have specific dietary needs or preferences, inform us when booking and we'll accommodate. Full meals are not included but substantial snacking keeps energy high."
      },
      {
        question: "Is this suitable for young children?",
        answer: "Children 8+ typically handle 7 hours well, especially those genuinely interested in wildlife. Younger children (5-7) can participate but parents should bring entertainment for quieter periods. The break helps maintain attention. We've hosted many families successfully. Consider your child's patience and interest level. Alternatively, our 4-hour safaris work well for younger kids."
      },
      {
        question: "Can we customize the timing or focus?",
        answer: "Yes, with limitations. Start time must align with park hours but we can emphasize specific interests - birds, leopards, elephants, photography, etc. The 7-hour duration allows flexibility to pursue your priorities while maintaining comprehensive coverage. Discuss preferences with your tracker at the start."
      }
    ]
  },

  // ========================================
  // 7-HOUR HALF-DAY SAFARI - SUBCATEGORY 2
  // ========================================
  {
    slug: "leopard-tracking-half-day-safari",
    category: "Private All-Inclusive 7-Hour Half-Day Safari",
    title: "Intensive Leopard Tracking Safari",
    shortDescription: "Specialized 7-hour safari dedicated to finding and observing Yala's magnificent leopards. Extended time maximizes chances of multiple sightings and rare behaviors.",
    duration: "7 Hours",
    startingPrice: 165,
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1600&q=80",
    
    overview: `Yala National Park boasts the highest density of leopards anywhere in the world, yet these elusive apex predators remain challenging to observe. The Intensive Leopard Tracking Safari is specifically designed for guests passionate about seeing, understanding, and photographing these magnificent big cats, and the extended 7-hour timeframe dramatically increases your success probability.

This is not a general wildlife safari with leopard sightings as a bonus - it's a focused leopard expedition. Every decision from route selection to timing strategy centers on maximizing leopard encounters. Your specialized leopard tracker possesses deep knowledge of individual leopards, their territories, movement patterns, behavior cycles, and personality differences. They recognize leopards by their unique spot patterns and can tell you stories about specific individuals.

The 7-hour duration is crucial for successful leopard tracking. Unlike some species that gather at predictable locations, leopards are solitary, territorial, and wide-ranging. Finding them requires systematic territory coverage, careful observation for signs (tracks, kills, scent marks), patience at promising locations, and sometimes lengthy follows as cats move through their domains. This simply cannot be accomplished in 3-4 hours.

Our approach combines proactive searching with strategic waiting. We check known territories at optimal times, investigate fresh tracks and alarm calls, and position at locations where leopards frequently pass. When we locate a leopard, we don't just snap photos and move on - we observe extended behavior. Watch as they patrol territory boundaries, mark scent posts, interact with prey species, rest in favorite trees, or if extraordinarily fortunate, hunt or feed on kills.

The extended time also increases the probability of rare observations. While other safaris might see one leopard briefly, you have time for multiple encounters. You might witness territorial interactions between leopards, observe mating behavior during breeding season, or document a mother with cubs. These are the moments that define once-in-a-lifetime wildlife experiences.

Beyond leopards, you'll encounter Yala's diverse wildlife - the safari doesn't ignore elephants, sloth bears, or hundreds of bird species. However, time allocation prioritizes leopard tracking. Your tracker maintains constant communication with other guides via radio network, immediately responding to reported leopard sightings while also conducting independent tracking based on signs and intuition developed through decades of experience.

This package includes comprehensive park fees, elite leopard tracking specialist, dedicated driver, insurance, refreshments for the extended journey, and detailed briefing on leopard ecology and conservation. By committing 7 hours to focused tracking, you stack the odds dramatically in your favor for not just seeing leopards, but truly experiencing these apex predators in their natural domain.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 325, childPrice: 55, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 215, childPrice: 55, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 165, childPrice: 55, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 145, childPrice: 55, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Multiple leopard sightings highly probable (80%+ success rate)",
      "Extended leopard behavior observation",
      "Potential for rare leopard interactions",
      "Cubs with mothers (season dependent)",
      "Territorial marking and patrolling behaviors",
      "Leopard hunting techniques and prey interactions",
      "Individual leopard identification and stories",
      "Leopard vocalizations and communication",
      "Different leopards across various territories",
      "Tree climbing and resting behaviors"
    ],

    experienceHighlights: [
      "Elite leopard tracking specialist guide",
      "7 hours dedicated to leopard finding mission",
      "Systematic territory coverage strategy",
      "Extended observation when leopards located",
      "Knowledge of individual leopards and their personalities",
      "Track reading and sign interpretation education",
      "Radio network for real-time leopard intelligence",
      "Patience and time for elusive cats",
      "Maximum 4 guests for optimal leopard viewing",
      "Photography support specific to leopard shots",
      "Conservation education on leopard protection",
      "Flexible timing to follow leopard movements"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Tracker Briefing & Strategy",
        description: "Collection from hotel with detailed briefing on day's leopard tracking strategy. Review recent sightings, discuss individual leopards, and plan territory coverage."
      },
      {
        time: "5:30 AM",
        activity: "Dawn Territory Check",
        description: "Enter prime leopard territories at first light. Check favorite resting spots, recent kill sites, and territorial boundaries. Look for fresh tracks and signs."
      },
      {
        time: "6:30 AM",
        activity: "Active Tracking Phase 1",
        description: "Systematic search through key territories. Your tracker reads signs - pug marks, scrapes, alarm calls from prey species. Patient investigation when promising indicators found."
      },
      {
        time: "8:00 AM",
        activity: "First Leopard Encounter Goal",
        description: "Continue tracking using all available intelligence. Radio coordination with network. When leopard located, extended observation of behavior begins."
      },
      {
        time: "9:30 AM",
        activity: "Territory Transition",
        description: "Move to different leopard territories to increase encounter probability. Each area has unique characteristics and different resident leopards."
      },
      {
        time: "10:30 AM",
        activity: "Refreshment & Strategy Review",
        description: "Brief break to discuss morning observations and adjust afternoon strategy. Analyze leopard signs encountered and predict likely locations."
      },
      {
        time: "11:00 AM",
        activity: "Midday Territory Patrol",
        description: "Check territories where leopards often rest during warmer hours. Tree scanning, rocky outcrop investigation, and shaded ravine exploration."
      },
      {
        time: "12:00 PM",
        activity: "Additional Territory Coverage",
        description: "Final territory sweep focusing on areas not yet covered. Respond to any radio reports. Final tracking efforts before exit."
      },
      {
        time: "12:45 PM",
        activity: "Leopard Experience Debrief",
        description: "Return journey with detailed discussion of leopard behaviors observed, conservation challenges, and individual cat stories from your tracker's experience."
      }
    ],

    vehicleStandards: [
      "4x4 Safari Jeep optimized for tracking maneuverability",
      "Maximum 4 passengers for unobstructed leopard viewing",
      "Enhanced suspension for rough terrain access",
      "Quiet operation for close leopard approaches",
      "Pop-up roof for optimal photography angles",
      "Bean bags for camera stabilization",
      "Communication equipment for radio network",
      "Comfortable seating for extended tracking",
      "Quick repositioning capability"
    ],

    trackerStandards: [
      "Elite leopard specialist with 20+ years experience",
      "Recognition of individual leopards by spot patterns",
      "Expert in leopard behavior and ecology",
      "Master of sign reading (tracks, scrapes, kills)",
      "Extensive knowledge of territorial ranges",
      "Connected to comprehensive radio network",
      "Passionate about leopard conservation",
      "Ability to predict leopard movements",
      "Skilled in patience and strategic waiting",
      "Photography support for leopard shots"
    ],

    photographyTips: [
      "Leopards often in difficult lighting - high ISO capability essential",
      "Fast telephoto lens (f/4 or wider) helps in forest shade",
      "Anticipate movement - leopards are quick and unpredictable",
      "Focus on eyes - critical for compelling leopard portraits",
      "Continuous autofocus mode for moving leopards",
      "Burst mode captures behavioral sequences",
      "Tree-climbing leopards need fast shutter speeds (1/1000s+)",
      "Compose with environment showing habitat context",
      "Different angles tell different stories - experiment",
      "Patience for perfect moments - leopards pause beautifully",
      "Spot patterns make interesting detail shots",
      "Extended time allows multiple compositions of same cat",
      "Morning and midday light offer different moods",
      "Be ready - leopards appear suddenly and may not stay long"
    ],

    packingList: [
      "Camera with fast telephoto lens (300-600mm)",
      "Multiple batteries (leopard tracking drains power)",
      "Large memory cards (you'll shoot thousands of frames)",
      "Bean bag for camera support",
      "Binoculars for scanning distant areas",
      "Neutral clothing - no bright colors that spook cats",
      "Layered clothing for temperature changes",
      "Sun protection (hat, sunscreen)",
      "Insect repellent",
      "Water bottle and personal snacks",
      "Field notebook for recording observations",
      "Leopard identification guide (provided)",
      "Patience and enthusiasm!",
      "Portable charger for devices"
    ],

    responsibleTourism: [
      "Maintain strict distance - never approach leopards",
      "Absolute silence during leopard observations",
      "No flash photography - disturbs cats and ruins natural behavior",
      "Allow leopards right of way on tracks",
      "Never follow leopards if they show stress signs",
      "Respect denning sites with cubs - observe from safe distance",
      "Premium fees support leopard research and conservation",
      "Education on human-leopard coexistence",
      "Promote ethical leopard photography and tourism",
      "Support anti-poaching and habitat protection",
      "Scientific data collected from sightings aids research",
      "Conservation awareness through extended observation"
    ],

    faqs: [
      {
        question: "Can you guarantee leopard sightings?",
        answer: "While we never guarantee wildlife sightings, the 7-hour intensive tracking provides 80-90% success rate for leopard encounters. Yala has the world's highest leopard density, and our elite trackers know where to look. Multiple leopard sightings common. However, these are wild animals - occasionally they're simply elusive despite our best efforts."
      },
      {
        question: "What if we find leopards early - do we still stay 7 hours?",
        answer: "Yes, the 7-hour duration allows for extended leopard observation and seeking additional encounters with different individuals. Brief sightings don't satisfy serious leopard enthusiasts. Extended time lets you observe natural behaviors, capture great photographs, and potentially see multiple leopards across different territories."
      },
      {
        question: "How close can we get to leopards?",
        answer: "Safety regulations require minimum distances (typically 20-30 meters), but leopards often approach vehicles out of curiosity or cross paths at closer range. Our trackers are experts in reading leopard body language to manage safe, stress-free encounters. Most sightings occur within excellent photography range."
      },
      {
        question: "What other animals will we see?",
        answer: "While focus is leopards, you'll encounter diverse wildlife - elephants, sloth bears, deer, buffalo, crocodiles, birds, and more. We don't ignore other species, but time allocation prioritizes leopard tracking. Some guests see more overall wildlife on general safaris; this safari trades breadth for depth regarding leopards."
      },
      {
        question: "Is this suitable for non-photographers?",
        answer: "Absolutely! While photographers love the extended observation time, wildlife enthusiasts of all types appreciate seeing leopard behaviors rarely witnessed on standard safaris. Understanding these apex predators requires time. The experience is equally rewarding with or without a camera."
      },
      {
        question: "Best season for leopard tracking?",
        answer: "Yala offers year-round leopard viewing, but dry season (May-September) concentrates animals at water sources, making tracking more predictable. February-July is mating season when territorial interactions increase. Each season has advantages - discuss timing with us when booking for current conditions."
      }
    ]
  },

  // ========================================
  // 7-HOUR HALF-DAY SAFARI - SUBCATEGORY 3
  // ========================================
  {
    slug: "wilderness-picnic-half-day-safari",
    category: "Private All-Inclusive 7-Hour Half-Day Safari",
    title: "Wilderness Picnic Safari Experience",
    shortDescription: "Luxury 7-hour safari featuring gourmet wilderness breakfast or lunch, premium wildlife viewing, and exclusive picnic setup at scenic locations within the park.",
    duration: "7 Hours",
    startingPrice: 195,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&q=80",
    
    overview: `Transform your safari into a luxurious wilderness adventure with our exclusive Wilderness Picnic Safari Experience. This premium 7-hour journey combines exceptional wildlife viewing with a gourmet meal served in one of Yala's most spectacular natural settings, creating memories that extend far beyond typical safari experiences.

This package represents the pinnacle of safari luxury - a perfect fusion of adventure and comfort. You'll experience all the thrills of wildlife tracking and observation, but with elevated service standards, premium amenities, and a culinary experience that rivals fine dining restaurants, all served in the heart of the wilderness with elephants, birds, and possibly even leopards as your dining companions.

The safari begins like our comprehensive experience, with early morning entry to capture peak wildlife activity. Your elite tracker seeks out leopards, elephants, and diverse species across Yala's varied habitats. However, around mid-morning, the experience transforms as we transport you to a pre-selected scenic location where our team has prepared an exclusive picnic setup.

Imagine this: You've just spent three hours photographing leopards, watching elephants bathe, and observing hundreds of bird species. Now you're seated at a beautifully appointed picnic table complete with white linens, proper dinnerware, and elegant touches, overlooking a lagoon where crocodiles bask and water buffalo graze. Your gourmet meal features Sri Lankan specialties and international options, prepared fresh that morning using local organic ingredients. As you dine, wildlife continues around you - birds call from nearby trees, deer move through distant grasslands, and the entire spectacle of nature unfolds as your backdrop.

The wilderness picnic location is carefully selected based on several factors: safety and park regulations, scenic beauty, wildlife activity in the area, shade for comfort, and current conditions. Your tracker has relationships with park authorities allowing access to exclusive spots not available to general safari vehicles. Each location offers something special - perhaps a view across an expansive wetland, a position near an active water source, or a vantage point overlooking multiple habitats.

After your leisurely meal and relaxation period, the safari continues with renewed energy. The post-meal tracking often yields exceptional sightings as you've remained in the park during the quieter midday period when most other vehicles have exited. This semi-exclusive access, combined with your tracker's expertise and the 7-hour timeframe, creates opportunities for wildlife encounters that shorter, standard safaris simply cannot match.

The Wilderness Picnic Safari is perfect for special occasions - honeymoons, anniversaries, milestone birthdays, or family celebrations. It's also ideal for guests who want premium wildlife experiences without sacrificing comfort, for those seeking unique photographic opportunities of the park combined with lifestyle shots of the picnic setup, or simply for anyone who understands that the finest adventures combine thrilling wildlife encounters with moments of refined pleasure.

This all-inclusive package covers park fees, elite tracker and driver, luxury vehicle, gourmet picnic meal with beverages (including wine or champagne options), premium equipment (binoculars, field guides), comprehensive insurance, and pre-safari consultation to customize menu preferences. It represents not just a safari, but a complete wilderness lifestyle experience that showcases the best of wildlife adventure and civilized comfort.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 395, childPrice: 125, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 265, childPrice: 125, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 195, childPrice: 125, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 175, childPrice: 125, infantPrice: 0 },
      { groupSize: "5 Persons", pricePerPerson: 165, childPrice: 125, infantPrice: 0 },
      { groupSize: "6 Persons", pricePerPerson: 155, childPrice: 125, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Extended morning wildlife viewing during peak hours",
      "Leopard tracking with experienced specialist",
      "Elephant herds across multiple locations",
      "Wildlife viewing continues during picnic - animals near setup",
      "Birds attracted to picnic area create close encounters",
      "Midday wildlife behaviors and habitat use",
      "Semi-exclusive park access post-picnic",
      "Diverse species across 7-hour timeframe",
      "Afternoon wildlife as animals emerge from rest",
      "Comprehensive ecosystem observation"
    ],

    experienceHighlights: [
      "Gourmet breakfast or lunch in scenic wilderness location",
      "White linen table setup with elegant presentation",
      "Premium menu featuring Sri Lankan and international cuisine",
      "Wine or champagne service (or non-alcoholic alternatives)",
      "Fresh, organic, locally-sourced ingredients",
      "Exclusive picnic locations not accessible to standard safaris",
      "Luxury vehicle with enhanced comfort features",
      "Elite tracker provides full-service experience",
      "Photography opportunities of picnic setup with wildlife backdrop",
      "Leisurely pace combining adventure with relaxation",
      "Perfect for celebrations and special occasions",
      "Dietary customization (vegetarian, vegan, allergies accommodated)",
      "Post-picnic safari continuation with fresh energy",
      "Complete privacy and personalized attention"
    ],

    itinerary: [
      {
        time: "5:30 AM",
        activity: "VIP Pickup",
        description: "Luxury vehicle collection from hotel with welcome refreshments. Discuss picnic preferences, wildlife priorities, and special requests."
      },
      {
        time: "6:00 AM",
        activity: "Dawn Wildlife Exploration",
        description: "Enter park at first light for intensive wildlife viewing. Focus on leopards, elephants, and diverse species during peak morning activity."
      },
      {
        time: "7:30 AM",
        activity: "Continued Tracking & Photography",
        description: "Comprehensive territory coverage with extended stops at quality sightings. Build excitement for the adventure while working up an appetite."
      },
      {
        time: "9:00 AM",
        activity: "Journey to Picnic Location",
        description: "Navigate to pre-selected scenic spot. Arrive to find beautiful table setup prepared by support team with meal awaiting."
      },
      {
        time: "9:30 AM",
        activity: "Gourmet Wilderness Breakfast/Lunch",
        description: "Enjoy multi-course meal in spectacular natural setting. Savor Sri Lankan specialties, fresh fruits, artisan breads, and premium beverages. Wildlife viewing continues from dining position."
      },
      {
        time: "11:00 AM",
        activity: "Relaxation & Photography",
        description: "Leisurely period for digestion, photography of the picnic setup, and simply absorbing the wilderness atmosphere. Time to process morning's wildlife encounters."
      },
      {
        time: "11:30 AM",
        activity: "Post-Picnic Wildlife Continuation",
        description: "Resume safari with renewed energy. The park is quieter now - semi-exclusive access to territories as most other vehicles have departed."
      },
      {
        time: "12:30 PM",
        activity: "Final Territory Exploration",
        description: "Cover any remaining zones or return to productive locations from morning. Final photography opportunities and wildlife searches."
      },
      {
        time: "1:00 PM",
        activity: "Luxury Return Transfer",
        description: "Comfortable return to hotel with refreshing towels and beverages. Discuss highlights of the complete experience - wildlife, picnic, and unique moments."
      }
    ],

    vehicleStandards: [
      "Luxury safari vehicle with premium appointments",
      "Enhanced cushioned seating for extended comfort",
      "Climate control options where available",
      "Superior cleanliness and presentation",
      "Premium binoculars and field guides provided",
      "Cooler with chilled beverages throughout",
      "First-aid and comprehensive safety equipment",
      "Pop-up roof for optimal wildlife photography",
      "Maximum comfort for 7-hour experience"
    ],

    trackerStandards: [
      "Elite tracker with hospitality training",
      "Understanding of luxury service expectations",
      "Coordination with support team for picnic logistics",
      "Wildlife expertise combined with hosting skills",
      "Knowledge of exclusive picnic locations",
      "Multilingual capabilities",
      "Discretion and professionalism",
      "Ability to balance wildlife focus with picnic experience",
      "Commitment to creating memorable luxury adventure"
    ],

    photographyTips: [
      "Morning wildlife photography in optimal light",
      "Lifestyle photography of elegant picnic setup",
      "Wildlife backdrop behind dining scene creates unique images",
      "Birds often approach picnic area - close photo opportunities",
      "Capture the contrast of luxury in wilderness",
      "Family photos at picnic table with nature backdrop",
      "Proposal photographers - inform us in advance for coordination",
      "Post-picnic photography with different light and energy",
      "Both wildlife and experience photography opportunities",
      "Create complete photo story of the adventure"
    ],

    packingList: [
      "Camera equipment for wildlife and lifestyle photography",
      "Elegant casual clothing suitable for both safari and dining",
      "Light jacket or wrap (mornings cool, air-conditioned vehicle)",
      "Sun protection for outdoor dining",
      "Personal items and medications",
      "Sunglasses and hat",
      "Comfortable footwear for vehicle entry/exit",
      "Small bag for personal belongings",
      "Any special celebration items (birthday candles, etc.)",
      "Binoculars (premium ones provided)"
    ],

    responsibleTourism: [
      "All picnic waste completely removed - zero environmental impact",
      "Biodegradable and eco-friendly materials used",
      "Picnic locations selected to minimize wildlife disturbance",
      "Support local food suppliers and organic farmers",
      "Premium pricing contributes significantly to conservation",
      "Employment of local staff and guides",
      "Luxury experience demonstrates sustainable high-value tourism",
      "Educational component on conservation remains present",
      "Respect for park regulations and wildlife",
      "Model of how tourism can support rather than harm ecosystems"
    ],

    faqs: [
      {
        question: "Where exactly is the picnic served?",
        answer: "Location varies based on conditions, but always at spectacular scenic spots within park boundaries - perhaps overlooking lagoons, near waterholes, or at vista points. Your tracker selects the best option on the day considering safety, wildlife activity, weather, and park regulations. All locations are carefully vetted for both beauty and appropriate wildlife viewing."
      },
      {
        question: "What if there's bad weather during the picnic?",
        answer: "We monitor conditions closely. If rain is likely, we have contingency locations with natural shelter. In extreme weather, we can modify timing or relocate picnic to a comfortable lodge facility immediately after safari while maintaining the gourmet meal quality. Flexibility ensures you have a wonderful experience regardless of conditions."
      },
      {
        question: "Can we customize the menu?",
        answer: "Absolutely! When booking, indicate preferences, dietary restrictions, allergies, or special requests. We accommodate vegetarian, vegan, gluten-free, and other requirements. Menu features Sri Lankan specialties but international options available. For celebrations, we can include special elements like birthday cake. Advance notice (2-3 days) ensures perfect customization."
      },
      {
        question: "Is this suitable for children?",
        answer: "Yes! Families love this experience. Children enjoy the adventure of dining in the wilderness with wildlife nearby. The leisurely pace works well for kids. However, safari etiquette still applies - quiet behavior required during animal encounters. Child pricing reflects reduced portion sizes while maintaining same quality."
      },
      {
        question: "Can we book this for special occasions like proposals?",
        answer: "Perfect for proposals, anniversaries, honeymoons, or celebrations! Inform us in advance and we'll add special touches - decorations, champagne upgrade, photography coordination, surprise elements. We've facilitated many proposals and would be honored to help create your perfect moment. Complete discretion maintained."
      },
      {
        question: "How does wildlife viewing compare to standard safaris?",
        answer: "You receive equal or better wildlife viewing due to the 7-hour duration and elite tracker. The picnic adds luxury without reducing safari quality. In fact, many guests report better sightings because the extended time and midday presence provide opportunities standard safaris miss. You're simply adding gourmet dining to an already excellent wildlife experience."
      }
    ]
  },

  // ========================================
  // 7-HOUR HALF-DAY SAFARI - SUBCATEGORY 4
  // ========================================
  {
    slug: "family-adventure-half-day-safari",
    category: "Private All-Inclusive 7-Hour Half-Day Safari",
    title: "Family Adventure Safari with Educational Program",
    shortDescription: "Interactive 7-hour safari designed for families with children, featuring wildlife education activities, junior ranger program, and family-friendly pacing.",
    duration: "7 Hours",
    startingPrice: 140,
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1600&q=80",
    
    overview: `Introducing children to wildlife and nature creates memories and values that last a lifetime. The Family Adventure Safari is thoughtfully designed to engage, educate, and excite young explorers while providing parents with a stress-free, enriching experience in Yala National Park. This isn't just a safari adapted for kids - it's a comprehensive family adventure program that makes wildlife education fun and accessible.

Understanding that children experience safaris differently than adults, we've created a structure that maintains excitement throughout the 7-hour journey. The extended timeframe allows for flexible pacing - when kids are energized and engaged, we maximize wildlife viewing; when attention wanes, we incorporate educational activities, games, and strategic breaks. This rhythm ensures children remain excited and parents stay relaxed.

Your family guide is specially trained in working with children of various ages. They're skilled at explaining complex ecology in kid-friendly ways, answering endless questions with patience, spotting details children might miss, and maintaining enthusiasm even during quieter wildlife periods. They transform the safari into an interactive learning adventure where kids become junior wildlife scientists rather than passive observers.

The Junior Ranger Program is a highlight of this experience. Children receive a special kit including activity booklet, wildlife identification cards, observation journal, and even a certificate upon completion. Throughout the safari, they collect "safari badges" for accomplishments - spotting specific animals, identifying bird calls, understanding animal tracks, learning conservation facts, and demonstrating good safari behavior. This gamification keeps kids engaged and creates a sense of achievement.

Educational activities are woven seamlessly into the safari experience. When searching for leopards, your guide explains tracking techniques and lets kids help look for clues. At waterholes, children learn about ecosystem interdependence by observing how different species interact. During the mid-safari break, interactive games teach concepts like food chains, adaptation, and habitat needs. These activities transform abstract concepts into tangible understanding through direct observation.

The 7-hour duration benefits families in several ways. First, it justifies the early wake-up call that parents know will make kids grumpy - the extensive adventure makes it worthwhile. Second, it allows for strategic breaks so children can stretch, snack, use facilities (at designated areas), and reset their attention spans. Third, the comprehensive coverage means you're likely to see diverse animals which maintains kids' interest. Finally, parents get value for money - a single safari replaces needing multiple shorter trips.

Safety and comfort are prioritized throughout. The vehicle is equipped with child-friendly features and safety equipment. We maintain appropriate distances from animals even when kids want to get closer. Guides manage the balance between education and protection, ensuring children stay safe while having authentic wildlife experiences. Snacks and drinks are available throughout, addressing the constant childhood need for refreshments.

This safari works for children aged 5-15, though younger or older family members are welcome. Content and activities adapt to the age range present. Teenagers appreciate the real wildlife science while younger children enjoy the adventure story approach. Parents often find themselves learning as much as their kids through the engaging educational style.

The package includes all standard safari elements - park fees, elite family safari guide, driver, insurance, vehicle - plus special additions: Junior Ranger activity kits for children, age-appropriate educational materials, strategic snacks and refreshments, interactive games and activities, wildlife identification tools, and completion certificates. Most importantly, it includes the peace of mind that your family's safari has been designed by experts who understand both wildlife and child development.

By the end of 7 hours, children emerge as junior wildlife experts, excited about conservation and bursting with stories to share. Parents have both spectacular wildlife photographs and precious images of their children's wonder-filled faces. The family has shared an authentic adventure that strengthened bonds while creating environmental awareness. This is education disguised as adventure - the most effective kind.`,

    pricingTiers: [
      { groupSize: "2 Persons (2 Adults)", pricePerPerson: 180, childPrice: 45, infantPrice: 0 },
      { groupSize: "3 Persons (2A+1C)", pricePerPerson: 165, childPrice: 45, infantPrice: 0 },
      { groupSize: "4 Persons (2A+2C)", pricePerPerson: 140, childPrice: 45, infantPrice: 0 },
      { groupSize: "5 Persons (2A+3C)", pricePerPerson: 130, childPrice: 45, infantPrice: 0 },
      { groupSize: "6 Persons (Family)", pricePerPerson: 120, childPrice: 45, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards - kids love big cats!",
      "Baby elephants and family herds demonstrating social bonds",
      "Monkeys with playful behaviors children relate to",
      "Crocodiles - fascinating reptiles for young minds",
      "Colorful birds for identification practice",
      "Deer species - accessible wildlife for first observations",
      "Water buffalo herds showing group living",
      "Smaller creatures often overlooked - insects, lizards, etc."
    ],

    experienceHighlights: [
      "Family guide specially trained for children",
      "Junior Ranger Program with activity kits",
      "Educational games and interactive activities",
      "Wildlife identification challenges for kids",
      "Animal tracking lessons - kids become detectives",
      "Conservation education in accessible language",
      "Flexible pacing accommodating children's attention spans",
      "Strategic breaks for snacks, stretching, activities",
      "Safari achievement badges for kids",
      "Completion certificate for junior rangers",
      "Family photo opportunities throughout",
      "Age-appropriate content adaptation",
      "Stress-free experience for parents",
      "7 hours creates comprehensive adventure value"
    ],

    itinerary: [
      {
        time: "5:30 AM",
        activity: "Family Pickup & Junior Ranger Welcome",
        description: "Collection from hotel (early but exciting!). Kids receive Junior Ranger kits and introduction to the adventure ahead. First activity: sunrise prediction game."
      },
      {
        time: "6:00 AM",
        activity: "Park Entry & Morning Mission",
        description: "Enter park as team of junior wildlife scientists. First challenge: spot the first animal and identify it using cards. Begin wildlife observations with child-friendly explanations."
      },
      {
        time: "7:00 AM",
        activity: "Big Cat Tracking Adventure",
        description: "Search for leopards with kids helping look for clues. Learn about predators, tracking, and adaptation. If leopard found - major excitement and badge earned!"
      },
      {
        time: "8:00 AM",
        activity: "Elephant Family Studies",
        description: "Observe elephant herds with focus on babies and family bonds. Discuss elephant communication, intelligence, and conservation. Kids learn trunk functions through games."
      },
      {
        time: "9:30 AM",
        activity: "Mid-Safari Break & Activities",
        description: "Strategic stop for snacks, bathroom break (designated area), stretching, and interactive educational games. Food chain activity, animal sounds guessing game, etc."
      },
      {
        time: "10:30 AM",
        activity: "Bird & Small Creature Discovery",
        description: "Shift focus to birds and smaller animals often overlooked. Kids practice binocular use, bird identification, and observation skills. Each new species adds to their achievement list."
      },
      {
        time: "11:30 AM",
        activity: "Habitat Explorer Challenge",
        description: "Visit different habitats (wetland, forest, grassland) comparing wildlife in each. Kids complete habitat matching activities in journals. Understand ecosystem diversity."
      },
      {
        time: "12:15 PM",
        activity: "Final Adventure Push",
        description: "Last wildlife search based on kids' wish lists. Any remaining target animals for badges? Final observations and photo opportunities."
      },
      {
        time: "12:45 PM",
        activity: "Junior Ranger Graduation",
        description: "Return journey with badge counting, certificate presentation, and celebration of kids' achievements. Review favorite moments. Share family's best wildlife stories."
      }
    ],

    vehicleStandards: [
      "Family-friendly safari vehicle with safety features",
      "Comfortable seating with kid-sized accessibility",
      "Cooler with drinks and snacks throughout",
      "First-aid kit with children's supplies",
      "Binoculars suitable for children",
      "Educational materials and activity supplies",
      "Shade and protection from elements",
      "Clean and well-maintained presentation",
      "Strategic positioning for child viewing"
    ],

    trackerStandards: [
      "Specialized family safari guide training",
      "Experience working with children (ages 5-15)",
      "Educational background in wildlife or teaching",
      "Patience and enthusiasm with young learners",
      "Ability to adapt content to different age levels",
      "Skill in maintaining engagement during quiet periods",
      "Child safety awareness and management",
      "Fun personality that connects with kids",
      "Conservation passion that inspires youth"
    ],

    photographyTips: [
      "Focus on photographing children's reactions - priceless!",
      "Capture kids using binoculars, writing in journals, pointing excitedly",
      "Family photos at various safari moments",
      "Kids with wildlife in background",
      "Junior Ranger certificate presentation photos",
      "Guide helps with family group shots",
      "Wildlife photography as usual, but don't miss the family moments",
      "These photos become treasured family memories"
    ],

    packingList: [
      "Camera for both wildlife and family moments",
      "Comfortable clothing for children (layers)",
      "Extra snacks children enjoy (provided but bring favorites)",
      "Refillable water bottles for kids",
      "Sunscreen and hats for children",
      "Insect repellent (child-safe)",
      "Any necessary medications",
      "Small backpack for children's items",
      "Wet wipes and tissues",
      "Entertainment for very quiet periods (optional)",
      "Change of clothes for young children (optional)",
      "Binoculars if kids have their own"
    ],

    responsibleTourism: [
      "Teaching next generation environmental stewardship",
      "Conservation education creates lifelong values",
      "Respect for wildlife modeled for children",
      "Understanding of human impact on ecosystems",
      "Age-appropriate discussion of conservation challenges",
      "Empowering children as future conservation advocates",
      "Zero waste practices demonstrated to kids",
      "Supporting local communities through employment",
      "Park fees contribute to habitat protection",
      "Creating positive wildlife experiences builds environmental connection"
    ],

    faqs: [
      {
        question: "What's the best age range for this safari?",
        answer: "Designed primarily for ages 5-15, but we accommodate younger and older family members. Children under 5 can participate (infant pricing) but might not engage with all activities. Content adapts to age range present - simpler for younger kids, more scientific for teens. Most families find 6-12 the sweet spot for maximum engagement."
      },
      {
        question: "Is 7 hours too long for children?",
        answer: "Our experience shows 7 hours works well with proper pacing and activities. The flexible structure includes strategic breaks, varied activities, and engaging educational components that maintain interest. Children rarely complain about length due to constant stimulation. However, if you have very young children (under 5) or concerns about attention span, consider our 4-hour family option."
      },
      {
        question: "What if children get scared of animals?",
        answer: "Our family guides are experts at managing children's fears, explaining safety measures, and building confidence gradually. We maintain safe distances always. Most initial fear transforms to excitement quickly. For very nervous children, the guide adjusts approach, starts with smaller animals, and builds comfort progressively. Safety is paramount."
      },
      {
        question: "Do kids really learn or is it just entertainment?",
        answer: "Both! Education through adventure is highly effective. Children absorb concepts about ecology, conservation, animal behavior, and environmental science through direct observation and interactive activities. The Junior Ranger program ensures structured learning. Parents consistently report kids sharing safari facts weeks later and expressing new environmental awareness."
      },
      {
        question: "What if kids don't like wildlife or aren't interested?",
        answer: "Rare! Even initially uninterested children usually become engaged through the guide's enthusiasm and interactive approach. However, the 7-hour safari works better for families where kids have at least moderate interest in animals or nature. For truly reluctant children, shorter safaris might be more appropriate."
      },
      {
        question: "Can teenagers enjoy this or is it too childish?",
        answer: "Teens absolutely enjoy this experience! Content adapts to their level - more scientific approach, genuine wildlife tracking, real conservation challenges, photography focus. Many teenagers prefer this to standard safaris because the guide engages them as junior scientists rather than tourists. Mixed-age families work well as content scales to all levels."
      }
    ]
  },

  // ========================================
  // FULL-DAY SAFARI - SUBCATEGORY 1
  // ========================================
  {
    slug: "ultimate-full-day-safari",
    category: "Private All-Inclusive Full-Day Safari",
    title: "Ultimate Full-Day Wildlife Safari",
    shortDescription: "Complete 12-hour immersive safari experience from dawn to dusk. Includes breakfast, lunch, and comprehensive coverage of all Yala zones for maximum wildlife encounters.",
    duration: "12 Hours",
    startingPrice: 165,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
    
    overview: `The Ultimate Full-Day Wildlife Safari represents the most comprehensive way to experience Yala National Park. Spanning a full 12 hours from pre-dawn through sunset, this immersive journey allows you to witness the complete daily cycle of wilderness life, observe wildlife during all activity periods, and explore every accessible zone within this incredible ecosystem.

For serious wildlife enthusiasts, photographers, and those who want to maximize their chances of extraordinary encounters, the full-day safari is unparalleled. While shorter safaris offer glimpses of Yala's wildlife, this extended experience provides deep immersion - you become part of the park's rhythm rather than a brief visitor. You'll witness the morning awakening, the midday lull, the afternoon revival, and the evening transition, each period offering unique wildlife behaviors and photographic opportunities.

The 12-hour timeframe solves several challenges faced by shorter safaris. First, you have ample time to track elusive species like leopards without pressure. If one territory proves unproductive, you can systematically check multiple areas. Second, you access the most remote zones of the park - places requiring 2-3 hours of driving from entrances that shorter safaris simply cannot reach. These distant territories often harbor wildlife that sees fewer vehicles and behaves more naturally.

Third, the full day allows for patient observation. When you encounter compelling subjects - a leopard hunt, an elephant family's social dynamics, a sloth bear foraging - you can stay and watch complete behavioral sequences rather than rushing to the next sighting. This transforms wildlife viewing from collecting species checkmarks into understanding animal lives and ecosystems.

Your expert tracker understands how to structure the full day for maximum productivity. The journey typically begins in prime leopard territories during the magical dawn period. As morning progresses, you cover extensive ground checking multiple zones and habitat types. The midday period, when most other safari vehicles have departed, provides semi-exclusive access - often the best time for disturbance-free photography and observation of species at water sources.

After a leisurely lunch break at a designated area (provided meal), the safari continues into afternoon and evening. The golden hour photography opportunities are exceptional, and you're present for the fascinating transition as diurnal species retire and crepuscular animals emerge. Sunset viewing from within the park, something impossible on shorter safaris, creates unforgettable moments.

This all-inclusive package provides everything needed for a full day in the wilderness: park entrance fees for extended hours, elite tracker and driver team, breakfast and lunch meals, unlimited refreshments and water, comprehensive insurance, binoculars and field guides, strategic rest breaks, and flexible pacing that adapts to wildlife activity and your interests. By day's end, you'll have experienced Yala on a level that few visitors ever achieve.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 325, childPrice: 55, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 220, childPrice: 55, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 165, childPrice: 55, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 145, childPrice: 55, infantPrice: 0 },
      { groupSize: "5 Persons", pricePerPerson: 132, childPrice: 55, infantPrice: 0 },
      { groupSize: "6 Persons", pricePerPerson: 122, childPrice: 55, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Multiple leopard encounters across different territories highly probable",
      "Elephant herds observed during various daily activities",
      "Sloth bears foraging in morning and late afternoon",
      "All three 'big animals' (leopard, elephant, sloth bear) possible in one day",
      "150+ bird species possible over 12 hours",
      "Complete behavioral sequences observed",
      "Water buffalo, deer, wild boar in all activity states",
      "Crocodiles and aquatic reptiles throughout day",
      "Jackals, mongoose, and smaller mammals",
      "Dawn and dusk transitional wildlife behaviors"
    ],

    experienceHighlights: [
      "12 full hours of wilderness immersion",
      "Complete daily wildlife cycle observation",
      "Access to remote zones unreachable on shorter safaris",
      "Breakfast and lunch meals included",
      "Both dawn and dusk golden hours captured",
      "Extended time eliminates pressure and rushing",
      "Semi-exclusive access during midday hours",
      "Complete park coverage across all accessible zones",
      "Patient observation of extended behaviors",
      "Highest probability of rare and exceptional sightings",
      "Professional wildlife tracking throughout",
      "Sunset within the park experience"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Pre-Dawn Pickup & Light Breakfast",
        description: "Early collection with light breakfast items (coffee, tea, pastries). Brief strategy discussion for the full day ahead. Equipment check and preparation."
      },
      {
        time: "5:30 AM",
        activity: "Dawn Entry & First Light",
        description: "Enter park as gates open. Experience the magical transition from darkness to dawn. Focus on prime leopard territories during peak activity."
      },
      {
        time: "6:00 AM - 9:00 AM",
        activity: "Morning Intensive Wildlife Search",
        description: "Comprehensive morning safari covering multiple zones and habitats. Extended stops at quality sightings. Focus on big cats, elephants, and diverse species during optimal morning activity."
      },
      {
        time: "9:00 AM - 10:30 AM",
        activity: "Remote Zone Exploration",
        description: "Journey to distant territories requiring extended travel time. These zones see fewer visitors and often harbor relaxed wildlife populations."
      },
      {
        time: "10:30 AM - 11:30 AM",
        activity: "Breakfast Break",
        description: "Substantial breakfast at designated area or scenic location. Provided meal includes eggs, bread, fruit, and hot beverages. Time to rest, stretch, and process morning experiences."
      },
      {
        time: "11:30 AM - 1:00 PM",
        activity: "Midday Wildlife Observation",
        description: "Continue exploration during quiet midday period. Focus on water sources, shade areas, and species active in warmer hours. Semi-exclusive access as morning safari crowds have departed."
      },
      {
        time: "1:00 PM - 2:00 PM",
        activity: "Lunch Break",
        description: "Leisurely lunch with provided meal (rice, curry, accompaniments, drinks). Significant rest period in shade. Review morning highlights and plan afternoon strategy."
      },
      {
        time: "2:00 PM - 4:00 PM",
        activity: "Afternoon Territory Coverage",
        description: "Resume safari with focus on zones not yet covered. As temperature cools, wildlife activity increases. Check elephant congregation areas and leopard territories."
      },
      {
        time: "4:00 PM - 5:30 PM",
        activity: "Golden Hour Photography",
        description: "Position in prime locations for stunning afternoon light. Wildlife activity peaks as day cools. Exceptional photography opportunities with warm, directional light."
      },
      {
        time: "5:30 PM - 6:00 PM",
        activity: "Sunset Experience",
        description: "Sunset viewing from within park at strategic location. Final wildlife observations as diurnal species retire and crepuscular animals emerge. Unforgettable conclusion to full day."
      },
      {
        time: "6:00 PM - 6:30 PM",
        activity: "Exit & Return Transfer",
        description: "Park exit at closing time. Return journey to hotel with discussion of the day's extraordinary experiences. Review highlight moments and compare comprehensive sightings list."
      }
    ],

    vehicleStandards: [
      "4x4 Safari Jeep designed for all-day comfort",
      "Premium cushioned seating for 12-hour journey",
      "Pop-up roof for continuous viewing access",
      "Comprehensive first-aid and emergency equipment",
      "Large cooler with unlimited refreshments",
      "Sun protection and weather covers",
      "Binoculars and comprehensive field guides",
      "Regular maintenance for full-day reliability",
      "Strategic positioning capability all day"
    ],

    trackerStandards: [
      "Elite tracker with exceptional stamina and focus (20+ years experience)",
      "Expertise across all time periods and conditions",
      "Knowledge of complete park geography including remote zones",
      "Understanding of time-specific wildlife patterns",
      "Radio network connections for coordinated tracking",
      "Meal coordination and logistics management",
      "First aid and comprehensive emergency training",
      "Passionate about delivering ultimate wildlife experiences",
      "Multilingual capabilities for diverse guests"
    ],

    photographyTips: [
      "12 hours provides every lighting condition imaginable",
      "Dawn soft light for classic wildlife portraits",
      "Harsh midday light for high-contrast drama",
      "Golden hour in both morning and evening",
      "Sunset silhouettes and colorful sky backdrops",
      "Time to photograph same species in different conditions",
      "Behavioral sequence photography over extended periods",
      "Bring 8+ spare batteries minimum",
      "Multiple large memory cards essential (128GB+ total)",
      "Remote zones offer undisturbed subject behavior",
      "Extended sightings allow waiting for perfect moments",
      "Experimentation time with techniques and settings",
      "Both wildlife and landscape photography opportunities",
      "Document the complete daily cycle through images"
    ],

    packingList: [
      "Camera equipment with extensive backup batteries",
      "Multiple memory cards (you'll shoot thousands of frames)",
      "Layered clothing for temperature variations",
      "Sun protection - hat, sunscreen, sunglasses",
      "Personal snacks (meals provided but bring favorites)",
      "Large refillable water bottle",
      "Insect repellent",
      "Comfortable cushion or seat pad recommended",
      "Personal medications",
      "Light jacket for air-conditioned vehicle",
      "Wet wipes and hand sanitizer",
      "Book or entertainment for meal breaks",
      "Portable phone/camera charger",
      "Binoculars (provided but bring if preferred)",
      "Notebook for observation recording"
    ],

    responsibleTourism: [
      "12-hour presence requires exemplary responsible behavior",
      "Maintain silence during all wildlife encounters",
      "Absolutely no feeding or disturbing animals",
      "Stay in vehicle except designated break areas",
      "Zero littering throughout entire day",
      "Respect all park boundaries and regulations",
      "Substantial fees support extensive park conservation",
      "Extended observation promotes deeper conservation understanding",
      "Educational approach throughout full experience",
      "Local guide employment and community support",
      "Sustainable full-day safari practices modeled",
      "Contribution to habitat protection and wildlife management"
    ],

    faqs: [
      {
        question: "Is 12 hours too exhausting?",
        answer: "Not with proper breaks! We include substantial breakfast and lunch stops for rest and stretching. The vehicle is designed for all-day comfort. Most guests find time passes quickly due to continuous wildlife activity and varied experiences. By day's end, you're satisfied and fulfilled rather than exhausted. However, it requires reasonable fitness and genuine interest in wildlife."
      },
      {
        question: "What meals are included?",
        answer: "Substantial breakfast (eggs, bread, fruit, hot beverages) around 10:30 AM and full lunch (rice, curry, accompaniments, drinks) around 1 PM. Both are freshly prepared and include vegetarian options. Unlimited water, tea, coffee, and snacks throughout the day. If you have dietary restrictions, inform us when booking for menu customization."
      },
      {
        question: "Are full-day safaris better than doing separate morning and afternoon safaris?",
        answer: "Different advantages. Full-day offers: better value per hour, continuous tracking that builds on observations, access to remote zones, no lost transition time, and experiencing complete daily cycle. Separate safaris offer: rest between trips, different trackers' perspectives, and breaks at accommodation. For maximum wildlife encounters and deep immersion, full-day is superior."
      },
      {
        question: "What's the leopard sighting probability?",
        answer: "Very high - 85-95% success rate due to extended time in prime territories. Many guests see 3-5 different leopards across various locations. The 12 hours allows systematic territory checking and patient tracking impossible in shorter safaris. While never guaranteed, odds are strongly in your favor."
      },
      {
        question: "Can children participate?",
        answer: "Children 8+ with genuine wildlife interest generally do well. The breaks help maintain engagement. Younger children (5-7) can participate but parents should assess their patience level carefully. We've hosted successful family full-day safaris, but it works best when kids are truly excited about wildlife rather than just tolerating it."
      },
      {
        question: "Can we customize focus areas?",
        answer: "Yes! Discuss priorities with your tracker at start - leopards, elephants, birds, photography, specific behaviors, etc. The 12-hour timeframe allows both comprehensive coverage AND emphasis on your interests. Your tracker adapts route and time allocation accordingly while ensuring you experience the complete park."
      }
    ]
  },

  // ========================================
  // FULL-DAY SAFARI - SUBCATEGORY 2
  // ========================================
  {
    slug: "big-three-safari-expedition",
    category: "Private All-Inclusive Full-Day Safari",
    title: "Big Three Safari Expedition",
    shortDescription: "Specialized full-day safari dedicated to encountering Yala's 'Big Three' - leopards, elephants, and sloth bears. Maximum success rate with expert tracking.",
    duration: "12 Hours",
    startingPrice: 185,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80",
    
    overview: `Yala National Park is one of the few places on Earth where you can realistically encounter three major wildlife species in a single day - the Sri Lankan leopard, Asian elephant, and sloth bear. The Big Three Safari Expedition is meticulously designed to maximize your probability of this extraordinary triple achievement while providing deep education about each species.

This isn't simply a safari hoping to see these animals - it's a strategic expedition with a single-minded mission. Your specialized tracker has extensive experience with all three species, understands their territories, behavior patterns, and optimal observation times. The 12-hour timeframe is crucial because these species peak at different times: leopards in early morning and late afternoon, elephants mid-morning through midday at water sources, and sloth bears mid-morning and evening during termite foraging.

The expedition follows a carefully planned sequence. Dawn focus is leopard territories - systematic checking of rocky outcrops, known resting areas, and territorial boundaries during peak feline activity. As morning progresses and leopard sightings achieved, attention shifts to elephant congregation zones. By mid-morning, herds gather at waterholes for drinking and bathing - perfect for extended elephant observation while simultaneously watching for sloth bears that often visit the same areas.

Sloth bears are perhaps the most challenging of the three due to their solitary, unpredictable nature. However, the full-day timeframe and expert tracking dramatically increase success odds. Your guide knows productive sloth bear zones, understands seasonal food availability (fruiting trees, termite mounds), and maintains radio contact for reported sightings. The systematic territory coverage ensures you check all high-probability locations.

What makes this expedition special is not just seeing all three species, but understanding them. Throughout the day, your tracker provides comprehensive education on each animal - ecology, behavior, conservation challenges, and their roles in the ecosystem. You'll learn to identify individual leopards by spot patterns, understand elephant family structures and communication, and recognize sloth bear behaviors and adaptations.

The full day also allows for quality rather than just ticking boxes. When you encounter each species, time is allocated for extended observation and photography. Watch leopard territorial behaviors, observe elephant social dynamics, understand sloth bear foraging techniques. These aren't brief glimpses but meaningful wildlife experiences that create deep appreciation and memorable photographs.

Success rates for the Big Three in a single full-day safari exceed 70% - remarkable considering sloth bears' elusive nature. While we never guarantee wildlife, the combination of Yala's exceptional wildlife density, the 12-hour timeframe, expert tracking, and strategic planning creates the highest possible probability. Even if all three aren't encountered, the focused tracking typically yields multiple exceptional sightings of at least two species.

This all-inclusive package includes park fees, Big Three specialist tracker, driver, comprehensive insurance, breakfast and lunch meals, unlimited refreshments, detailed briefing on each species, Big Three achievement certificate (if successful), and strategic planning to optimize encounter probability. For wildlife enthusiasts seeking Africa's "Big Five" equivalent in Asia, this is your safari.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 365, childPrice: 65, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 245, childPrice: 65, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 185, childPrice: 65, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 165, childPrice: 65, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Sri Lankan Leopard - world's highest density location",
      "Asian Elephant herds in natural family groups",
      "Sloth Bear - one of best viewing locations globally",
      "Extended observation of all three species",
      "Multiple individuals of each species possible",
      "Behavioral observation beyond just sightings",
      "Cubs/calves of all species (season dependent)",
      "Predator-prey dynamics observation",
      "Complete ecological context understanding",
      "70%+ success rate for all three in one day"
    ],

    experienceHighlights: [
      "Specialized Big Three expert tracker",
      "Strategic mission-focused approach",
      "Time-optimized sequencing for each species",
      "Extended observation when species located",
      "Educational deep-dive on each animal",
      "Maximum 4 guests for optimal tracking flexibility",
      "Radio network for species intelligence",
      "Achievement certificate if Big Three successful",
      "Comprehensive species briefing materials",
      "Photography support for all three species",
      "12 hours dedicated to this unique mission",
      "Highest probability expedition design"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Mission Briefing & Strategy",
        description: "Collection with detailed Big Three expedition briefing. Review recent sightings, discuss each species' patterns, and outline strategic approach. Receive species identification materials."
      },
      {
        time: "5:30 AM - 8:30 AM",
        activity: "Leopard Tracking Phase",
        description: "Intensive focus on prime leopard territories during peak morning activity. Systematic territory checks, sign reading, and strategic positioning. Extended observation when leopards located."
      },
      {
        time: "8:30 AM - 10:30 AM",
        activity: "Elephant Congregation Focus",
        description: "Shift to elephant zones as herds move toward water sources. Visit key waterholes and lagoons. Extended elephant behavior observation while simultaneously watching for sloth bears."
      },
      {
        time: "10:30 AM - 11:30 AM",
        activity: "Breakfast Break & Status Review",
        description: "Substantial breakfast with review of species encountered so far. Adjust afternoon strategy based on morning success. Discuss behaviors observed and species still targeted."
      },
      {
        time: "11:30 AM - 1:00 PM",
        activity: "Sloth Bear Territory Search",
        description: "Focus on productive sloth bear locations - fruiting tree areas, termite mound zones, water source edges. Patient searching and sign interpretation. Radio coordination for reported sightings."
      },
      {
        time: "1:00 PM - 2:00 PM",
        activity: "Lunch Break",
        description: "Midday meal and significant rest. Discuss conservation challenges facing each species. Review photography so far and plan afternoon priorities."
      },
      {
        time: "2:00 PM - 4:00 PM",
        activity: "Comprehensive Territory Coverage",
        description: "Systematic exploration of any remaining priority zones. Fill gaps in species list. Respond to radio intelligence. Check territories for species not yet encountered."
      },
      {
        time: "4:00 PM - 5:30 PM",
        activity: "Evening Peak Activity",
        description: "Return to high-priority areas during afternoon activity surge. Final leopard tracking, sloth bear foraging areas, elephant bathing observation. Golden hour photography of any species."
      },
      {
        time: "5:30 PM - 6:00 PM",
        activity: "Sunset & Final Sweep",
        description: "Last opportunity for missing species. Sunset viewing and final wildlife observations. Celebrate successful Big Three if achieved!"
      },
      {
        time: "6:00 PM - 6:30 PM",
        activity: "Expedition Debrief & Certificate",
        description: "Return journey with detailed discussion of behaviors observed. Certificate presentation if Big Three achieved. Review conservation importance of each species."
      }
    ],

    vehicleStandards: [
      "4x4 optimized for tracking versatility",
      "Maximum 4 passengers for rapid repositioning",
      "Enhanced comfort for 12-hour expedition",
      "Communication equipment for species intelligence",
      "Quick maneuverability for following animals",
      "Comprehensive safety equipment",
      "Cooler with refreshments throughout",
      "Pop-up roof for optimal viewing",
      "Strategic positioning for all three species"
    ],

    trackerStandards: [
      "Elite Big Three specialist (25+ years experience)",
      "Expert in leopard, elephant, and sloth bear ecology",
      "Recognition of individual animals across species",
      "Understanding of species interactions and territories",
      "Master of sign reading for all three animals",
      "Radio network specialist for species reports",
      "Passionate about Big Three achievement",
      "Educational communicator on species conservation",
      "Strategic planning and flexible adaptation",
      "Photography support for all species"
    ],

    photographyTips: [
      "Different techniques needed for each species",
      "Leopards: fast shutter (1/1000s+), continuous AF, burst mode",
      "Elephants: slower acceptable (1/500s), capture interactions",
      "Sloth bears: be ready instantly - unpredictable movements",
      "All three: focus on eyes, capture behavior not just portraits",
      "Extended time allows multiple compositions per species",
      "Document species interactions when fortunate",
      "Environmental shots show habitat context",
      "Bring extensive battery and memory card capacity",
      "Different lighting challenges across 12 hours",
      "Patience for perfect behavioral moments",
      "Trophy shots documenting Big Three achievement"
    ],

    packingList: [
      "Professional camera equipment (DSLR/mirrorless)",
      "Telephoto lens 300-600mm range",
      "Multiple spare batteries (8+)",
      "Large memory cards (128GB+ total)",
      "Binoculars for distant spotting",
      "Species identification guides (provided)",
      "Layered comfortable clothing",
      "Sun protection comprehensive",
      "Insect repellent",
      "Personal snacks and water bottle",
      "Notebook for species checklist",
      "Portable charger for devices",
      "Patience and enthusiasm!",
      "Celebration items if Big Three achieved"
    ],

    responsibleTourism: [
      "Respect safe distances for all three species",
      "Never approach or disturb animals",
      "Absolute silence during sensitive encounters",
      "Understanding of conservation threats each faces",
      "Leopard: habitat loss, human conflict",
      "Elephant: human-elephant conflict, habitat fragmentation",
      "Sloth bear: habitat destruction, human encounters",
      "Premium fees support multi-species conservation",
      "Education promotes coexistence awareness",
      "Ethical tracking prioritizes animal welfare",
      "Support anti-poaching and protection efforts",
      "Scientific data from sightings aids research"
    ],

    faqs: [
      {
        question: "What's the realistic probability of seeing all three?",
        answer: "Approximately 70-75% success rate for complete Big Three in one full day. Leopards: 90%+, Elephants: 95%+, Sloth Bears: 75-80%. The combination is challenging due to sloth bears' elusive nature, but our strategic approach and 12-hour timeframe provide the highest possible odds. Most guests see at least two species even if all three aren't encountered."
      },
      {
        question: "What if we only see one or two species?",
        answer: "While disappointing, it happens with wild animals. However, the quality of encounters with species you do see typically exceeds standard safaris due to focused tracking and extended observation. Many guests prefer one exceptional leopard encounter over briefly checking boxes on three species. The expedition approach provides deeper understanding regardless of complete success."
      },
      {
        question: "Are sloth bears dangerous?",
        answer: "Sloth bears can be defensive if surprised at close range, but observation from safari vehicles is completely safe. Your tracker maintains appropriate distances and reads bear body language to ensure stress-free encounters. The vast majority of sloth bear sightings are peaceful observations of foraging or traveling bears that ignore vehicles."
      },
      {
        question: "Can we prioritize one species if we've already seen others?",
        answer: "Absolutely! If you've seen leopards on previous safaris, we can emphasize sloth bears and elephants. Discuss priorities with your tracker. The Big Three structure provides framework but adapts to your specific interests and previous experiences. Customization is encouraged."
      },
      {
        question: "What happens if we achieve Big Three early in the day?",
        answer: "Celebration! Then the safari continues for quality observation - returning to favorite encounters, seeking additional individuals, photography focus, or exploring other wildlife. The 12 hours ensures value regardless of when Big Three is completed. Many guests enjoy second encounters with species already seen."
      },
      {
        question: "Is this suitable for non-wildlife experts?",
        answer: "Absolutely! The Big Three concept is accessible to all enthusiasm levels. Your tracker provides comprehensive education making complex ecology understandable. First-time safari goers often prefer the focused mission structure over open-ended wildlife viewing. The sense of achievement when successful is universally appreciated."
      }
    ]
  },

  // ========================================
  // FULL-DAY SAFARI - SUBCATEGORY 3
  // ========================================
  {
    slug: "premium-luxury-full-day-safari",
    category: "Private All-Inclusive Full-Day Safari",
    title: "Premium Luxury Full-Day Safari with Private Chef",
    shortDescription: "Ultra-luxury 12-hour safari featuring private chef-prepared gourmet meals, premium vehicle, elite service, and exclusive wilderness dining experiences.",
    duration: "12 Hours",
    startingPrice: 295,
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1600&q=80",
    
    overview: `For discerning travelers who refuse to compromise between adventure and luxury, the Premium Luxury Full-Day Safari delivers an experience that rivals the finest wildlife lodges in Africa while capturing the authentic magic of Sri Lanka's premier national park. This isn't just a safari with added amenities - it's a complete redefinition of wilderness luxury.

From the moment of pickup in our luxury safari vehicle, every detail reflects premium standards. The vehicle itself is a custom-modified 4x4 featuring leather seating, climate control options, superior suspension, extended legroom, and amenities typically found in high-end automobiles rather than safari jeeps. Maximum occupancy is four guests, ensuring generous personal space and optimal viewing positions for everyone.

What distinguishes this experience most dramatically is the private chef component. Rather than standard packed meals, your breakfast and lunch are prepared fresh by an experienced chef using premium ingredients - organic produce from local farms, high-quality proteins, artisan breads, and gourmet touches. Meals are served on elegant portable dinnerware with white linens at exclusive locations within or adjacent to the park, transforming dining into memorable events rather than mere refueling stops.

Imagine this scenario: You've spent three hours photographing a magnificent leopard in perfect morning light. As your excitement settles, your tracker guides you to a scenic overlook where an elegant breakfast table has been prepared. Fresh tropical fruits, perfectly cooked eggs benedict or Sri Lankan breakfast specialties, artisan pastries, premium coffee and fresh juices await. As you dine in comfort, elephants move through the landscape below and countless birds provide the soundtrack. This is wilderness luxury at its finest.

The wildlife viewing component maintains the same elite standards. Your tracker is a senior specialist with decades of experience, chosen not just for wildlife expertise but for refined hospitality skills. They understand that luxury travelers expect both exceptional animal encounters and sophisticated service. They anticipate needs, provide insightful commentary, coordinate seamless logistics, and ensure your comfort throughout the 12-hour journey.

Throughout the day, premium amenities elevate the experience. Refreshing towels appear at strategic moments. Premium Zeiss or Swarovski binoculars are provided. High-quality field guides and reference materials are available. The cooler contains not just water but chilled premium beverages, fresh fruit, and gourmet snacks. Comfortable cushions enhance seating. Photography support includes bean bags, advice on settings, and assistance with equipment.

The luxury service extends to flexibility and personalization. Want to spend an extra hour with a particularly compelling leopard? No problem. Prefer to skip certain areas and focus on others? Easily accommodated. Need to adjust meal timing or menu? Simply request. This level of customization is impossible in standard safari formats but inherent to the luxury experience.

Yet despite all the luxury touches, this remains an authentic wilderness adventure. You'll navigate rough terrain, encounter wild animals in their natural habitat, experience the thrill of tracking elusive species, and absorb the raw beauty of Yala's ecosystems. The luxury elements enhance rather than diminish the safari experience - you return from encounters exhilarated rather than exhausted, you appreciate wildlife more deeply when comfortable, and you create sophisticated memories that blend adventure with refinement.

This package is ideal for honeymoons, milestone celebrations, luxury travel enthusiasts, or anyone who believes the finest travel experiences combine authentic adventure with uncompromising comfort. It's perfect for guests who've experienced standard safaris and now seek elevated wildlife tourism, or for those who simply expect the best in everything they do.

The all-inclusive package covers all park fees, elite senior tracker with luxury hospitality training, professional driver, luxury vehicle, private chef services, gourmet breakfast and lunch with premium ingredients, unlimited premium refreshments and beverages, comprehensive insurance, premium equipment (binoculars, field guides), photography assistance, and complete customization to your preferences. This is safari without compromise.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 595, childPrice: 195, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 395, childPrice: 195, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 295, childPrice: 195, infantPrice: 0 },
      { groupSize: "4 Persons (Maximum)", pricePerPerson: 265, childPrice: 195, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Extended leopard tracking with patient observation",
      "Elephant family dynamics and behaviors",
      "Sloth bear encounters when fortunate",
      "Comprehensive bird diversity (150+ species possible)",
      "All major Yala species with focus on quality encounters",
      "Extended behavioral observation sequences",
      "Remote territory access with minimal crowds",
      "Golden hour photography both morning and evening",
      "Complete daily wildlife cycle documentation",
      "Highest quality encounters rather than quantity focus"
    ],

    experienceHighlights: [
      "Luxury safari vehicle with premium appointments",
      "Maximum 4 guests for intimate experience",
      "Private chef preparing gourmet meals",
      "Elegant wilderness dining experiences",
      "Premium ingredients and refined presentation",
      "Elite senior tracker with hospitality expertise",
      "Complete flexibility and customization",
      "Premium equipment provided (Zeiss/Swarovski binoculars)",
      "Refreshing towels and comfort amenities throughout",
      "Unlimited premium refreshments and beverages",
      "Photography assistance and support",
      "Sophisticated service standards",
      "Perfect for special occasions and celebrations",
      "White-glove service in wilderness setting"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Luxury Pickup & Welcome",
        description: "Collection in premium vehicle with welcome refreshments and comfort amenities. Detailed consultation on preferences, wildlife priorities, and dietary requirements for the day."
      },
      {
        time: "5:30 AM - 9:00 AM",
        activity: "Dawn Wildlife Exploration",
        description: "Enter park for intensive morning wildlife viewing. Focus on leopards, elephants, and diverse species with extended stops at quality encounters. Your senior tracker provides sophisticated commentary."
      },
      {
        time: "9:00 AM - 10:00 AM",
        activity: "Remote Territory Access",
        description: "Journey to exclusive zones with minimal visitor presence. The luxury of time allows access to distant territories standard safaris never reach."
      },
      {
        time: "10:00 AM - 11:30 AM",
        activity: "Gourmet Wilderness Breakfast",
        description: "Arrive at exclusive scenic location where private chef has prepared elegant breakfast. Multi-course meal with white linen service, premium ingredients, and spectacular views. Leisurely dining pace."
      },
      {
        time: "11:30 AM - 1:00 PM",
        activity: "Midday Wildlife Continuation",
        description: "Resume exploration with focus on species and behaviors specific to midday. Semi-exclusive park access creates optimal conditions for disturbance-free observation."
      },
      {
        time: "1:00 PM - 2:30 PM",
        activity: "Executive Lunch Experience",
        description: "Gourmet lunch prepared by private chef at another exclusive location. Sri Lankan specialties and international options, all freshly prepared with premium ingredients. Extended break for relaxation."
      },
      {
        time: "2:30 PM - 4:30 PM",
        activity: "Afternoon Territory Exploration",
        description: "Continue comprehensive coverage of remaining priority zones. Flexible routing based on your interests and morning observations. Professional photography support as needed."
      },
      {
        time: "4:30 PM - 5:45 PM",
        activity: "Golden Hour Premium Experience",
        description: "Position in prime locations for spectacular afternoon light and increased wildlife activity. Extended photography sessions in optimal conditions."
      },
      {
        time: "5:45 PM - 6:15 PM",
        activity: "Sunset Champagne Service",
        description: "Sunset viewing with premium champagne or beverage of choice. Gourmet canapés served as day transitions to evening. Reflection on extraordinary day's experiences."
      },
      {
        time: "6:15 PM - 6:45 PM",
        activity: "Luxury Return Transfer",
        description: "Comfortable return with refreshing towels and beverages. Discuss day's highlights and review photography. Seamless transfer back to accommodation."
      }
    ],

    vehicleStandards: [
      "Custom luxury 4x4 with premium modifications",
      "Leather seating with extended legroom",
      "Climate control and superior suspension",
      "Maximum 4 guests for spacious comfort",
      "Advanced sound system (optional use)",
      "Refrigerated premium refreshment storage",
      "Pop-up roof with cushioned viewing positions",
      "Premium cleanliness and presentation",
      "All comfort and safety amenities",
      "Professional hospitality-focused operation"
    ],

    trackerStandards: [
      "Senior elite tracker (30+ years experience)",
      "Advanced wildlife expertise across all species",
      "Luxury hospitality training and refined service skills",
      "Multilingual capabilities (English, plus additional languages)",
      "Photography expertise and technical support",
      "Understanding of sophisticated traveler expectations",
      "Network connections for exclusive opportunities",
      "Discretion and professionalism",
      "Ability to balance wildlife focus with luxury service",
      "Commitment to delivering exceptional experiences"
    ],

    photographyTips: [
      "Senior tracker provides expert photography guidance",
      "Premium equipment support throughout day",
      "Assistance with camera settings and composition",
      "Extended time at subjects for perfect shots",
      "Both wildlife and luxury lifestyle photography opportunities",
      "Professional help with couple/group photos in wilderness",
      "Access to optimal positions and lighting",
      "Patience for behavioral moments",
      "Create complete photo story of luxury safari experience",
      "Post-safari image review and technique discussion available"
    ],

    packingList: [
      "Camera equipment (premium binoculars provided)",
      "Elegant comfortable safari attire",
      "Light layers for temperature variations",
      "Quality sunglasses and sun protection",
      "Personal items and medications",
      "Smartphone for quick photos and sharing",
      "Any celebration items (we can assist with surprises)",
      "Comfortable footwear for vehicle entry/exit",
      "Small personal bag for valuables",
      "Travel light - most needs provided"
    ],

    responsibleTourism: [
      "Luxury with zero environmental compromise",
      "All waste completely removed - zero trace policy",
      "Sustainable sourcing of all food products",
      "Premium pricing provides substantial conservation support",
      "Employment of elite local professionals",
      "Model of sustainable high-value tourism",
      "Education on conservation remains integral",
      "Support for community development programs",
      "Demonstration that luxury and responsibility coexist",
      "Contributing to park protection and research funding"
    ],

    faqs: [
      {
        question: "What justifies the premium price?",
        answer: "You receive: luxury vehicle with only 4 guests maximum, private chef preparing gourmet meals with premium ingredients, elite senior tracker with luxury hospitality training, premium equipment and amenities, complete customization and flexibility, elegant wilderness dining experiences, extended time at quality sightings, champagne service, and sophisticated end-to-end service. It's comprehensive luxury safari experience comparable to Africa's finest lodges."
      },
      {
        question: "How does wildlife viewing compare to standard safaris?",
        answer: "Equal or superior wildlife encounters. Your senior tracker is among Yala's most experienced. The 12-hour timeframe and flexible approach optimize sightings. Smaller group size (max 4) means better positioning. The luxury elements enhance rather than reduce wildlife quality - you observe more effectively when comfortable and unstressed."
      },
      {
        question: "Can meals accommodate dietary restrictions?",
        answer: "Absolutely! Private chef accommodates all dietary requirements - vegetarian, vegan, gluten-free, allergies, religious restrictions, or personal preferences. When booking, detail your requirements and preferences. The chef creates custom menus ensuring you enjoy every meal while meeting your needs."
      },
      {
        question: "Is this suitable for children?",
        answer: "Yes, for families seeking luxury safari experience. The comfort level and gourmet meals appeal to children while maintaining sophisticated standards. Younger guests enjoy the premium amenities and attention. However, this works best for families who want refined experience rather than rustic adventure."
      },
      {
        question: "Can we book for special occasions?",
        answer: "Perfect for honeymoons, anniversaries, milestone birthdays, or celebrations! Inform us in advance and we arrange special elements - decorations, custom menu items, champagne upgrades, photography coordination, surprise elements. We've crafted many memorable celebration safaris and would be honored to create yours."
      },
      {
        question: "How far in advance should we book?",
        answer: "Minimum 5-7 days recommended to coordinate private chef, vehicle preparation, and menu customization. For special occasions or peak season, 2-3 weeks advance booking ensures optimal planning. Last-minute bookings sometimes possible but advance notice guarantees the complete luxury experience."
      }
    ]
  },

  // ========================================
  // FULL-DAY SAFARI - SUBCATEGORY 4
  // ========================================
  {
    slug: "wildlife-research-safari",
    category: "Private All-Inclusive Full-Day Safari",
    title: "Wildlife Research & Conservation Safari",
    shortDescription: "Educational 12-hour safari combining wildlife viewing with conservation science. Learn tracking techniques, data collection, and participate in citizen science initiatives.",
    duration: "12 Hours",
    startingPrice: 175,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80",
    
    overview: `For wildlife enthusiasts who want to go beyond simple observation and understand the science behind conservation, the Wildlife Research & Conservation Safari offers an immersive educational experience that combines thrilling wildlife encounters with hands-on participation in research methodologies and conservation efforts. This is safari as education, adventure as learning, and tourism as contribution.

Unlike standard safaris where wildlife viewing is the sole focus, this experience operates on multiple levels simultaneously. Yes, you'll see leopards, elephants, sloth bears, and diverse species in spectacular encounters. But you'll also learn how scientists study these animals, what data is collected and why, how conservation challenges are assessed, and what strategies are employed to protect threatened species and habitats. You transition from tourist to citizen scientist for the day.

Your guide is not just a tracker but a conservation professional - someone with formal education in wildlife biology, ecology, or conservation science combined with extensive field experience. They understand academic concepts but communicate them in accessible, engaging ways. Throughout the day, they teach you to see the park as scientists do - observing not just animals but behaviors, tracking not just for sightings but for understanding, and documenting systematically rather than casually.

The 12-hour timeframe allows for comprehensive coverage of conservation topics. Morning wildlife viewing is enhanced with lessons on identification techniques - how to recognize individual leopards by spot patterns, how to age elephants by size and features, how to sex different species, how to identify bird species systematically using field guides. You learn the scientific names, ecological roles, and conservation status of species encountered.

You'll participate in actual data collection activities used by researchers. This might include recording GPS coordinates of leopard sightings for territory mapping, documenting elephant herd composition and calf presence for population studies, noting sloth bear feeding behaviors for dietary research, or conducting bird point counts for diversity assessments. The data you collect contributes to real ongoing studies - your safari has scientific value beyond personal enjoyment.

The educational content covers broad conservation topics: habitat ecology and why certain species need specific environments, human-wildlife conflict and potential solutions, poaching threats and anti-poaching measures, climate change impacts on ecosystems, the role of protected areas in biodiversity conservation, and how ecotourism can support rather than harm wildlife. Discussions are grounded in Yala-specific examples you're observing directly.

Practical skills are taught throughout. You'll learn track identification - distinguishing leopard prints from other species, aging tracks by sharpness, determining direction of travel. You'll understand how to read animal behavior and body language to predict actions. You'll practice using field equipment properly - binoculars, spotting scopes, field guides, GPS units. By day's end, you've developed transferable skills applicable to wildlife observation anywhere.

The safari includes strategic stops at locations of conservation significance - perhaps a zone where human-elephant conflict mitigation measures are implemented, or an area where habitat restoration efforts are underway, or a water source where monitoring equipment is installed. These ground-truth visits make abstract conservation concepts tangible and real.

Meals include continued education in comfortable settings. Breakfast and lunch breaks feature discussion sessions on specific topics - conservation biology principles, research methodology, case studies of successful conservation programs, or current challenges facing Yala's management. These aren't lectures but engaging conversations where questions are encouraged and your guide shares firsthand experiences from conservation work.

This safari is ideal for university students in relevant fields, educators seeking experiential learning, wildlife enthusiasts wanting deeper understanding, families teaching children about conservation, or anyone who believes that informed tourists become effective conservation advocates. It's perfect for guests who've done standard safaris and now want to understand what they're seeing on a scientific level.

The package includes all standard full-day safari elements plus specialized additions: conservation-trained guide with formal education background, detailed briefing materials on Yala's ecology and conservation, citizen science data collection participation, field equipment training and use, comprehensive educational commentary throughout, discussion sessions on conservation topics, certificate of participation in conservation research, and digital resources for continued learning. This is education disguised as adventure - the most effective and memorable kind.

By day's end, you've not only seen spectacular wildlife but understand the complex web of ecological relationships, conservation challenges, and research efforts that sustain these populations. You leave as an informed advocate capable of making better conservation decisions, supporting effective organizations, and educating others. You've transformed from casual wildlife viewer to knowledgeable conservation supporter - and that's a gift that extends far beyond a single safari day.`,

    pricingTiers: [
      { groupSize: "1 Person", pricePerPerson: 345, childPrice: 75, infantPrice: 0 },
      { groupSize: "2 Persons", pricePerPerson: 235, childPrice: 75, infantPrice: 0 },
      { groupSize: "3 Persons", pricePerPerson: 175, childPrice: 75, infantPrice: 0 },
      { groupSize: "4 Persons", pricePerPerson: 155, childPrice: 75, infantPrice: 0 }
    ],

    wildlifeHighlights: [
      "Leopards - study individual identification and territory mapping",
      "Elephants - herd composition analysis and demographic data",
      "Sloth bears - behavior documentation and feeding ecology",
      "Bird diversity - point count methodology and species richness",
      "Prey species - abundance estimation and habitat use",
      "Reptiles and amphibians - biodiversity assessment",
      "Track identification - learn major species footprints",
      "Behavioral observation - ethogram development principles",
      "Ecosystem interactions - food web documentation",
      "Conservation status - threat assessment for each species"
    ],

    experienceHighlights: [
      "Conservation-trained guide with scientific background",
      "Hands-on participation in data collection",
      "Scientific methodology training throughout",
      "Track identification and reading skills taught",
      "Individual animal identification techniques",
      "Field equipment use and training",
      "Citizen science contribution to real research",
      "Comprehensive conservation education",
      "Discussion sessions on specific topics",
      "Visits to conservation significance sites",
      "Certificate of research participation",
      "Maximum 4 participants for interactive learning",
      "Digital educational resources provided",
      "Transferable wildlife skills development"
    ],

    itinerary: [
      {
        time: "5:00 AM",
        activity: "Research Orientation & Training",
        description: "Collection with comprehensive briefing on Yala's ecology and conservation challenges. Receive field data collection materials, GPS units, and identification guides. Overview of day's citizen science activities."
      },
      {
        time: "5:30 AM - 8:30 AM",
        activity: "Morning Wildlife Survey & Training",
        description: "Enter park conducting systematic survey. Learn identification techniques, practice with field guides, and begin data collection. Focus on leopard territories with GPS mapping."
      },
      {
        time: "8:30 AM - 10:00 AM",
        activity: "Elephant Demography Study",
        description: "Visit elephant congregation areas to practice herd composition analysis. Learn to age and sex elephants, identify individuals, and document family structures. Contribute data to population monitoring."
      },
      {
        time: "10:00 AM - 11:00 AM",
        activity: "Breakfast & Conservation Discussion",
        description: "Meal with focused discussion session on conservation biology principles. Review morning's data collection and discuss how such research informs management decisions."
      },
      {
        time: "11:00 AM - 12:30 PM",
        activity: "Track & Sign Interpretation Training",
        description: "Systematic training in identifying animal tracks, scat, feeding signs, and territorial markers. Practice aging tracks and determining behavior from signs. Hands-on field instruction."
      },
      {
        time: "12:30 PM - 1:30 PM",
        activity: "Lunch & Research Methodology Discussion",
        description: "Midday meal with discussion of research methods used in wildlife studies. Case studies of successful conservation programs. Q&A with your guide about their conservation work."
      },
      {
        time: "1:30 PM - 3:30 PM",
        activity: "Habitat Assessment & Bird Surveys",
        description: "Visit different habitat types learning ecological assessment. Conduct point-count bird surveys using proper methodology. Document habitat features and species associations."
      },
      {
        time: "3:30 PM - 5:00 PM",
        activity: "Behavioral Observation & Ethogram",
        description: "Extended observation of selected species practicing behavioral documentation. Learn ethogram development and behavioral categories. Scientific observation versus casual viewing."
      },
      {
        time: "5:00 PM - 6:00 PM",
        activity: "Golden Hour Research & Photography",
        description: "Combine scientific photography documentation with aesthetic imagery. Learn how photographs contribute to research. Final wildlife observations and data collection."
      },
      {
        time: "6:00 PM - 6:30 PM",
        activity: "Data Submission & Certificate",
        description: "Return journey with data review and submission. Receive certificate of participation in conservation research. Discussion of how collected data will be used. Educational resource sharing."
      }
    ],

    vehicleStandards: [
      "4x4 safari vehicle equipped for research activities",
      "Field equipment storage and organization",
      "GPS units and mapping tools provided",
      "Maximum 4 participants for effective learning",
      "Comfortable seating for extended observation",
      "Educational materials and reference guides",
      "Data recording equipment (clipboards, forms)",
      "Binoculars and spotting scopes available",
      "All safety and comfort features"
    ],

    trackerStandards: [
      "Conservation professional with formal education (BSc/MSc in wildlife or ecology)",
      "Field research experience and methodology expertise",
      "Teaching ability and educational communication skills",
      "Comprehensive knowledge of Yala's ecology and conservation",
      "Experience with citizen science program coordination",
      "Understanding of current research projects and needs",
      "Ability to translate complex science into accessible concepts",
      "Passion for education and conservation advocacy",
      "Network connections with research community"
    ],

    photographyTips: [
      "Scientific photography documentation techniques",
      "Proper image recording for research use",
      "Metadata collection (GPS, time, behavior notes)",
      "Photographic evidence standards",
      "Wildlife photography that tells conservation stories",
      "Combining aesthetic and documentary approaches",
      "Images as educational and advocacy tools",
      "Ethical photography in research contexts",
      "Create photo-based field reports",
      "Visual storytelling for conservation communication"
    ],

    packingList: [
      "Notebook and multiple pens for data recording",
      "Camera for both photography and documentation",
      "Binoculars (provided but bring if preferred)",
      "Comfortable field clothing",
      "Sun protection comprehensive",
      "Water bottle and personal snacks",
      "Field guide to species (provided)",
      "Personal GPS unit or smartphone with GPS apps",
      "Portable charger for devices",
      "Rain protection for equipment",
      "Enthusiasm for learning!",
      "Questions and curiosity"
    ],

    responsibleTourism: [
      "Direct contribution to conservation through data collection",
      "Education creates informed conservation advocates",
      "Scientific tourism model demonstrated",
      "Support for research and monitoring programs",
      "Fees contribute to conservation initiatives",
      "Local conservation professional employment",
      "Citizen science empowers tourists as contributors",
      "Ethical observation practices taught and modeled",
      "Understanding human impact promotes behavior change",
      "Long-term conservation awareness development",
      "Building capacity for conservation through education",
      "Sustainable tourism that gives back to nature"
    ],

    faqs: [
      {
        question: "Do I need scientific background to participate?",
        answer: "No scientific background required! Content adapts to your level. Enthusiastic beginners learn basic concepts while those with education get more technical depth. The goal is making science accessible and engaging for all. If you're curious about wildlife and conservation, you'll thrive in this experience."
      },
      {
        question: "Is the data collection real or just educational simulation?",
        answer: "Real data contributing to actual ongoing studies! Yala has various research projects where citizen science data is valuable. Your observations, GPS points, and behavioral records join larger datasets used by researchers. This isn't simulation - you're genuinely contributing to wildlife science."
      },
      {
        question: "Does education reduce wildlife viewing time?",
        answer: "No - it enhances it! You're observing wildlife throughout the 12 hours, just with added understanding. The educational components make wildlife viewing more meaningful. Most participants report seeing wildlife differently (more deeply) after this safari compared to standard experiences. It's simultaneous education and observation."
      },
      {
        question: "Is this suitable for children or primarily adults?",
        answer: "Excellent for children 10+ with interest in science and nature! Many school groups and families choose this safari. Kids engage enthusiastically with hands-on data collection and learn valuable skills. It's educational yet fun. Teenagers particularly appreciate the scientific respect (treated as junior researchers)."
      },
      {
        question: "What happens with our data after the safari?",
        answer: "Data is compiled with other observations and shared with relevant research projects. You receive follow-up information about how your data contributed. Some datasets lead to publications where citizen scientists receive acknowledgment. You maintain connection to the research you supported."
      },
      {
        question: "Can university students get credit for this?",
        answer: "Many universities accept this as experiential learning or field work. We provide detailed certificates documenting skills learned and activities completed. Discuss with your institution beforehand about credit possibilities. We're happy to provide additional documentation if needed for academic requirements."
      }
    ]
  }
];

// Helper function to get packages by category
export function getPackagesByCategory(category: string): SafariPackage[] {
  return safariPackages.filter(pkg => pkg.category === category);
}

// Helper function to get package by slug
export function getPackageBySlug(slug: string): SafariPackage | undefined {
  return safariPackages.find(pkg => pkg.slug === slug);
}
