import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const OrderList = () => {
  // orders state
  const [orders, setOrders] = useState([]);
  // get axiosSecure
  const axiosSecure = useAxiosSecure();
  // load orders with axiosSecure
  useEffect(() => {
    axiosSecure
      .get("/getneworders")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);
  // delete order

  // update order

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Shipping Address</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {orders?.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>
                {order._id}{" "}
                {order.status === "pending" && (
                  <span className="badge badge-success ms-2">New</span>
                )}
              </td>
              <td>{order.fullName}</td>
              <td>
                {order.street}, {order.district}
              </td>
              <td>
                {order.cart.reduce((total, product) => {
                  return total + product.productPrice;
                }, 0)}
              </td>
              <td>
                <Link className="btn btn-info" to={`/admin/order/${order._id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
          {/* <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
