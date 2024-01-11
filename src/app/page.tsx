import Contact from '@/components/sections/Contact'
import FoodShowCase from '@/components/sections/FoodShowCase'
import HeroSection from '@/components/sections/HeroSection'
import MealsText from '@/components/sections/MealsText'
import NewsSection from '@/components/sections/NewsSection'
import StoryScreen from '@/components/sections/StoryScreen'
import Testimonial from '@/components/sections/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection/>
      <StoryScreen/>
      <MealsText/>
      <FoodShowCase/>
      <Testimonial/>
      <NewsSection/>
      <Contact/>
    </main>
  )
}
