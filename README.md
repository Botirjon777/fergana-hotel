# 🏨 Antigravity Hotel — Next.js Website

> **Above the Ordinary** — A luxury hotel website built with Next.js 14, TypeScript, Tailwind CSS, and Swiper.js.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 14.2.5 (App Router) |
| TypeScript | 5.x |
| Tailwind CSS | 3.4 |
| Swiper.js | 11.x |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles, Swiper overrides, custom animations
│   ├── layout.tsx          # Root layout with Google Fonts (Cormorant + Jost)
│   └── page.tsx            # Main page — orchestrates all components
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar, scroll effect, hamburger
│   │   ├── MobileSidebar.tsx  # Slide-in mobile sidebar
│   │   ├── BottomNav.tsx   # Fixed bottom nav (mobile only)
│   │   └── Footer.tsx      # Full footer with columns
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Hero banner with particles + orbs
│   │   ├── BookingBar.tsx  # Booking form below hero
│   │   ├── About.tsx       # About section with stats
│   │   ├── Gallery.tsx     # Swiper.js gallery
│   │   ├── Services.tsx    # Services grid
│   │   └── Location.tsx    # Google Maps + contact info
│   │
│   └── ui/
│       ├── Logo.tsx          # Animated hotel logo
│       ├── SectionHeader.tsx # Reusable eyebrow + title
│       ├── Popup.tsx         # Reusable popup base
│       ├── BookingPopup.tsx  # Book a room form popup
│       ├── ConfirmPopup.tsx  # Confirmation popup
│       ├── ServicePopup.tsx  # Service enquiry popup
│       ├── WelcomePopup.tsx  # Welcome popup on load
│       └── FloatBookBtn.tsx  # Floating Book Now (mobile)
│
├── lib/
│   └── data.ts             # All content data (nav, gallery, services, etc.)
│
└── types/
    └── index.ts            # Shared TypeScript types
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Color Palette

```css
--cream:      #faf8f2   /* Page background */
--sand:       #ded2b8   /* Section background, cards */
--gold:       #b07137   /* Primary brand color */
--gold-light: #c9934f   /* Hover states */
--gold-dark:  #8a5625   /* Active states */
--dark:       #2d2416   /* Headings */
--mid:        #6b5535   /* Body text */
```

---

## Features

- ✅ Fixed navbar with scroll effect & backdrop blur
- ✅ Mobile hamburger → slide-in sidebar
- ✅ Hero banner with floating particle animation & ambient orbs
- ✅ Booking form bar (check-in, check-out, guests, room type)
- ✅ About section with stats
- ✅ Swiper.js gallery (3-up desktop, 2-up tablet, 1-up mobile, autoplay)
- ✅ Services grid with hover animations
- ✅ Google Maps embed with contact details
- ✅ Welcome popup (auto-opens after 1.8s)
- ✅ Booking popup → Confirmation popup
- ✅ Service enquiry popup
- ✅ Fixed bottom navigation (mobile only)
- ✅ Floating Book Now button (mobile only)
- ✅ Beautiful footer with columns & social links
- ✅ Fully responsive for all screen sizes
- ✅ Cormorant Garamond + Jost typography