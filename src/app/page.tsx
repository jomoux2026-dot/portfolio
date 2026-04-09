import { HeroSection } from '@/components/sections/HeroSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { StrengthsSection } from '@/components/sections/StrengthsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AboutSection } from '@/components/sections/AboutSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <StrengthsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  )
}
