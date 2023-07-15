/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'base': { min: '320px', max: '359px' },
        'xxs': { min: '360px', max: '399px' },
        'xs': { min: '400px', max: '639px' },


      },
      clip: ['hover', 'focus', 'active', 'group-hover', 'group-focus'], // Add 'group-hover' and 'group-focus' if needed



    },
  },
  plugins: [],
}
