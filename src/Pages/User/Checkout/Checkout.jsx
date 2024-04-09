import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
const Checkout = () => {
  const userdata = useLoaderData();
  //   console.log(userdata);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (checkOutInfo) => {
    console.log("Submitted Data", checkOutInfo);
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4">
      <form
        className="bg-gray-800 text-white p-8 md:w-3/4 border rounded my-auto"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <h1 className="mb-5 text-3xl text-center font-semibold">Checkout</h1>
        <label htmlFor="fullName" className="block font-bold mb-2">
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("fullName", {
            required: true,
            value: userdata.fullName,
          })}
        />

        <label htmlFor="phone" className="block font-bold mb-2">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("phone", { required: true, value: userdata.phone })}
        />

        <label htmlFor="email" className="block font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("email", { required: true, value: userdata.email })}
        />

        <label htmlFor="street" className="block font-bold mb-2">
          Street:
        </label>
        <input
          type="text"
          id="street"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("street", { required: true, value: userdata.street })}
        />

        <label htmlFor="district" className="block font-bold mb-2">
          District:
        </label>
        <input
          type="text"
          id="district"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("district", {
            required: true,
            value: userdata.district,
          })}
        />

        <label htmlFor="division" className="block font-bold mb-2">
          Division:
        </label>
        <input
          type="text"
          id="division"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("division", {
            required: true,
            value: userdata.division,
          })}
        />

        <label htmlFor="zip" className="block font-bold mb-2">
          Zip:
        </label>
        <input
          type="text"
          id="zip"
          className="bg-gray-700 text-white p-2 block w-full mb-6 rounded"
          {...register("zip", {
            required: true,
            value: userdata.zip,
          })}
        />

        <button
          type="submit"
          className="bg-gray-900 text-gray-300 font-medium p-3 w-full rounded hover:bg-slate-950"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
