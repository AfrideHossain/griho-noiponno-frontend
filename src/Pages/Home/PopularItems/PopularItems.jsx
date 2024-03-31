import { useEffect, useState } from "react";
import Heading from "../../../Shared/Heading/Heading";
import SmallCard from "../../../Shared/SmallCard/SmallCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PopularItems = () => {
  // set products state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // get axiosSecure from useAxiosSecure hook
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    /** Get popular items data */
    axiosSecure.get("/products/allproducts").then(({ data }) => {
      setProducts(data);
      setLoading(false);
    });
  }, [axiosSecure]);
  return (
    <div
      className="mx-auto md:mt-40 max-w-full p-4"
      style={{ width: "1280px" }}
    >
      <Heading title={"A Huge Collection Of Furnitures"} />
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-center md:justify-between">
        {products?.map((product) => (
          <SmallCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
