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
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
