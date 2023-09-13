import {
  Noto_Sans_JP,
  Fira_Code,
  Baloo_2,
  M_PLUS_Rounded_1c,
} from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const firaCode = Fira_Code({
  variable: '--font-fira-code',
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const baloo2 = Baloo_2({
  variable: '--font-baloo-2',
  weight: ['700'],
  style: 'normal',
  subsets: ['latin'],
});

export const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: '--font-m-plus-rounded-1c',
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
});
