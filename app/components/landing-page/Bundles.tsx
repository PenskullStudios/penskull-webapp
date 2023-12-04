import Bundle from "./Bundle";
import Heading from "./Heading";

const bundles = [
  {
    image: "/bundle_1.webp",
    info: "For those who getting started",
    plan: "Starter package",
    price: "$123",
  },
  {
    image: "/bundle_2.webp",
    info: "For those with kids",
    plan: "Family Package",
    price: "$123",
  },
  {
    image: "/bundle_3.webp",
    info: "For those with teams",
    plan: "Corporate Package",
    price: "$123",
  },
];

export default function Bundles() {
  return (
    <div className="px-5 py-16 lg:px-16">
      <Heading title="Bundles" />
      <div className="mt-16 flex flex-col justify-center items-center lg:flex-row gap-10">
        {bundles.map((ele, i) => {
          return (
            <Bundle
              key={i}
              image={ele.image}
              info={ele.info}
              plan={ele.plan}
              price={ele.price}
            />
          );
        })}
      </div>
    </div>
  );
}
