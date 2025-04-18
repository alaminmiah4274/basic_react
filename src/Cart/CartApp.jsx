import { useState } from "react";
import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";

const CartApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cart, setCart] = useState([]);

  /*
  const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 35000 },
    { name: "Watch", price: 8000 },
  ];
  */

  const addItem = (data) => {
    const existingItem = cart.find((item) => item.name === data.name);

    if (existingItem) {
      // update state array of object
      setCart(
        cart.map((item) =>
          item.name === data.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // add item
      setCart([
        ...cart,
        { name: data.name, price: parseFloat(data.price), quantity: 1 },
      ]);
    }
  };

  // increase item
  const increaseQuantity = (data) => {
    setCart(
      cart.map((item) =>
        item.name === data.name
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  // decrease items
  const decreaseQuantity = (data) => {
    setCart(
      cart
        .map((item) =>
          item.name === data.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // remove item
  const removeItem = (data) => {
    setCart(cart.filter((item) => item.name !== data.name));
  };

  // total price of all items
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="w-2/3 mx-auto bg-gray-100 rounded-lg shadow-md p-6 ">
      {/* Add Cart Items*/}
      <form onSubmit={handleSubmit(addItem)} className="mb-4 space-y-2">
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Item Name"
          className="border p-2 rounded w-full"
        />
        {errors.name && (
          <p className="text-xs text-red-500">this field is required</p>
        )}
        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Item Price"
          className="border p-2 rounded w-full"
        />
        {errors.price && (
          <p className="text-xs text-red-500">this field is required</p>
        )}

        <button className="w-full bg-blue-500 text-white rounded-sm px-2 py-1">
          Add Item
        </button>
      </form>

      {/*Cart Items List*/}
      {cart.length > 0 ? (
        <div>
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-2 rounded mb-2"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.price.toFixed(2)}</p>

              <div key={idx}>
                <button
                  onClick={() => decreaseQuantity(item)}
                  className="bg-red-500 text-white px-2"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item)}
                  className="bg-green-500 text-white px-2"
                >
                  +
                </button>
              </div>

              <Trash2 onClick={() => removeItem(item)} />
            </div>
          ))}

          {/*total price*/}
          <div className="mt-4 font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      ) : (
        <p>No Cart Items</p>
      )}
    </div>
  );
};

export default CartApp;

/*
## Explanation of reduce():

const arr = [1, 8, 3];

const totalSum = arr.reduce((sum, element) => (sum + element), 0);

## how map() and filter() remove the negative/conditioned element?
const arr = [1, 5, 7, 9];
const remaining = arr.map((item) => item === 7 ? item = 0 : item).filter(item => item > 0);

-- filter(item => item !== 0) -- 

*/
