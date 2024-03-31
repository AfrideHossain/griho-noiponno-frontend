import { CiStar, CiHeart } from "react-icons/ci";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import ReviewCard from "./ReviewCard/ReviewCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProductDetails = () => {
  // get params from url
  const params = useParams();

  // declare product state
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // get axiosSecure
  const axiosSecure = useAxiosSecure();

  //  fetch data when component mounts
  useEffect(() => {
    axiosSecure.get(`products/product/${params.id}`).then((res) => {
      console.log("[Products Details]: ", res.data);
      setProduct(res.data);
      setLoading(false);
    });
  }, [axiosSecure, params.id]);
  return (
    <div className="max-w-7xl mx-auto mt-20 p-4">
      <div className="grid md:grid-cols-2 gap-16">
        <img
          // src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={product?.productImage}
          alt=""
          className="rounded-md"
        />
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-slate-200">
            {product?.productName}
          </h1>
          <p className="flex gap-2 items-center">
            <CiStar className="w-6 h-6" /> 4.7
          </p>
          <p className="text-base font-medium text-gray-500">
            {product?.productDescription}
          </p>
          <p className="text-lg font-semibold">
            Price : <span>{product?.productPrice}</span> Tk
          </p>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2">
              <CiHeart className="w-6 h-6" /> 200
            </button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
      {/* review input section */}
      <div className="mt-20">
        <div className="w-full">
          <textarea
            name="review"
            id="review"
            className="w-full h-32 p-4 font-medium rounded-md resize-none border border-gray-500 outline-none bg-slate-600 bg-opacity-40"
            placeholder="Write a review for this specific product"
          ></textarea>
          <div className="w-full mt-5 flex justify-end">
            <button className="btn btn-primary items-center">
              Send review
              <PiPaperPlaneTiltBold className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* All review section */}
      <div className="mt-20">
        <h1 className="text-xl font-bold mb-10">Previous Reviews</h1>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ProductDetails;
