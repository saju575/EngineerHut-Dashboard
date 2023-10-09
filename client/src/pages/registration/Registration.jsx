import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registraion = () => {
  return (
    <React.Fragment>
      <div id="registrationChiceElegance">
        <div className="login-form-container shadow-sm rounded bg-[#F0F0F0]">
          <h2 className="login-form-heading text-center text-4xl py-6 font-semibold">
            Registration
          </h2>
          <form>
            <div>
              <label
                htmlFor="username"
                className="login-form-label font-medium"
              >
                Username:
              </label>
              <input type="text" id="username" className="login-form-input" />
            </div>
            <div>
              <label htmlFor="email" className="login-form-label font-medium">
                Email:
              </label>
              <input type="email" id="email" className="login-form-input" />
            </div>
            <div>
              <label
                htmlFor="password"
                className="login-form-label font-medium"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="login-form-input"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="login-form-label font-medium"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="password"
                className="login-form-input"
              />
            </div>
            <button type="submit" className="login-form-button w-full mt-5">
              Registraion
            </button>
            <div className="mt-4">
              {" "}
              Already have an account?
              <Link to="/login" className="pl-5 text-gray-600 underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Registraion;
