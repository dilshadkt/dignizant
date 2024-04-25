import Axios from "../../config/axois/Axios";
export const getProducts = () => {
  const result = Axios.get("prodcut/products")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

export const addItem = async (item) => {
  console.log(item);
  const result = await Axios.post("cart/product", { id: item })
    .then((res) => res)
    .catch((err) => console.log(err));
  return result;
};
