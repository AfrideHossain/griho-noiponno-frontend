import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OrderDetails = () => {
  const { orderId } = useParams();
  // order state
  const [order, setOrder] = useState({});

  // get axiosSecure
  const axiosSecure = useAxiosSecure();

  // get order with axiosSecure and set order state
  useEffect(() => {
    axiosSecure.get(`/order/${orderId}`).then((res) => {
      // console.log(res.data);
      setOrder(res.data);
    });
  }, [axiosSecure, orderId]);

  // order status handlers
  const handleOrderStatus = (status) => {
    axiosSecure
      .patch(`/orderstatus?orderId=${order._id}`, { status })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${res.data.msg}`,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            axiosSecure.get(`/order/${orderId}`).then((res) => {
              setOrder(res.data);
            });
          });
        }
      });
  };
  return (
    <div className="max-w-full min-h-screen my-4 p-4">
      <h1 className="text-3xl font-semibold text-gray-400 text-center">
        Order Details
      </h1>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        <div className="grid gap-5 w-full">
          {/* user info */}
          <div className="relative w-full min-h-full border border-gray-400 px-4 py-8 bg-white bg-opacity-15 rounded-md">
            <div
              className={`absolute uppercase badge badge-lg badge-${
                order.status === "confirmed"
                  ? "success"
                  : order.status === "denied"
                  ? "error"
                  : "info"
              } -top-0 -left-10 -rotate-45 py-4 px-6 font-semibold bg-opacity-70`}
            >
              {order.status}
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-semibold">{order.fullName}</h2>
              <h4>{order.phone}</h4>
              <h4 className="">{order.email}</h4>
              <h4 className="text-info">
                Ordered On&nbsp;
                <span className="break-words text-wrap">
                  {new Date(order.orderedDate).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  &nbsp; at&nbsp;
                  {new Date(order.orderedDate).toLocaleTimeString("en-us", {
                    minute: "numeric",
                    hour: "numeric",
                    hour12: true,
                  })}
                </span>
              </h4>
            </div>
          </div>

          {/* shipping address */}
          <div className="max-w-full min-h-full border border-gray-400 p-4 bg-white bg-opacity-15 rounded-md">
            {" "}
            <h1 className="text-2xl text-center font-semibold">
              Shipping address
            </h1>
            <div className="overflow-x-auto">
              <table className="table mt-2">
                <tbody>
                  <tr>
                    <td className="text-left">Street</td>
                    <td className="text-right">{order.street}</td>
                  </tr>

                  <tr>
                    <td className="text-left">District</td>
                    <td className="text-right">{order.district}</td>
                  </tr>

                  <tr>
                    <td className="text-left">Division</td>
                    <td className="text-right">{order.division}</td>
                  </tr>

                  <tr>
                    <td className="text-left">Zip</td>
                    <td className="text-right">{order.zip}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* order items */}
        <div className="md:col-span-2 h-full">
          <div className="w-full h-full border border-gray-400 p-4 bg-white bg-opacity-15 rounded-md col-span-2 row-span-2">
            {" "}
            <div className="w-full overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.cart?.map((product, index) => {
                    return (
                      <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={product.productImage}
                                  alt={product.productName}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">
                                {product.productName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{product.productCategory}</td>
                        <td>{product.quantity}</td>
                        <td>{product.productPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex flex-row md:flex-row gap-4 justify-end items-end py-4">
        <button
          className="btn btn-error w-32"
          onClick={() => {
            handleOrderStatus("denied");
          }}
        >
          Deny
        </button>
        <button
          className="btn btn-primary w-32"
          onClick={() => {
            handleOrderStatus("confirmed");
          }}
        >
          Confirm
        </button>
      </div>

      {/* order summary */}
      {/*  <div className="mt-5 border border-gray-400 bg-white bg-opacity-15 rounded-md p-4">
        <h1 className="text-2xl font-semibold">Order summary</h1>
        <div className="mt-3 flex items-start gap-5">
          <div className="">
            <h2 className="text-xl font-semibold mb-2">TO, </h2>
            <p>{order.fullName}</p>
            <p>{order.phone}</p>
            <p>{order.email}</p>
            <p>{`${order.street}, ${order.district}, ${order.division}, ${order.zip}`}</p>
          </div>
          <div className="overflow-x-auto">
            <h2 className="text-xl font-semibold mb-2">Ordered Items</h2>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order?.cart?.map((product, index) => {
                  return (
                    <tr key={product._id}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.productCategory}</td>
                      <td>{product.quantity}</td>
                      <td>{product.productPrice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OrderDetails;
