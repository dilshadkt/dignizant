import React, { useEffect } from "react";
import LandPage from "../../components/LandPage/LandPage";
import Axios from "../../config/axois/Axios";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../store/slice/cartSlice/CartSlice";
import { setUser } from "../../store/slice/User/UserSlice";
const Home = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  useEffect(() => {
    isAuthenticated &&
      Axios.get("cart/products")
        .then((res) => dispatch(setCartItem(res.data)))
        .catch((err) => console.log(err));
    isAuthenticated &&
      Axios.get("user/me").then((res) => dispatch(setUser(res.data)));
  }, [dispatch, isAuthenticated]);
  return <LandPage />;
};

export default Home;
