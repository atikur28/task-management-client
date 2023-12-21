import { Link, useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import login_image from "../../assets/images/login/login.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be in 6 character!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case character!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError(
        "Your password should have at least one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Good job!",
            text: "You have registered successfully!",
            icon: "success",
          });
          form.reset();
          navigate("/");
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
            .then((result) => {
              console.log(result.user);
            })
            .catch((error) => {
              setRegisterError(error.message);
            });
        }
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="bg-sky-700">
        <Navbar></Navbar>
      </div>
      <div className="lg:flex justify-center items-center my-20">
        <div className="hidden lg:flex w-[450px]">
          <img src={login_image} alt="" />
        </div>
        <div className="lg:w-4/5 xl:w-2/6">
          <form onSubmit={handleRegister} className="">
            <h2 className="text-2xl font-bold text-center">
              Register to your account
            </h2>
            <div className="w-2/3 mx-auto mt-5">
              <h3 className="text-lg font-semibold mb-1">Your name</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Your name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="w-2/3 mx-auto mt-5">
              <h3 className="text-lg font-semibold mb-1">Your photo url</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Your photo link"
                type="text"
                name="photo"
                required
              />
            </div>
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
                Register
              </button>
            </div>
          </form>
          {registerError && (
            <p className="text-red-600 font-semibold text-center">
              {registerError}
            </p>
          )}
          <p className="w-2/3 mx-auto font-medium mt-3 text-gray-700 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/login"
              className="font-medium text-sky-600 hover:underline"
            >
              Login
            </Link>
          </p>
          <p className="text-lg font-semibold text-center my-4">
            ------- or -------
          </p>
          <div className="w-max border mx-auto bg-white rounded-full hover:bg-slate-100">
            <Link>
              <button className="flex items-center justify-center gap-3 font-semibold py-2 px-5">
                <img
                  className="w-5"
                  src="https://i.ibb.co/Pj0MgcP/google.png"
                  alt=""
                />{" "}
                Register with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
