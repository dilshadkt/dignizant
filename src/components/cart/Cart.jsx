import React from "react";
import Drawer from "../Drawer/Drawer";

import CartItem from "../card/cart/CartItem";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  let subTotal = 0;
  if (cartItems.length !== 0) {
    subTotal = cartItems?.reduce((acc, curr) => acc + Number(curr.price), 0);
  }
  const shipping = (subTotal * 5) / 100;
  return (
    <Drawer width={400} id="CartDrawer">
      {cartItems.length === 0 ? (
        <>
          <p>purchage</p>
        </>
      ) : (
        <>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
              <div className="mb-6 sm:mb-10 lg:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Your Cart
                </h2>
              </div>
              {cartItems?.map((item) => (
                <CartItem itemDetails={item} key={nanoid()} />
              ))}
              {cartItems.length !== 0 && (
                <div className="flex flex-col items-end gap-4">
                  <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between gap-4 text-gray-500">
                        <span>Subtotal</span>
                        <span>${subTotal}</span>
                      </div>

                      <div className="flex justify-between gap-4 text-gray-500">
                        <span>Shipping</span>
                        <span>${shipping}</span>
                      </div>
                    </div>

                    <div className="mt-4 border-t pt-4">
                      <div className="flex items-start justify-between gap-4 text-gray-800">
                        <span className="text-lg font-bold">Total</span>

                        <span className="flex flex-col items-end">
                          <span className="text-lg font-bold">
                            ${subTotal + shipping}USD
                          </span>
                          <span className="text-sm text-gray-500">
                            including VAT
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Check out
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Drawer>
  );
};

export default Cart;
