import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BrowsProduct from "./components/BrowsProduct/BrowsProduct";
import AuthLayout from "./layout/authLayout/AuthLayout";
import HomeLayout from "./layout/homeLayout/HomeLayout";
import Admin from "./pages/auth/Admin";
import Login from "./pages/auth/Login";
import Collection from "./pages/collection/Collection";
import Home from "./pages/home/Home";
function App() {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<BrowsProduct />} />
          <Route path="/products/collections" element={<Collection />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path="auth/login"
            element={
              isAuthenticated ? <Navigate to={"/"} replace /> : <Login />
            }
          />
          <Route
            path="auth/signin"
            element={
              isAuthenticated ? <Navigate to={"/"} replace /> : <Login />
            }
          />
          <Route
            path="auth/admin"
            element={
              isAuthenticated ? <Navigate to={"/"} replace /> : <Admin />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
