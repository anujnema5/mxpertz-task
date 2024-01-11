import Contact from '@/components/Contact'
import FoodShowCase from '@/components/FoodShowCase'
import HeroSection from '@/components/HeroSection'
import MealsText from '@/components/MealsText'
import NewsSection from '@/components/NewsSection'
import StoryScreen from '@/components/StoryScreen'
import Testimonial from '@/components/Testimonial'
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
