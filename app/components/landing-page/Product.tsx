import Image from "next/image";
import Button from "./Button";

export default function Product({ img, info }: { img: string; info: string }) {
  return (
    <div className="w-full md:w-3/5 lg:w-[30%]">
      <div className="h-[30rem] w-full relative">
        <Image src={img} alt="products image" fill className="rounded-[5rem]" />
        <p className="absolute bottom-24 text-center text-white uppercase text-4xl font-extrabold w-full px-10">
          {info}
        </p>
        <div className="absolute bottom-7 flex justify-center w-full">
          <Button info="find out more" link="/" />
        </div>
      </div>
    </div>
  );
}
