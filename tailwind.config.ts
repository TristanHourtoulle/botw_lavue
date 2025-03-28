/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sackers-gothic-2': ['var(--font-sackers-gothic-2)', 'sans-serif'],
        'sackers-gothic-3': ['var(--font-sackers-gothic-3)', 'sans-serif'],
        'sackers-gothic-heavy': [
          'font-[family-name:var(--font-sackers-gothic-heavy)]',
          'sans-serif',
        ],
        'sackers-gothic-light': [
          'var(--font-sackers-gothic-light)',
          'sans-serif',
        ],
        'sackers-gothic': ['var(--font-sackers-gothic)', 'sans-serif'],
        'saol-display-light': ['var(--font-saol-display-light)', 'serif'],
        'saol-display-light-italic': [
          'var(--font-saol-display-light-italic)',
          'serif',
        ],
        'saol-display-regular': ['var(--font-saol-display-regular)', 'serif'],
      },
    },
  },
};
