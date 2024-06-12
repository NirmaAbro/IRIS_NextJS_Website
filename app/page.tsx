import Image from "next/image";
import bg from "../app/bgimg.jpg";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="flex justify-between items-center">
      <div className="fixed top-0 z-10 w-full" >
        <Navbar />
      </div>
      <div className="w-1/2">
        <Image
          src={bg} // Replace with your image path
          alt="Hero Image"
          layout="fill" // Fills the container
          objectFit="cover" // Crops to fit container while maintaining aspect ratio
        />
      </div>
    </section>
  );
}
