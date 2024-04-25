import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../../config/axois/Axios";
import { setCartItem } from "../../../store/slice/cartSlice/CartSlice";
const CartItem = ({ itemDetails }) => {
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const Remove = (id) => {
    const filterd = cart.filter((item) => item._id !== id);
    dispatch(setCartItem(filterd));
    Axios.delete(`cart/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
      <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
        <Link
          to={"#"}
          className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40"
        >
          <img
            src={itemDetails?.image}
            loading="lazy"
            alt=" by Thái An"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </Link>

        <div className="flex flex-1 flex-col justify-between py-4">
          <div>
            <Link
              to="#"
              className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              {itemDetails.product_name}
            </Link>

            <span className="block text-gray-500">
              Size: {itemDetails.size}
            </span>
            <span className="block text-gray-500">
              Color: {itemDetails.color}
            </span>
          </div>

          <div>
            <span className="mb-1 block font-bold text-gray-800 md:text-lg">
              ${itemDetails.price}
            </span>

            <span className="flex items-center gap-1 text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              In stock
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => Remove(itemDetails._id)}
        className="w-full bg-blue-500 text-white rounded-lg py-2"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
