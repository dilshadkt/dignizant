import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AdminLog, Login, Signin } from "../../services/Auth/Auth";
import { setAuthentication } from "../../store/slice/AuthSlice/AuthSlice";
import { setTokekn } from "../../store/slice/User/UserSlice";
const AuthForm = () => {
  const { register, reset, watch } = useForm();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname;
  const handleAuth = async (e) => {
    setError(false);
    e.preventDefault();

    const result = currentLocation.includes("signin")
      ? await Signin(watch())
      : currentLocation.includes("admin")
      ? await AdminLog(watch())
      : await Login(watch());

    if (result?.status === 200) {
      reset();
      navigate("/");
      dispatch(setTokekn(result?.data?.token));
      dispatch(setAuthentication(true));
    } else if (result?.status === 203) {
      navigate("/admin");
      dispatch(setTokekn(result?.data?.token));
      // dispatch(setAuthentication(true));
    } else {
      setError(result?.response?.data?.message);
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 h-full md:px-8 flex justify-center flex-col">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          {currentLocation.includes("signin")
            ? "Signin"
            : currentLocation.includes("admin")
            ? "Admin"
            : "Login"}
        </h2>
        <form
          onSubmit={handleAuth}
          className="mx-auto  shadow-xl min-w-[500px] max-w-lg rounded-lg border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              {currentLocation.includes("signin") && (
                <>
                  <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    User Name
                  </label>
                  <input
                    {...register("username")}
                    required
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </>
              )}
              <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                Email
              </label>
              <input
                {...register("email")}
                required
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                Password
              </label>
              <input
                {...register("password")}
                required
                type="password"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            {error && <p className="my-2 text-red-500 font-medium">{error}</p>}
            <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              Log in
            </button>
          </div>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              {currentLocation.includes("login")
                ? "Don't have an account?"
                : "Already have an account ?"}
              <Link
                to={
                  currentLocation.includes("login")
                    ? "/auth/signin"
                    : "/auth/login  "
                }
                className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                {currentLocation.includes("signin") ? "Login" : "Register"}
              </Link>
            </p>
          </div>
        </form>
        {!currentLocation.includes("admin") && (
          <div className="w-full text-center text-blue-500 cursor-pointer mt-2 hover:underline hover:font-medium">
            <Link to={"/auth/admin"}>Admin</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
