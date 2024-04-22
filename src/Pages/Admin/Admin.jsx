import {useEffect, useState } from "react";
import OrderList from "./OrderList/OrderList";
import ProductTable from "./ProductTable/ProductTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Admin = () => {
  // prodcts list
  /* const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 29.99,
      stock: 50,
      image: "https://via.placeholder.com/150",
      description: "A comfortable and stylish T-shirt for everyday wear.",
    },
    {
      id: 2,
      name: "Laptop",
      price: 799.99,
      stock: 50,
      image: "https://via.placeholder.com/250",
      description: "A powerful laptop for work, school, or entertainment.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 99.99,
      stock: 50,
      image: "https://via.placeholder.com/150",
      description: "Noise-canceling headphones for immersive listening.",
    },
  ]; */

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // get axiosSecure to send request to api
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setLoading(true);
    axiosSecure.get("/products/allproducts").then((res) => {
      console.log("data fetched => ", res.data);
      setProducts(res.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  // socket related things
  // const { socket } = useContext(SocketContext);

  // console.log(socket);

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-2xl py-3 font-bold">Product List</h1>
      <ProductTable products={products} />
      <h1 className="text-2xl py-3 font-bold">New Order Request</h1>
      <OrderList />
    </div>
  );
};

export default Admin;
