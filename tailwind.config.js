/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jet': {
          DEFAULT: '#353535',
          100: '#0b0b0b',
          200: '#151515',
          300: '#202020',
          400: '#2b2b2b',
          500: '#353535',
          600: '#5e5e5e',
          700: '#868686',
          800: '#aeaeae',
          900: '#d7d7d7'
        },
        'caribbean_current': {
          DEFAULT: '#3c6e71',
          100: '#0c1617',
          200: '#182c2d',
          300: '#244344',
          400: '#30595b',
          500: '#3c6e71',
          600: '#539a9e',
          700: '#7bb6b9',
          800: '#a7ced1',
          900: '#d3e7e8'
        },
        'white': {
          DEFAULT: '#ffffff',
          100: '#333333',
          200: '#666666',
          300: '#999999',
          400: '#cccccc',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff'
        },
        'platinum': {
          DEFAULT: '#d9d9d9',
          100: '#2b2b2b',
          200: '#575757',
          300: '#828282',
          400: '#adadad',
          500: '#d9d9d9',
          600: '#e0e0e0',
          700: '#e8e8e8',
          800: '#f0f0f0',
          900: '#f7f7f7'
        },
        'indigo_dye': {
          DEFAULT: '#284b63',
          100: '#080f14',
          200: '#101e27',
          300: '#182d3b',
          400: '#203c4e',
          500: '#284b63',
          600: '#3e7397',
          700: '#6099be',
          800: '#95bbd4',
          900: '#cadde9'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'name-gradient': 'linear-gradient(135deg, #284b63 0%, #3c6e71 50%, #539a9e 100%)',
        'section-gradient': 'linear-gradient(135deg, #f7f7f7 0%, #e8e8e8 100%)',
        'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(40, 75, 99, 0.08)',
        'medium': '0 8px 30px rgba(40, 75, 99, 0.12)',
        'strong': '0 12px 40px rgba(40, 75, 99, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
