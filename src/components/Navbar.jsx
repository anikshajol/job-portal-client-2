import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {user ? (
        <>
          {/* for applicant */}
          <li>
            <NavLink to={"my-applications"}>My Applications</NavLink>
          </li>
          {/* for recruiter */}
          <li>
            <NavLink to={"add-job"}>Add Job</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"register"}>Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfully");
        navigate("/login");
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
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          JobPortal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
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
