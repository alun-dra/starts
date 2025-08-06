/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9D4EDD",   // texto activo
        dark: "#10002B",      // fondo header
        accent: "#E0AAFF",    // botón
      },
       animation: {
        'fade-in': 'fadeIn 1s ease-out both',
        'fade-in-up': 'fadeInUp 1s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: { // <- nuevo keyframe (idéntico, pero con otro nombre si quieres separarlo)
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
