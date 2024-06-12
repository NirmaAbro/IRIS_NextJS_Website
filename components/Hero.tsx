// components/Hero.tsx
import Image from "next/image";
import Navbar from "./Navbar"; // Assuming your Navbar component path

const Hero = () => {
  return (
    <section className="flex justify-between items-center">
      <Navbar />
      <div className="w-1/2">
        <Image
          src="/path/to/your/hero-image.jpg" // Replace with your image path
          alt="Hero Image"
          layout="fill" // Fills the container
          objectFit="cover" // Crops to fit container while maintaining aspect ratio
        />
      </div>
    </section>
  );
};

export default Hero;
