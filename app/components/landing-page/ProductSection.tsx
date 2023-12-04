import Product from "./Product";

const products = [
  { img: "/product_1.webp", info: "Internet Plans" },
  { img: "/product_2.webp", info: "Accessories" },
  { img: "/product_3.webp", info: "Bundles" },
];

export default function ProductSection() {
  return (
    <div className="px-5 py-16 lg:px-16">
      <h1 className="uppercase white-neon text-5xl text-center lg:text-left lg:text-7xl tracking-wide animate-ease-in animate-fade">
        Our Products
      </h1>
      <div className="flex flex-col lg:flex-row gap-14 justify-center items-center mt-14">
        {products.map((ele, i) => {
          return <Product key={i} img={ele.img} info={ele.info} />;
        })}
      </div>
    </div>
  );
}
