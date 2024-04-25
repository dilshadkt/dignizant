import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Axios from "../../config/axois/Axios";
import SaleCard from "../saleCard/SaleCard";

import { useDispatch } from "react-redux";
import { setProducts } from "../../store/slice/Product/ProductSlice";
import ViewProducts from "../viewProducts/ViewProducts";

const LandPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("prodcut/products").then((res) =>
      dispatch(setProducts(res.data))
    );
  }, [dispatch]);
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                Find your
                <br />
                style online
              </h1>

              <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares characteristics of real text.
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                  loading="lazy"
                  alt=" by Kaung Htet"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
                  loading="lazy"
                  alt=" by Manny Moreno"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ViewProducts />
      <div className="bg-white py-6 sm:py-8 lg:py-12"></div>

      <SaleCard />
      <Footer />
    </>
  );
};

export default LandPage;
