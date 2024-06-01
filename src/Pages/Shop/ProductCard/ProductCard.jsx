/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  // get axiosSecure
  const axiosSecure = useAxiosSecure();
  // handlers
  const handleAddToCart = (id) => {
    axiosSecure
      .patch(`/users/addtocart/${id}`, { quantity: 1 })
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${product.productName} is added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="bg-white bg-opacity-15 card card-compact">
      <figure>
        <img
          // src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={product.productImage}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{product.productName}</h1>
        <div className="flex justify-between items-center gap-2">
          <p className="grow">
            Price: <span>{product.productPrice}</span>
          </p>
          <p className="flex gap-2 items-center justify-end">
            <CiStar className="w-5 h-5" /> 5
          </p>
        </div>
        {/* <p>
          Discount: <span>20</span>
          <span>%</span>
        </p> */}
        <p>
          In stock: <span>{product.productStock}</span>
        </p>
        <div className="card-actions justify-between">
          <Link className="btn btn-outline" to={`/product/${product._id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product._id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
