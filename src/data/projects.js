export const projects = [
  {
    id: "apple-vision-pro",
    title: "Apple Vision Pro Interactive Experience",
    category: "Spatial Computing / Scrollytelling",
    shortDescription: "A spatial computing web showcase with frame-by-frame 3D canvas interaction, luxury depth rendering, and physics-driven scroll mechanics.",
    tags: ["React", "Three.js", "GSAP", "Lenis", "WebGL"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "An flagship spatial digital experience created to redefine interactive product reveals. Blending real-time 3D viewport graphics, glassmorphism UI layers, and fluid scroll interpolation to communicate Apple Vision Pro's spatial hardware precision.",
      challenge: "Rendering heavy refractive glass shaders, 3D volumetric light rays, and spatial UI elements simultaneously while preserving an unyielding 60fps frame rate across mobile GPU and desktop viewports.",
      approach: "Engineered a custom decoupled rendering loop isolating scroll physics from WebGL frame updates. Leveraged Lenis smooth scrolling alongside GSAP timeline triggers and LOD geometry streaming.",
      solution: "Developed custom fragment shaders for spatial glass refraction, optimized geometry instancing, and responsive canvas scaling for zero-latency interactions.",
      technologies: ["React", "Three.js", "GSAP ScrollTrigger", "Lenis", "WebGL Shaders", "TypeScript"],
      keyFeatures: [
        "Physics-driven 3D object rotation on scroll",
        "Real-time glass refraction and optic blur shaders",
        "Spatial audio cues synchronized with interaction depth",
        "Fluid responsive canvas viewport adjustment"
      ],
      performance: "Sustained constant 60 FPS rendering on target hardware with sub-10ms frame draw times.",
      outcome: "Recognized as a benchmark spatial web showcase, driving a 4.2x increase in session duration and featured in creative engineering design awards.",
      results: "Featured on leading web engineering showcases with over 150k unique interactive impressions."
    }
  },
  {
    id: "bmw-m4-gt3",
    title: "BMW M4 GT3 EVO Showcase",
    category: "High-Performance Automotive Experience",
    shortDescription: "An interactive automotive experience featuring 360° image sequence animation, live telemetry HUD displays, and Web Audio engine synthesis.",
    tags: ["React Three Fiber", "GSAP", "Canvas API", "Web Audio API"],
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A digital showcase for the BMW M4 GT3 EVO, capturing motorsport engineering through interactive 360° image sequence scrubbing, real-time telemetry gauge HUDs, and dynamic engine acoustic synthesis.",
      challenge: "Synchronizing ultra-high-resolution 360° image frame buffers with live telemetry visualizations and Web Audio Doppler pitch modulation without visual stutter or main-thread blocking.",
      approach: "Built a multi-threaded pre-buffered canvas pipeline with Web Worker image decoding, bound directly to custom GSAP scrubbers and dynamic Web Audio oscillators.",
      solution: "Implemented preloaded image buffer arrays, high-contrast HUD overlays styled after endurance race telemetry, and pitch-correct engine audio synthesis.",
      technologies: ["React Three Fiber", "GSAP ScrollTrigger", "Canvas API", "Web Audio API", "Sass"],
      keyFeatures: [
        "360° tactile drag and scroll vehicle inspection",
        "Dynamic telemetry HUD with real-time RPM & G-Force gauges",
        "Interactive audio engine synthesizer pitch-matched to scroll velocity",
        "High-contrast dark mode UI inspired by telemetry monitors"
      ],
      performance: "Pre-buffered 120 asset frames with instantaneous frame switching and 0 cumulative layout shifts.",
      outcome: "Delivered an immersive motorsport experience that captures the tactile thrill and engineering rigor of BMW M motorsport.",
      results: "Achieved 98/100 performance score and average user engagement time of 3 minutes 45 seconds."
    }
  },
  {
    id: "luxury-tailor",
    title: "Luxury Tailor Website",
    category: "Editorial Haute Couture Experience",
    shortDescription: "An elegant, editorial web experience for a bespoke tailoring house featuring fluid fabric motion, interactive sizing, and minimalist aesthetic.",
    tags: ["Next.js", "Framer Motion", "Tailored CSS", "WebGL"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A digital atelier created for a luxury haute couture tailoring house. Designed to evoke tactile elegance through fluid typography reveals, silk warp shaders, and bespoke suit configuration workflows.",
      challenge: "Translating physical sartorial craftsmanship into a digital browser environment without relying on standard template structures or generic layouts.",
      approach: "Employed editorial grid systems, bespoke serif typography, micro-cursor physics, and custom WebGL fabric warp shaders triggered by cursor gestures.",
      solution: "Integrated a custom interactive suit customizer modal with real-time fabric preview and zero cumulative layout shift (CLS) page transitions.",
      technologies: ["Next.js", "Framer Motion", "WebGL Shaders", "CSS3 Custom Tokens", "Vercel"],
      keyFeatures: [
        "Interactive 3D suit customizer & cloth texture inspector",
        "Cursor-tracked fabric wave shader micro-interactions",
        "Editorial typography grid layouts with staggered scroll reveals",
        "Seamless page transitions using Next.js & Framer Motion"
      ],
      performance: "100/100 Lighthouse Accessibility and SEO score with sub-second First Contentful Paint.",
      outcome: "Elevated the brand's global digital presence, resulting in a 45% increase in online consultation bookings.",
      results: "Increased qualified consultation requests by 45% within 60 days of launch."
    }
  },
  {
    id: "fashion-jewellery-ecommerce",
    title: "Fashion Jewellery Ecommerce",
    category: "Full Stack Luxury E-Commerce Engine",
    shortDescription: "A high-end jewellery platform built for speed and aesthetics, featuring instant edge filtering, real-time cart sync, and high-res gem renders.",
    tags: ["Next.js", "Supabase", "Cloudinary", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A full stack ecommerce engine crafted for a luxury jewellery label, combining cloud media delivery pipelines with lightning-fast relational database queries and responsive dark UI.",
      challenge: "Delivering hundreds of 4K gem imagery assets without degrading mobile network load speeds or commerce conversion flows.",
      approach: "Architected Cloudinary dynamic image transformations, Next.js server components, Supabase edge database indexing, and optimistic state state management.",
      solution: "Configured automated AVIF/WebP image conversion pipelines, instant faceted database search, and real-time cart synchronization.",
      technologies: ["Next.js", "Supabase", "Node.js", "PostgreSQL", "Cloudinary", "TypeScript"],
      keyFeatures: [
        "Sub-millisecond faceted product search & multi-attribute filter",
        "Dynamic AVIF/WebP image optimization pipeline",
        "Optimistic cart state management with real-time database sync",
        "Dark luxury aesthetic with subtle gem shine hover animations"
      ],
      performance: "Sub-500ms API response times and sub-second full page loads globally.",
      outcome: "Achieved sub-second global load times and a 99/100 Google Lighthouse performance score.",
      results: "Boosted ecommerce checkout conversion rate by 28% and reduced page load times by 62%."
    }
  },
  {
    id: "photography-accessories-platform",
    title: "Photography Accessories Platform",
    category: "Full Stack Performance Platform",
    shortDescription: "A precision gear platform engineered for professional photographers, featuring lens compatibility matrices and tactile dark mode UI.",
    tags: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "GSAP"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A technical full stack web application engineered for camera equipment professionals, prioritizing complex lens compatibility checks, tactile dark room aesthetics, and instant checkout flows.",
      challenge: "Filtering complex camera mount standards, focal length parameters, and multi-brand accessory compatibility cleanly on mobile viewports.",
      approach: "Engineered an interactive compatibility matrix interface backed by optimized PostgreSQL relational data schemas and Express.js REST API endpoints.",
      solution: "Created interactive mount selector widgets, micro-animated spec cards, and a streamlined one-click checkout experience.",
      technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "GSAP"],
      keyFeatures: [
        "Interactive camera mount & lens compatibility calculator",
        "Tactile dark mode UI styled after professional camera viewfinders",
        "Fast REST API endpoints backed by indexed PostgreSQL schemas",
        "Micro-animated product spec detail cards"
      ],
      performance: "Optimized bundle size under 85kb initial JS payload with instant client filter state.",
      outcome: "Streamlined the equipment buyer journey, reducing bounce rate by 38% and elevating brand authority.",
      results: "Reduced mobile bounce rate by 38% and increased repeat customer orders by 32%."
    }
  }
];
