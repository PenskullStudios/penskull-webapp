import Link from "next/link";
import Image from "next/image";
import Heading from "./Heading";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row px-5 py-16 lg:px-16 gap-20">
      <div className="w-full md:w-5/6 lg:w-1/2">
        <Heading title="About Us" />
        <p className="text-xl mt-10">
          Innovation and technology should make life simple. That&apos;s why,
          here at Nimble Signals, we make sure innovation works for you, your
          business, and your people.
        </p>
        <p className="text-xl mt-7">
          Our reliable internet connection services enable you to enjoy your
          life more. Our technologies improve every day, so you can confidently
          focus on what really matters.
        </p>
        <div className="mt-10 flex flex-col gap-7 md:flex-row md:gap-4 justify-center lg:justify-start items-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-custom-purple to-custom-pink uppercase w-52 py-4 rounded-full font-bold">
              See our products
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gradient-to-r from-custom-purple to-custom-pink uppercase p-1 w-52 rounded-full font-bold">
              <span className="flex w-full py-3 justify-center bg-[#281549] rounded-full">
                Get in touch
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-5/6 lg:w-[45%] h-[32rem] relative">
        <Image
          src={"/about_us.webp"}
          alt="About us image"
          fill
          className="rounded-[5rem]"
        />
      </div>
    </div>
  );
}
