/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        safari: {
          50: '#f7f3e9',
          100: '#ede2c7',
          200: '#dcc48e',
          300: '#ca9f52',
          400: '#bc8532',
          500: '#a56b1f',
          600: '#8b541a',
          700: '#6f3e18',
          800: '#5d341a',
          900: '#4f2d1a',
        },
        earth: {
          50: '#f6f3f0',
          100: '#e7ddd5',
          200: '#d0baaa',
          300: '#b5947a',
          400: '#9d7354',
          500: '#8b6242',
          600: '#75523a',
          700: '#5f4332',
          800: '#523a2e',
          900: '#48342a',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};