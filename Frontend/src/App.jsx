import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Footer/>
    </>
  )
}

export default App
