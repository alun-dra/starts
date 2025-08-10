/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '1100': '1100px',
      },
      colors: {
        primary: "#9D4EDD",   // texto activo / acentos
        dark: "#10002B",      // fondo header
        accent: "#E0AAFF",    // botón
      },
      // Nombres de animación (clase: animate-*)
      animation: {
        'fade-in': 'fadeIn 700ms ease-out both',
        'fade-in-up': 'fadeInUp 700ms ease-out both',
        'zoom-in': 'zoomIn 500ms ease-out both',
        'slide-up': 'slideUp 600ms cubic-bezier(.22,.9,.3,1) both',
        'pulse-soft': 'pulseSoft 1500ms ease-in-out infinite',
        'float-y': 'floatY 4s ease-in-out infinite',      // NUEVA
        'shimmer': 'shimmer 2.2s linear infinite',     
      },
      // Fotogramas clave
      keyframes: {
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%':   { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(12px)', opacity: 0 },
          '100%': { transform: 'translateY(0)',     opacity: 1 },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)',   opacity: 1 },
          '50%':      { transform: 'scale(1.02)', opacity: .96 },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },  
      },
    },
  },
  plugins: [],
}
