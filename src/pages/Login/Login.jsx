import Navbar from "../SharedPages/Navbar";
import login_image from "../../assets/images/login/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-gray-50">
        <Navbar></Navbar>
      </div>
      <div className="lg:flex justify-center items-center my-20">
        <div className="hidden lg:flex w-[450px]">
          <img src={login_image} alt="" />
        </div>
        <div className="lg:w-4/5 xl:w-2/6">
          <form className="">
            <h2 className="text-2xl font-bold text-center">
              Login to your account
            </h2>
            <div className="w-2/3 mx-auto mt-5">
              <h3 className="text-lg font-semibold mb-1">Your email</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="w-2/3 mx-auto mt-3">
              <h3 className="text-lg font-semibold mb-1">Password</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="w-2/3 mx-auto mt-7">
              <button className="bg-sky-600 text-white font-bold md:text-lg w-full rounded py-1.5">
                Login
              </button>
            </div>
          </form>
          <p className="w-2/3 mx-auto font-medium mt-3 text-gray-700 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-sky-600 hover:underline"
            >
              Register
            </Link>
          </p>
          <p className="text-lg font-semibold text-center my-4">------- or -------</p>
          <div className="w-max border mx-auto bg-white rounded-full hover:bg-slate-100">
            <Link>
              <button className="flex items-center justify-center gap-3 font-semibold py-2 px-5">
                <img
                  className="w-5"
                  src="https://i.ibb.co/Pj0MgcP/google.png"
                  alt=""
                />{" "}
                Login with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;