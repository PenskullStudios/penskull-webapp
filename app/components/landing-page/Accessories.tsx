import Accessory from "./Accessory";
import Heading from "./Heading";

const acs = [
  { image: "/acs_1.webp", info: "Router Set", price: "$123" },
  { image: "/acs_2.webp", info: "Network Extender", price: "$123" },
];

export default function Accessories() {
  return (
    <div className="px-5 py-16 lg:px-16">
      <Heading title="Accessories" />
      <div className="mt-16 flex w-full flex-col justify-center items-center lg:justify-between lg:flex-row gap-20">
        {acs.map((ele, i) => {
          return (
            <Accessory
              key={i}
              image={ele.image}
              info={ele.info}
              price={ele.price}
            />
          );
        })}
      </div>
    </div>
  );
}
