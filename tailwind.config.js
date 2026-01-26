/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float linear infinite',
        'letter-slide': 'letterSlide 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.1',
          },
          '25%': {
            transform: 'translate(20px, -30px) rotate(5deg)',
            opacity: '0.15',
          },
          '50%': {
            transform: 'translate(-15px, -60px) rotate(-5deg)',
            opacity: '0.2',
          },
          '75%': {
            transform: 'translate(25px, -40px) rotate(3deg)',
            opacity: '0.15',
          },
        },
        letterSlide: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
