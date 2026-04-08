/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066B3',
          darkBlue: '#004080',
          navy: '#002855',
          green: '#00A878',
          soft: '#F8FAFC'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(0, 102, 179, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0066B3 0%, #004080 50%, #002855 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0066B3 0%, #004080 35%, #002855 100%)'
      }
    }
  },
  plugins: []
};
