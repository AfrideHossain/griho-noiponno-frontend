import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const ProductCard = () => {
  return (
    <div className="bg-white bg-opacity-15 card card-compact">
      <figure>
        <img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Product Name</h1>
        <div className="flex justify-between items-center gap-2">
          <p className="grow">
            Price: <span>500.00 Tk</span>
          </p>
          <p className="flex gap-2 items-center justify-end">
            <CiStar className="w-5 h-5" /> 5
          </p>
        </div>
        <p>
          Discount: <span>20</span>
          <span>%</span>
        </p>
        <div className="card-actions justify-between">
          <Link className="btn btn-outline" to={"/product"}>
            View Details
          </Link>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
