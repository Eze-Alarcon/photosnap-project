/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      DMsans: ['DM-Sans', 'sans-serif']
    },
    colors: {
      black: '#000000',
      gray: '#DFDFDF',
      white: '#FFFFFF',
      grad1: '#5A77FF',
      grad2: '#BC7198',
      grad3: '#FFC593'
    },
    extend: {},
    plugins: []
  }
}
