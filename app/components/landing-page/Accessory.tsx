import Image from "next/image";

export default function Accessory({
  image,
  info,
  price,
}: {
  image: string;
  info: string;
  price: string;
}) {
  return (
    <div className="w-full lg:w-1/2">
      <div className="w-full md:w-full h-80 relative">
        <Image
          src={image}
          alt="acessory images"
          fill
          className="rounded-[3rem]"
        />
      </div>
      <h2 className="text-custom-pink text-3xl font-bold mt-7">{info}</h2>
      <h4 className="text-lg mt-1 font-bold">{price}</h4>
    </div>
  );
}
