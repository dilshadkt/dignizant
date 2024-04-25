import React, { useState } from "react";
import ImageViewer from "../ImageViewer/ImageViewer";
import { useForm } from "react-hook-form";
import { AddProduct } from "../../services/admin/Admin";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/slice/Product/ProductSlice";
import { useNavigate } from "react-router-dom";
const Modal = ({ modalOpne }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const { register, watch, handleSubmit } = useForm();

  const addProduct = async () => {
    const dataToAdd = watch();
    dataToAdd.image = image;
    const result = await AddProduct(dataToAdd);
    if (result.status === 200) {
      modalOpne(false);
      dispatch(setProducts(result.data));
      navigation("/admin");
    }
  };
  return (
    <>
      <div
        onClick={() => modalOpne(false)}
        className="top-0 bottom-0 left-0 right-0  opacity-65 bg-black fixed"
      ></div>
      <div className="bg-white flex flex-col items-center fixed top-0 bottom-0 left-0 right-0 z-50 w-[30%] h-[80%] overflow-y-scroll m-auto p-5">
        <ImageViewer
          previewImage={previewImage}
          setImage={setImage}
          setPreviewImage={setPreviewImage}
        />
        <form className="w-full" onSubmit={handleSubmit(addProduct)}>
          <input
            type="text"
            {...register("product_name")}
            className="w-full p-2 border border-gray-500 my-2"
            placeholder="Product name"
            required
          />
          <input
            type="text"
            {...register("price")}
            className="w-full p-2 border border-gray-500 my-2"
            placeholder="price"
            required
          />
          <input
            type="text"
            {...register("size")}
            className="w-full p-2 border border-gray-500 my-2"
            placeholder="size"
            required
          />
          <input
            type="text"
            {...register("color")}
            className="w-full p-2 border border-gray-500 my-2"
            placeholder="color"
            required
          />
          <select
            {...register("category")}
            className="w-full border border-gray-500 p-2"
            required
          >
            <option value="men">MEN</option>
            <option value="women">WOMEN</option>
            <option value="kids">KIDS</option>
          </select>
          <button className="my-2 p-2 bg-blue-500 text-white  w-full">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
