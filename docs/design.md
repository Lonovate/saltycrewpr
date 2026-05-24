# Salty Crew PR - Design & Architecture Document

## Brand Identity
- **Company**: Salty Crew PR - Puerto Rico luxury boat route rental
- **Vibe**: Tropical luxury, cinematic, minimalist, high-end tourism
- **Colors**: Ocean Blue (#0a2540), Deep Ocean (#061829), Soft Gold (#d4af37), Luxury Gold (#b8941f), White, Matte Black

## Component Architecture
```
app/
├── layout.tsx              # Root layout with fonts, metadata, LanguageProvider
├── page.tsx                # Server component, composes all sections
├── globals.css             # Tailwind + brand CSS variables + animations
├── api/contact/route.ts    # POST handler for form submission + email
├── components/
│   ├── Navbar.tsx          # Sticky transparent→solid, mobile hamburger, lang switch, social links
│   ├── Hero.tsx            # Fullscreen bg image, headline, CTAs, scroll indicator
│   ├── Routes.tsx          # Carousel of route cards with navigation
│   ├── WhyChooseUs.tsx     # 4 icon feature cards on ocean-blue bg
│   ├── Gallery.tsx         # Auto-scrolling dual-row image gallery
│   ├── History.tsx         # Image + text split layout with quote
│   ├── Testimonials.tsx    # Review carousel with stars
│   ├── SocialFeed.tsx      # Instagram-style grid
│   ├── Contact.tsx         # Full form + contact info card
│   └── Footer.tsx          # Dark footer with nav, contact, social, lang
├── lib/
│   ├── i18n.tsx            # LanguageContext + useTranslation hook
│   └── translations.ts    # EN/ES translation strings
```

## i18n Strategy
- React Context (`LanguageContext`) with `'en' | 'es'` state
- `useTranslation()` hook returns `{ t, language, setLanguage }`
- Translation keys organized by section
- No page reload on language switch

## Form Fields (per requirements)
- First Name, Last Name, Phone, Email, Preferred Route (dropdown)
- Preferred Communication Method: Email, Phone Call, WhatsApp, SMS/Text
- Group Size: 0-4, 4-6, 6-12, 12+
- Message (optional)
- All required except Message

## Animation Strategy
- Framer Motion for scroll reveals (`whileInView`)
- CSS transforms for hover effects (scale, translate)
- CSS keyframe animations for gallery auto-scroll
- Smooth scroll via CSS `scroll-behavior: smooth`
- `prefers-reduced-motion` respected

## Responsive Breakpoints
- Mobile: < 640px (single column, hamburger nav)
- Tablet: 640-1024px (2 columns where appropriate)
- Desktop: 1024px+ (full layout, 3-4 column grids)
