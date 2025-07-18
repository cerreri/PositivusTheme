// import { motion, useInView } from "motion/react"
// import { useRef } from "react"
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  
  // const ref = useRef(null);
  // const isInView = useInView(ref, {once: true});

  return (
    <div className="bg-white pt-30 overflow-hidden">
      <ScrollToTop />
      <Header />
      <main className="w-full h-full flex flex-col sm:px-[7%] px-[1%] gap-20 justify-center overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
