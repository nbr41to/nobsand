import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        baloo: ['var(--font-baloo-2)'],
        notoSansJp: ['var(--font-noto-sans-jp)'],
        firaCode: ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
};
export default config;
