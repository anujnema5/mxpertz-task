import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-image': "url('https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/restaurant-hero-01.jpg')"
      },
    },
  },
  plugins: [],
}
export default config
