import { useState } from "react";

const AddProduct = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass form data to parent component
    setFormData({
      name: "",
      price: 0,
      category: "",
      stock: 0,
      description: "",
      image: "",
    }); // Reset form after submission
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`w-full md:w-[768px] rounded-lg shadow-md px-6 py-8 flex flex-col gap-4 bg-white bg-opacity-10 border border-gray-600`}
      >
        <h2 className="text-2xl text-white font-bold">Add New Product</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="text-sm text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col space-y-2">
            <label htmlFor="category" className="text-sm text-gray-300">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="price" className="text-sm text-gray-300">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="price" className="text-sm text-gray-300">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="image" className="text-sm text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full px-3 py-2 rounded-md bg-gray-600 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
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
