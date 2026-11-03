/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          900: '#1A0F0B',
          800: '#231713',
          700: '#2F1E19',
          600: '#3D2821',
          500: '#543930',
          400: '#6E4D42',
          100: '#E8E1DE',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE4',
          300: '#EBDDCF',
          400: '#DAC4B0',
          500: '#C7AC95',
        },
        caramel: {
          600: '#A15E28',
          500: '#B97135',
          400: '#C68B59',
          300: '#D6A67E',
          200: '#E6C4A6',
          100: '#F6E7D9',
        },
        sage: {
          700: '#384333',
          600: '#485542',
          500: '#5B6B52',
          400: '#738569',
          300: '#94A68C',
          200: '#BFCCB8',
          100: '#E4ECE0',
          50: '#F2F6F0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(47, 30, 25, 0.08)',
        'warm-md': '0 8px 24px -6px rgba(47, 30, 25, 0.12)',
        'warm-lg': '0 16px 36px -8px rgba(47, 30, 25, 0.16)',
        'warm-xl': '0 24px 48px -12px rgba(47, 30, 25, 0.22)',
      },
      letterSpacing: {
        'widest-editorial': '0.22em',
      }
    },
  },
  plugins: [],
}

