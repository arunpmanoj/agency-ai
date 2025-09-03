# Agency.AI

A modern, responsive agency website built with React, Tailwind CSS, and Framer Motion.  
Features custom cursor effects, smooth transitions, dark/light theme toggle, and animated sections.

## Features

- ⚡ Responsive design for all devices
- 🎨 Dark and light theme support
- 🖱️ Custom animated cursor
- 🚀 Smooth scroll and transitions
- 🧩 Modular React components (Navbar, Hero, Services, Our Work, Teams, Contact Us, Footer)
- ✨ Framer Motion animations

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/agency-ai.git
   cd agency-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

## Project Structure

```
src/
  assets/         # Images and icons
  components/     # All React components
    Navbar.jsx
    Hero.jsx
    TrustedBy.jsx
    Services.jsx
    ServiceCard.jsx
    OurWork.jsx
    Teams.jsx
    ContactUs.jsx
    Footer.jsx
  index.css       # Global styles (Tailwind, fonts, custom variables)
  App.jsx         # Main app component
  main.jsx        # Entry point
```

## Customization

- **Theme:**  
  Theme is persisted in `localStorage` and toggled via the Navbar.
- **Colors:**  
  Primary color is set in `src/index.css` as a CSS variable and extended in Tailwind config.
- **Animations:**  
  All major sections use Framer Motion for entrance animations.

## Dependencies

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-hot-toast](https://react-hot-toast.com/) (for notifications)

## Deployment

You can deploy this project to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting provider.

## License

MIT

---

**Made with ❤️ by Agency.AI**