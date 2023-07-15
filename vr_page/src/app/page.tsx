import CompanySection from "@/components/CompanySection"
import CompanyValues from "@/components/CultureSection"
import FeaturesSection from "@/components/FeaturesSection"
import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import TestimonialSection from "@/components/TestimonialSection"

export default function Home() {
  return (
    <div className="relative ">
      <Header />
      <main className="overflow-x-hidden ">
        <HeroSection />
        <FeaturesSection />
        <CompanySection />
        <TestimonialSection />
        <CompanyValues />
      </main>
    </div>
  )
}
