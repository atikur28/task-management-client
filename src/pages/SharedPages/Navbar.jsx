import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-700" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        {user ? (
          <p onClick={handleLogOut} className="cursor-pointer">
            Logout
          </p>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-700" : ""
            }
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-medium mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold lg:ml-20">
          TaskPulse
        </Link>
      </div>
      <div className="navbar-end flex justify-end items-center gap-5 lg:mr-20">
        <ul className="hidden lg:flex justify-center items-center gap-5 text-lg font-semibold">
          {navLinks}
        </ul>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img src={user?.photoURL} />
              ) : (
                <img src="https://i.ibb.co/whSBfc4/user.png" />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-medium shadow bg-base-100 rounded-box w-52"
          >
            <li>{user?.displayName}</li>
            <li><Link>Settings</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
