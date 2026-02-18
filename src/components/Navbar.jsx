import { BiMenuAltRight } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"register"}>Register</NavLink>
      </li>
    </>
  );
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(name);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <BiMenuAltRight size={30} />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
