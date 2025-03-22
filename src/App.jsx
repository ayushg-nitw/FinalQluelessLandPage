import { useEffect } from "react";
import "./index.css";
import AnimationScreen from "./components/AnimationScreen.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Info from "./components/Info.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    // Initially, prevent scrolling
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.classList.add("start-transition");
    }, 700);

    setTimeout(() => {
      document.body.style.overflow = "auto"; // Enable scrolling after animation
    }, 1400);
  }, []);

  return (
    <>
      <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Waitlist Section - Snaps Full Screen */}
        <section className="h-screen w-full snap-start">
          <Waitlist />
        </section>

        {/* WhiteScreen - Covers Waitlist Initially */}
        <div className="absolute inset-0 white-screen"></div>

        <AnimationScreen />

        {/* Info Section - Normal Scroll (Multiple Screens of Content) */}
        <section className="w-full min-h-[300vh] snap-start">
          <Info />
        </section>

        {/* Footer - Snaps after full Info Section */}
        <section className="h-screen w-full snap-start">
          <Footer />
        </section>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
