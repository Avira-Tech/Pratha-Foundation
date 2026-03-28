/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // #D0F0C0
        primary: '#80EF80',
        secondary: '#000000',
        surface: '#ffffffcf',
      },
      fontFamily: {
        heading: ['Marcellus', 'Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        zen: '1.5rem',
      },
      boxShadow: {
        earth: '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

