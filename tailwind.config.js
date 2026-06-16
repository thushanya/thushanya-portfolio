/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#ecf7ff',
          100: '#d3ecff',
          200: '#adddff',
          300: '#76c5ff',
          400: '#00a8e8',
          500: '#0096d1',
          600: '#0073b1',
          700: '#005a8d',
          800: '#004876',
          900: '#003a5c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(0, 168, 232, 0.1) 0%, rgba(255, 0, 127, 0.05) 50%, rgba(0, 255, 255, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 168, 232, 0.4)',
        'glow-sm': '0 0 10px rgba(0, 168, 232, 0.2)',
      },
    },
  },
  plugins: [],
};

