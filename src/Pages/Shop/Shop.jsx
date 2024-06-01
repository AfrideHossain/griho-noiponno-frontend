import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import SearchBox from "./SearchBox/SearchBox";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Shared/Loading/Loading";
// import SideBar from "./SideBar/SideBar";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // loading state
  const [loading, setLoading] = useState(false);
  // get axiosSecure to send request
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    axiosSecure.get("/products/allproducts").then(({ data }) => {
      console.log("data", data);
      setProducts(data);
      setLoading(false);
    });
  }, [axiosSecure]);
  return (
    <div className="md:max-w-7xl h-full p-4 mx-auto relative">
      <SearchBox />
      <div className="w-full h-full flex md:flex-row flex-col gap-10 justify-start items-start mt-20">
        {/* <SideBar /> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {loading && (
          <div className="p-4 mx-auto">
            <Loading />
          </div>
        )}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="btn btn-primary px-10">See more</button>
      </div>
    </div>
  );
};

export default Shop;
