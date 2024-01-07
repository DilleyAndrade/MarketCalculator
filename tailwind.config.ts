import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    colors:{
      'greenColor':'#207A00',
      'greenHoverColor':'#1A6400',
      'redColor':'#D71004',
      'redHoverColor':'#A30900',
      'textWhite':'#ffffff',
      'textBlack':'#121214',
      'bgColorDark':'#121214',
      'bgColorLight':'#EDEDED',
      'bgMiddleDark':'#29292E',
      'bgMiddleLight':'#DCDCDC',
    }
  },
  plugins: [],
}
export default config
