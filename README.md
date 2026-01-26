# IVASTA Security - Next.js Application

A modern, scalable Next.js application for IVASTA Security featuring smooth parallax effects, reusable components, and an elegant design.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **GSAP** for advanced animations
- **Lenis** for smooth scrolling
- **Reusable Components** architecture
- **Responsive Design** for all devices
- **Optimized Performance**

## 📁 Project Structure

```
ivasta/
├── app/                      # Next.js app directory
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── SampleReportSection.tsx
│   └── ui/                  # UI components
│       ├── BackgroundEffects.tsx
│       ├── ScrollIndicator.tsx
│       ├── ContactForm.tsx
│       └── LoadingScreen.tsx
├── hooks/                   # Custom React hooks
│   ├── useParallaxAnimation.ts
│   ├── useScrollAnimation.ts
│   ├── useHorizontalScroll.ts
│   └── useSmoothScroll.ts
├── lib/                     # Utility functions
└── public/                  # Static assets
```

## 🛠️ Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Modifying Sections

All sections are highly customizable through props:

```tsx
<HeroSection 
  title="Your Custom Title"
  subtitle="Your Subtitle"
  animatedWords={['Word1', 'Word2']}
/>
```

### Adding New Services

Edit the services array in `ServicesSection.tsx`:

```tsx
const services = [
  {
    title: 'New Service',
    description: 'Service description'
  }
];
```

### Changing Colors

Update colors in `tailwind.config.js` or use Tailwind's utility classes.

## 🔧 Key Technologies

- **Next.js 14**: React framework with App Router
- **GSAP**: Professional-grade animation library
- **Lenis**: Smooth scroll library
- **Lucide React**: Beautiful icon library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance Optimizations

- Code splitting with Next.js
- Dynamic imports for animations
- Optimized images and assets
- Lazy loading components
- Smooth scroll performance

## 🐛 Known Issues & Fixes

### Parallax Not Working
- Ensure GSAP and ScrollTrigger are properly loaded
- Check if smooth scroll is initialized
- Verify refs are correctly attached

### Horizontal Scroll Issues
- The horizontal scroll is pinned and uses GSAP
- Ensure sufficient content width
- Check ScrollTrigger configuration

## 📄 License

All rights reserved © 2025 IVASTA Security

## 🤝 Contributing

This is a private project for IVASTA Security.

## 📧 Contact

For questions or support:
- Email: info@ivastasecurity.com
- Phone: +1 (555) 123-4567
