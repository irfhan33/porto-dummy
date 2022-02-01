import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="bg-hero lg:h-[600px] md:h-[550px] h-[500px]">
          <div className="container mx-auto">
            <Navbar />
            <Hero />
          </div>
        </div>

        {/* Profile */}
        <Profile />

        {/* Skills */}
        <Skills />

        {/* Project */}
        <Project />

        {/* Contact */}

        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
