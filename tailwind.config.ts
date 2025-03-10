import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-dark': 'var(--color-yellow-dark)',
        'yellow-pure': 'var(--color-yellow-pure)',
        'yellow-light': 'var(--color-yellow-light)',
        'white-dark': 'var(--color-white-dark)',
        'white-pure': 'var(--color-white-pure)',
        'white-light': 'var(--color-white-light)',
      },
    },
  },
  plugins: [],
};
export default config;
