/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        pinkish: '#fcd5ce',
        softPink: '#f8a1d1',
        creamyWhite: '#fff1e6',
      },
      fontFamily: {
        nintendo: ['Press Start 2P', 'cursive'],
      },
      animation: {
        bounceSlow: 'bounce 3s infinite',
        pulseQuick: 'pulse 1s infinite',
      },
    },
  },
  plugins: [],
};

