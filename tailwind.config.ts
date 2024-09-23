import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {}
  },
  plugins: []
};

export default tailwindConfig;
