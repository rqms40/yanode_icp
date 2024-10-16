/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        shimmer: 'shimmer 3s infinite linear',
      },
    },
  },
  plugins: [],
}

