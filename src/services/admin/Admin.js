import Axios from "../../config/axois/Axios";
export const AddProduct = async (dataToAdd) => {
  const data = new FormData();
  for (let key in dataToAdd) {
    if (dataToAdd.hasOwnProperty(key)) {
      let value = dataToAdd[key];
      data.append(`${key}`, value);
    }
  }

  const result = await Axios.post("prodcut/add-product", data)
    .then((res) => res)
    .catch((err) => err);
  return result;
};
