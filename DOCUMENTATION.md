# IVASTA Security Website - Next.js Application

## 📁 Project Structure

```
ivasta/
├── app/
│   ├── globals.css          # Global styles with Tailwind and animations
│   ├── layout.tsx            # Root layout with Navbar, Footer, BackgroundEffects
│   ├── page.tsx              # Home page with all sections
│   └── contact/
│       └── page.tsx          # Dedicated contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Global navigation (mobile responsive)
│   │   └── Footer.tsx        # Global footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero with parallax and word animation
│   │   ├── PartnersSection.tsx # Partners grid with scroll animation
│   │   ├── FeaturesSection.tsx # Features cards
│   │   ├── ServicesSection.tsx # Horizontal scroll services
│   │   ├── TestimonialsSection.tsx # Customer testimonials
│   │   └── SampleReportSection.tsx # Email capture form
│   └── ui/
│       ├── LoadingScreen.tsx  # Animated loading screen
│       ├── BackgroundEffects.tsx # Floating icons & gradient effects
│       ├── ScrollIndicator.tsx # Bounce arrow indicator
│       └── ContactForm.tsx    # Reusable contact form
├── hooks/
│   ├── useSmoothScroll.ts     # Lenis smooth scrolling
│   ├── useParallaxAnimation.ts # Hero parallax effects
│   ├── useScrollAnimation.ts  # Partners & sections scroll animations
│   └── useHorizontalScroll.ts # Services horizontal scroll
└── lib/                       # Utility functions (if needed)
```

## 🚀 Getting Started

### Installation

```bash
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Reusable Components

### 1. **Navbar Component**
Global navigation with mobile menu support.

```tsx
// Used in app/layout.tsx
<Navbar />
```

### 2. **Footer Component**
Global footer with navigation links and contact info.

```tsx
// Used in app/layout.tsx
<Footer />
```

### 3. **ContactForm Component**
Reusable form with validation and custom submit handler.

```tsx
import ContactForm from '@/components/ui/ContactForm';

<ContactForm 
  onSubmit={(data) => {
    console.log(data); // { name, email, message }
  }} 
/>
```

### 4. **HeroSection Component**
Customizable hero section with parallax effects.

```tsx
<HeroSection 
  title="Manual Penetration Testing"
  subtitle="Not Just Running a Scanner"
  description={[
    'First paragraph...',
    'Second paragraph...'
  ]}
  animatedWords={['Manual', 'Thorough', 'Expert']}
  uiElements={['Authentication', 'Authorization']}
/>
```

### 5. **ServicesSection Component**
Horizontal scrolling services showcase.

```tsx
<ServicesSection 
  services={[
    { title: 'Service 1', description: '...' },
    { title: 'Service 2', description: '...' }
  ]}
/>
```

### 6. **TestimonialsSection Component**
Display customer testimonials.

```tsx
<TestimonialsSection 
  testimonials={[
    {
      quote: '...',
      author: 'John Doe',
      role: 'CEO',
      company: 'TechCorp'
    }
  ]}
/>
```

### 7. **PartnersSection Component**
Display partner logos/names with scroll animations.

```tsx
<PartnersSection 
  partners={['Partner 1', 'Partner 2', 'Partner 3']}
/>
```

### 8. **FeaturesSection Component**
Highlight key features with icons.

```tsx
<FeaturesSection 
  features={[
    {
      icon: CheckCircle,
      title: 'Feature 1',
      description: '...'
    }
  ]}
/>
```

## 🎭 Animation Hooks

### useSmoothScroll
Enables smooth scrolling across the entire page using Lenis.

```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Page() {
  useSmoothScroll(); // Call once in your page
  return <div>...</div>;
}
```

### useParallaxAnimation
Adds parallax effects to hero section elements.

```tsx
import { useParallaxAnimation } from '@/hooks/useParallaxAnimation';

const heroRef = useRef<HTMLElement>(null);
const heroTextRef = useRef<HTMLDivElement>(null);

useParallaxAnimation({
  heroRef,
  heroTextRef,
  textAnimRef,
  uiInteractionRef,
  animatedWords: ['Word1', 'Word2']
});
```

### useHorizontalScroll
Creates horizontal scroll effect for services.

```tsx
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

const servicesRef = useRef<HTMLElement>(null);
const serviceCardsRef = useRef<HTMLDivElement>(null);

useHorizontalScroll({ servicesRef, serviceCardsRef });
```

### useScrollAnimation
Animates elements on scroll (partners, sections).

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const partnersRef = useRef<(HTMLDivElement | null)[]>([]);

useScrollAnimation({ partnersRef });
```

## 🎨 Styling

### Tailwind Classes
The project uses Tailwind CSS with custom configurations:

- **Primary Color**: Purple (`purple-500`, `purple-600`)
- **Background**: Gray scale (`gray-950`, `gray-900`, `gray-800`)
- **Accent Effects**: Gradient blurs, backdrop filters

### Custom Animations
Defined in `globals.css`:
- `animate-float` - Floating icons
- `animate-letter-slide` - Loading screen letters
- `bg-grid-pattern` - Background grid pattern

## 📄 Pages

### Home Page (`/`)
Displays all sections:
- Hero
- Partners
- Features
- Services (horizontal scroll)
- Testimonials
- Sample Report CTA

### Contact Page (`/contact`)
Standalone contact form page with the same styling.

## 🔧 Customization

### Adding a New Section

1. Create component in `components/sections/`:
```tsx
// components/sections/NewSection.tsx
'use client';

export default function NewSection() {
  return (
    <section className="parallax-section min-h-screen flex items-center justify-center px-4 py-20">
      {/* Your content */}
    </section>
  );
}
```

2. Import and use in `app/page.tsx`:
```tsx
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewSection />
      {/* ... other sections */}
    </>
  );
}
```

### Modifying Colors

Update Tailwind config in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#9333ea', // Change purple
      secondary: '#3b82f6', // Add new colors
    }
  }
}
```

### Adding New Services

In your page or component:
```tsx
const myServices = [
  {
    title: 'New Service',
    description: 'Service description...'
  }
];

<ServicesSection services={myServices} />
```

## 🐛 Troubleshooting

### Parallax Not Working
- Ensure GSAP and Lenis are properly installed
- Check that `useSmoothScroll()` is called in your page
- Verify refs are properly attached to DOM elements

### Horizontal Scroll Issues
- Make sure parent container has `overflow-hidden`
- Verify `min-w-full` on each card
- Check GSAP ScrollTrigger is registered

### TypeScript Errors
- Run `npm run build` to check for errors
- Ensure all props match component interfaces
- Check that refs have proper types

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "gsap": "^3.12.5",
  "@studio-freight/lenis": "^1.0.42",
  "lucide-react": "^0.294.0",
  "tailwindcss": "^3.3.0"
}
```

## 🎯 Performance Tips

1. **Optimize Images**: Use Next.js `<Image>` component
2. **Lazy Load**: Sections below fold can be lazy loaded
3. **Reduce Animations**: On mobile, consider simpler animations
4. **Code Splitting**: Components are already split by default

## 📝 License

© 2025 IVASTA Security. All rights reserved.
