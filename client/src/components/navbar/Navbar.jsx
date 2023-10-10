import { useContext, useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare, BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "../../lib/axiosInstance";
import { AuthContext } from "../../providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* 
    logout
  */
  const handleLogOut = async () => {
    try {
      await axios.get("/users/logout", {
        withCredentials: true,
      });
      setUser(null);
      setIsOpen(false);
    } catch (error) {
      // TODO: catch error and show
    }
  };

  return (
    <div
      className={`bg-[#F7F5EB] navbar ${
        isSticky ? "sticky z-[2] top-0 bg-[#FFFFFF] shadow-md text-dark" : ""
      } ${sidebarOpen ? "sidebar-open" : ""}`}
    >
      <div className="Grid py-2 px-4">
        <div className="navbar-wrapper z-[2]  flex justify-between items-center">
          <div className="navbar-inner w-3/12">
            <picture>
              <img src="../../assets/logo.png" alt="logo" />
            </picture>
          </div>
          <div className="navbar-inner flex justify-center w-5/12">
            <ul className="flex text-center z-[1]">
              {sidebarOpen && (
                <>
                  <div className="sidebar-logo mb-5 pt-10 flex justify-between items-center px-5">
                    <picture>
                      <img src="../../assets/logo.png" alt="logo" />
                    </picture>
                    <div className="close-button" onClick={toggleSidebar}>
                      <i>
                        <RxCross2 />
                      </i>
                    </div>
                  </div>
                </>
              )}
              <hr className="mx-5" />
              {sidebarOpen && (
                <div className="sidebar-input flex items-center px-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="sidebar-logo"
                  />
                </div>
              )}
              <li className="pr-8 font-bold">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="pr-8 font-bold">
                <a href="##">About</a>
              </li>
              <li className="pr-8 font-bold">
                <a href="##">Shop</a>
              </li>
              <li className="pr-8 font-bold">
                <a href="##">News</a>
              </li>

              <li className="pr-8 font-bold">
                <a href="##">Contact</a>
              </li>
              {user && user.role === "admin" && (
                <li className=" font-bold">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
              {sidebarOpen && (
                <div className="sidebar-icons items-center px-4">
                  <div>
                    <hr className="my-4" />
                    <i className="ml-3 flex items-center pb-4 font-medium">
                      <BsSearch /> <p>My Account</p>
                    </i>
                    <i className="ml-3 flex items-center pb-4 font-medium">
                      <BiUser /> <p>Wishlist</p>{" "}
                    </i>
                    <i className="ml-3 flex items-center pb-4 font-medium">
                      <PiShoppingCartDuotone />
                      <p>Shopping Cart</p>
                    </i>
                    <hr className="my-4" />
                    <div className="flex items-center sidebar-social my-10">
                      <i className="p-3 mr-4">
                        <FaFacebookF />
                      </i>
                      <i className="p-3 mr-4">
                        <FaTwitter />
                      </i>
                      <i className=" p-3 mr-4">
                        <BiLogoLinkedinSquare />
                      </i>
                      <i className="p-3 mr-4">
                        <AiFillInstagram />
                      </i>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className="navbar-innerRight flex justify-end items-center w-4/12">
            <a href="##" className="font-bold px-6 py-2 mr-2 ">
              GET A QUOTE
            </a>
            <div className="flex">
              <i className="ml-4">
                <BsSearch />
              </i>

              {user ? (
                <div className="ml-4 relative">
                  {/* <!-- User avatar --> */}
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    src={user.image}
                    className="object-cover w-8 h-8 md:w-6 md:h-6 cursor-pointer"
                    style={{ borderRadius: "50%" }}
                    alt="avater"
                  />

                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 min-w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-2">
                        <div className="px-4 py-3">
                          <h2 className="text-lg font-semibold">
                            {`${user.firstName} ${user.lastName}`}
                          </h2>
                          <p>{user.email}</p>
                        </div>
                        <div className="px-4 py-3">
                          <button
                            onClick={() => handleLogOut()}
                            className=" w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200 cursor-pointer"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link className="ml-4 px-3 py-1 rounded-2xl" to={"/login"}>
                  Login
                </Link>
              )}
              <i className="ml-4">
                <PiShoppingCartDuotone />
              </i>
            </div>
            <div
              className="hamburger-menu"
              data-toggle="collapse"
              onClick={toggleSidebar}
            >
              <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
              <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
              <div className={`bar ${sidebarOpen ? "open" : ""}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
