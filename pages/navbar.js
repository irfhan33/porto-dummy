import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function navbar() {
  return (
    <>
      <div className="container mx-auto bg-hero lg:h-[600px] md:h-[550px] h-[500px]">
        <Hero />
      </div>
    </>
  );
}
