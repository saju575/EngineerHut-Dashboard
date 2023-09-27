import { Fragment, useState } from "react";
import { FaBell, FaMoon } from "react-icons/fa6";
import avater from "../../../assets/img/avater.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // handle search bar
  // const handleSearchBar = (e) => {
  //   e.preventDefault();
  // };
  return (
    <Fragment>
      <nav className="bg-white py-3 shadow-sm">
        <div className="flex justify-between pl-3 pr-3 md:pr-6  mx-auto">
          {/* <!-- Left elements --> */}
          {/* <!-- search bar --> */}
          <div>
            {/* <form onSubmit={handleSearchBar}>
              <div className="">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 py-1 rounded-l bg-gray-200 text-gray-800 focus:border-none focus:outline-none w-1/2 md:w-8/12"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded-r bg-blue-500 hover:bg-blue-600"
                >
                  🚀
                </button>
              </div>
            </form> */}
          </div>

          {/* <!-- Right elements --> */}
          <div className="relative flex items-center justify-end space-x-3 w-1/2 md:w-2/5">
            {/* <!-- Bell  --> */}
            <div className="relative">
              {/* <!-- Bell icon --> */}
              <span className="text-lg cursor-pointer">
                <FaBell className="text-gray-600" />
              </span>

              {/* <!-- Notification arrive indication --> */}
              <div className={`absolute rounded-full ${styles.bell}`}></div>
            </div>

            {/* <!-- theme change icon --->*/}
            <div className="cursor-pointer text-lg">
              <FaMoon />
            </div>

            {/* <!-- small avater--> */}
            <div>
              {/* <!-- User avatar --> */}
              <img
                src={avater}
                className="object-cover w-8 h-8 md:w-6 md:h-6"
                style={{ borderRadius: "50%" }}
                alt="avater"
                onClick={toggleDropdown}
              />

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                  <ul className="space-y-1">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Profile Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Main navigation bottom line --> */}
      <div className={`${styles.navLine}`}></div>
    </Fragment>
  );
};

export default Navbar;
