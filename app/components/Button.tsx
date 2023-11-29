import Link from "next/link";

export default function Button({ info, link }: { info: string; link: string }) {
  return (
    <Link href={link}>
      <button className="btn btn-neutral">{info}</button>
    </Link>
  );
}
