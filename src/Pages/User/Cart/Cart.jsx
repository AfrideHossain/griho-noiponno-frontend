// import { useContext } from "react";
// import { CartContext } from "./CartContext"; // Replace with your cart context path

const Cart = () => {
  // const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  // const { removeFromCart, updateQuantity } = useContext(CartContext);

  const cartItems = [
    {
      id: 1, // Unique identifier for the product
      name: "T-Shirt",
      image: "https://via.placeholder.com/150",
      price: 29.99,
      quantity: 2, // Number of units purchased
    },
    {
      id: 2,
      name: "Mug",
      image: "https://via.placeholder.com/150",
      price: 9.99,
      quantity: 1,
    },
    // ... other cart items
  ];

  // const handleRemoveItem = (id) => {
  //   removeFromCart(id);
  // };

  // const handleQuantityChange = (event, id) => {
  //   const newQuantity = parseInt(event.target.value, 10);
  //   updateQuantity(id, newQuantity);
  // };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full bg-gray-800 rounded-lg shadow-md px-4 py-6">
        <h2 className="text-xl text-white font-medium mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-center">Your cart is empty.</p>
        ) : (
          <ul className="list-none space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4 border-b border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg text-white font-medium">
                      {item.name}
                    </h3>
                    <span className="text-sm text-gray-400">
                      x{item.quantity}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg text-white font-medium">
                    ${item.price * item.quantity}
                  </span>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="input input-sm w-20 text-center text-gray-700 bg-gray-200 border border-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-error"
                      // onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-400">Total:</span>
            <span className="text-lg text-white font-medium">
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
