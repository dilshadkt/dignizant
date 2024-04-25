import React from "react";
import Drawer from "../Drawer/Drawer";
import Button from "../button/Button";
import profie from "../../assets/image/pngwing.com.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthentication } from "../../store/slice/AuthSlice/AuthSlice";
import { setCartItem } from "../../store/slice/cartSlice/CartSlice";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user.user);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  const Logout = () => {
    dispatch(setAuthentication(false));
    dispatch(setCartItem([]));

    navigate("/auth/login");
  };
  return (
    <Drawer width={400} id="ProfileDrawer">
      {isAuthenticated ? (
        <div className=" mt-6 flex flex-col items-center ">
          <div className="w-[150px] h-[150px] rounded-full ">
            <img src={profie} alt="user profile" className="opacity-45" />
          </div>
          <div className="border border-gray-400 rounded-xl p-3 mt-6 w-[90%]">
            <h4>{currentUser?.username}</h4>
          </div>
          <div className="border border-gray-400 rounded-xl p-3 mt-6 w-[90%]">
            <h4>{currentUser?.email}</h4>
          </div>
          <div onClick={() => Logout()} className="border   m-3 mt-6 w-[90%]">
            <Button value={"Logout"} />
          </div>
        </div>
      ) : (
        <div className="mt-2">
          <Button path="/auth/login" value={"Login"} />
        </div>
      )}
    </Drawer>
  );
};

export default Profile;
