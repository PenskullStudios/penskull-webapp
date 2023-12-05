import Image from "next/image";

export default function Faq({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <div className="w-full px-5 md:w-[50%] lg:w-[30%]">
      <div className="relative w-14 h-14">
        <Image src={image} alt="graphics image" fill />
      </div>
      <div className="w-full">
        <h4 className="text-xl font-semibold mt-5">{title}</h4>
        <p className="text-lg mt-3">{content}</p>
      </div>
    </div>
  );
}
