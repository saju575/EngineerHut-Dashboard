import "./Topbar.css";

import { BsDribbble } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const TopBar = () => {
  return (
    <div className="bg-[#F7F5EB] md:block hidden">
      <div className="Grid">
        <div className="topbar-wrapper py-2 px-8 flex justify-between">
          <div className="topbar-inner flex">
            <div className="flex items-center pr-10">
              <i className="pr-2 green">
                <TfiLocationPin />
              </i>
              <p className="font-bold">15/A, Nest Tower, NYC</p>
            </div>
            <div className="flex items-center">
              <i className="pr-2 green">
                <MdOutlineMail />
              </i>
              <p className="font-bold">info@webmail.com</p>
            </div>
          </div>
          <div className="topbar-inner">
            <div className="topbar-innerRes flex items-center space-x-4 py-1">
              <i>
                <FaFacebookF />
              </i>
              <i className="pl-2">
                <FaTwitter />
              </i>
              <i className="pl-2">
                <FaInstagram />
              </i>
              <i className="pl-2">
                <BsDribbble />
              </i>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopBar;
