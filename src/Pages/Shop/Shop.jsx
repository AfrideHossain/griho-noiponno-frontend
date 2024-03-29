import ProductCard from "./ProductCard/ProductCard";
import SearchBox from "./SearchBox/SearchBox";
// import SideBar from "./SideBar/SideBar";

const Shop = () => {
  return (
    <div className="md:max-w-7xl h-full p-4 mx-auto relative">
      <SearchBox />
      <div className="w-full h-full flex md:flex-row flex-col gap-10 justify-start items-start mt-20">
        {/* <SideBar /> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="btn btn-primary px-10">See more</button>
      </div>
    </div>
  );
};

export default Shop;
