/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F5F8FA',
          700: '#202020',
        },
        brand: {
          900: '#1a365d',
          800: '#153e75',
          700: '#0000ff',
        },
      },
      fontFamily: {
        sans: ['"andada-pro"', '"Andada Pro"'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
