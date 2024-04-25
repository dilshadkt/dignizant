import Axios from "../../config/axois/Axios";
export const Signin = (formData) => {
  const result = Axios.post("auth/signin", formData)
    .then((res) => res)
    .catch((err) => err);
  return result;
};

export const Login = (formData) => {
  const result = Axios.post("auth/login", formData)
    .then((res) => res)
    .catch((Err) => console.log(Err));
  return result;
};

export const AdminLog = (formData) => {
  const result = Axios.post("auth/admin", formData)
    .then((res) => res)
    .catch((err) => err);
  return result;
};
