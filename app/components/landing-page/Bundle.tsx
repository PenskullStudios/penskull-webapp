import Image from "next/image";

export default function Bundle({
  image,
  info,
  plan,
  price,
}: {
  image: string;
  info: string;
  plan: string;
  price: string;
}) {
  return (
    <div className="w-full md:w-3/5 lg:w-[30%]">
      <div className="w-full h-64 relative">
        <Image
          src={image}
          alt="bundle image"
          fill
          className="rounded-[3.5rem]"
        />
      </div>
      <h3 className="uppercase mt-8">{info}</h3>
      <h2 className="text-custom-pink text-3xl font-bold mt-3">{plan}</h2>
      <h4 className="text-lg mt-1 font-bold">{price}</h4>
    </div>
  );
}
