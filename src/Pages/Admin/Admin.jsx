import ProductTable from "./ProductTable/ProductTable";

const Admin = () => {
  // prodcts list
  const products = [
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
    // Add more products as needed
  ];

  return (
    <>
      <ProductTable products={products} />
    </>
  );
};

export default Admin;
