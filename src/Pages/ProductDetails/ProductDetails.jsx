import { CiStar, CiHeart } from "react-icons/ci";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const ProductDetails = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 p-4">
      <div className="grid md:grid-cols-2 gap-16">
        <img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="rounded-md"
        />
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-slate-200">Product name</h1>
          <p className="flex gap-2 items-center">
            <CiStar className="w-6 h-6" /> 4.7
          </p>
          <p className="text-base font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel
            explicabo sapiente autem vitae iste labore ullam veritatis unde
            consectetur esse sunt aspernatur beatae nisi assumenda earum, eos
            facere quam?
          </p>
          <p className="text-lg font-semibold">
            Price : <span>500</span> Tk
          </p>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2">
              <CiHeart className="w-6 h-6" /> 200
            </button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-full">
          <textarea
            name="review"
            id="review"
            className="w-full h-32 p-4 font-medium rounded-md resize-none border border-gray-500 outline-none bg-slate-600 bg-opacity-40"
            placeholder="Write a review for this specific product"
          ></textarea>
          <button className="btn btn-primary float-right mt-5 items-center">
            Send review
            <PiPaperPlaneTiltBold className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
