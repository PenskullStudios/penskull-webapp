import Image from "next/image";
import Button from "./Button";
import Logo from "./Logo";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:flex-row px-5 py-16 lg:px-16">
      <div className="w-full md:w-5/6 lg:w-1/2">
        <Logo />
        <h1 className="uppercase text-center lg:text-left text-6xl md:text-8xl xl:text-9xl mt-28 white-neon animate-fade animate-ease-in">
          Here to connect
        </h1>
        <p className="uppercase text-2xl text-center lg:text-left lg:text-3xl mt-5 mb-20 font-bold pink-neon">
          Untangle the web with us
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button info="connect here" link="/" />
        </div>
      </div>
      <div className="w-full md:w-5/6 lg:w-1/2 animate-fade-up animate-delay-[20ms] animate-ease-in">
        <div className="flex items-center justify-center gap-14 mt-10">
          <div className="w-60 h-56 relative">
            <Image src={"/cube.webp"} alt="cube image" fill />
          </div>
          <div className="w-32 h-32 relative">
            <Image src={"/diamond.webp"} alt="diamond image" fill />
          </div>
        </div>
        <div className="flex items-center justify-center gap-7">
          <div className="w-64 h-64 relative mt-20">
            <Image src={"/circle.webp"} alt="cube image" fill />
          </div>
          <div className="w-48 h-48 relative">
            <Image src={"/star.webp"} alt="diamond image" fill />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
