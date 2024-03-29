/* eslint-disable react/prop-types */

// essential icons
import { HiX } from "react-icons/hi";
const ProductTable = ({ products, loading }) => {
  return (
    <>
      <div className="flex flex-col shadow-md rounded-lg overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra table-md">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, indx) => {
                return (
                  <tr key={indx}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.productImage}
                            alt="Product image avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.productCategory}</td>
                    <td>${product.productPrice}</td>
                    <td>{product.productStock}</td>

                    <td className="flex justify-end space-x-2">
                      <button
                        className="btn bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700 outline-none"
                        onClick={() =>
                          document
                            .getElementById("updateProductModal")
                            .showModal()
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 outline-none"
                        onClick={() => {}}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th className="text-right">Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* product edit modal */}
      <dialog id="updateProductModal" className="modal">
        <div className="modal-box relative">
          <h2 className="text-xl text-white font-bold mb-5">Edit Product</h2>
          <form className={`w-full rounded-lg flex flex-col gap-4`}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm text-gray-300">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 rounded-md bg-gray-700 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Product Name"
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
                className="w-full px-3 py-2 rounded-md bg-gray-700 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Write a description for your product."
                required
              ></textarea>
            </div>

            <div className="join gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="category" className="text-sm text-gray-300">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Category"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="stock" className="text-sm text-gray-300">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  className="w-full px-3 py-2 rounded-md bg-gray-700 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Stock"
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
                className="w-full px-3 py-2 rounded-md bg-gray-700 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Price"
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
                className="w-full px-3 py-2 rounded-md bg-gray-700 border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`btn btn-primary disabled:opacity-50 ${
                  loading ? "loading" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute top-0 right-0 btn btn-ghost">
                <HiX className="w-6 h-6 text-red-500" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProductTable;
