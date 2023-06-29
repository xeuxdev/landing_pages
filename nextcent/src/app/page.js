import Clients from "@/components/Clients"
import Community from "@/components/Community"
import Footer from "@/components/Footer/Footer"
import HeroSection from "@/components/HeroSection/HeroSection"
import Products from "@/components/Products"
import Updates from "@/components/Updates"

export default function Home() {
  return (
    <>
      <main className="font-inter">
        <HeroSection />
        <Clients />
        <Community />
        <Products />
        <Updates />
      </main>

      <Footer />
    </>
  )
}
