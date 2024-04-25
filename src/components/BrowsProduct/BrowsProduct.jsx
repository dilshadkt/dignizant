import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../../config/axois/Axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/slice/cartSlice/CartSlice";
import { useNavigate } from "react-router-dom";
const BrowsProduct = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    Axios.get(`prodcut/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const AddToCart = () => {
    if (isAuthenticated) {
      dispatch(setCart(product));
      Axios.post(`cart/product`, product)
        .then((res) => res)
        .catch((err) => console.log(err));
    } else {
      navigate("/auth/login");
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Animated Night Hill Illustrations
              </h1>
              <div className="flex mb-4">
                <Link className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </Link>
                <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </Link>
                <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </Link>
              </div>
              <p className="leading-relaxed mb-4">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">{product?.color}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">{product?.size}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <button
                  onClick={() => AddToCart()}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto h-64 flex items-center justify-center rounded overflow-hidden">
              <img alt="ecommerce" className="" src={product?.image} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowsProduct;
