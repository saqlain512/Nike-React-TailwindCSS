import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id='products' className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
        <h1 className="font-bold font-palanquin text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="font-montserrat text-slate-900 lg:max-w-lg">
          A collection of popular Nike products that redefine style, performance, and innovation. Step into a world where cutting-edge technology meets timeless design, crafted to elevate your active lifestyle.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <div key={product.name}>
            <PopularProductsCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
