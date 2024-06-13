import Image from "next/image";
import bg from "../app/background.png";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-10"
      />
    </div>
  );
};

export default Hero;
