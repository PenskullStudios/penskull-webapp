import Link from "next/link";

export default function Button({ info, link }: { info: string; link: string }) {
  return (
    <Link href={link}>
      <button className="bg-gradient-to-r from-custom-purple to-custom-pink uppercase w-48 h-12 rounded-full font-bold">
        {info}
      </button>
    </Link>
  );
}
