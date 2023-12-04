import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-start items-center gap-5">
      <Image src="/temp_logo.svg" alt="penskull logo" width={40} height={40} />
      <p className="uppercase text-lg tracking-wider font-semibold">
        Penskull Studios
      </p>
    </div>
  );
}
