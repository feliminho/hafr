/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1A1A19",
          gold: "#E3A21E",
          goldHover: "#C88E16",
          bgLight: "#FCFCFC",
          bgSecondary: "#F5F5F5",
          textPrimary: "#1A1A19",
          textSecondary: "#5A5A59",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
