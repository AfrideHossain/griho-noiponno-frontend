// import useForm from react hook form
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosNoAuth from "../../../hooks/useAxiosNoAuth";
const AddProduct = () => {
  // destructure essentials from useFork
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  // destructure axiosSecure
  const axiosSecure = useAxiosSecure();
  const axiosNoAuth = useAxiosNoAuth();
  const submitHandler = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.productImage[0]);
    // uploading image to imgbb
    axiosNoAuth
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_APIKEY
        }`,
        formData
      )
      .then((res) => {
        const productImage = res.data.data.display_url;
        data.productImage = productImage;
        // console.log(data);
        axiosSecure.post("/products/addproduct", data).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.productName} Added`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={`w-full md:w-[768px] rounded-lg shadow-md px-6 py-8 flex flex-col gap-4 bg-white bg-opacity-10 border border-gray-600`}
      >
        <h2 className="text-2xl text-white font-bold">Add New Product</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("productName", { required: true })}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="text-sm text-gray-300">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("productDescription", { required: true })}
          ></textarea>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col space-y-2">
            <label htmlFor="category" className="text-sm text-gray-300">
              Category
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
              {...register("productCategory", { required: true })}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="price" className="text-sm text-gray-300">
              Stock
            </label>
            <input
              className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
              {...register("productStock", {
                required: true,
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="price" className="text-sm text-gray-300">
            Price
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("productPrice", {
              required: true,
              valueAsNumber: true,
            })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="image" className="text-sm text-gray-300">
            Image URL
          </label>
          {/* <input
            type="text"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("productImage", { required: true })}
          /> */}
          <input
            type="file"
            className="file-input rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            {...register("productImage", { required: true })}
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary disabled:opacity-50">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
