import { useFormik } from "formik";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { userRegisterProcess } from "../../lib/registerRequest";

const RegistrationForm = () => {
  /* 
    react query
  */

  const { mutateAsync, isLoading, isError, error, isSuccess } = useMutation({
    mutationFn: (data) => userRegisterProcess(data),
    onSuccess: async () => {},
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here (e.g., send data to server)
      mutateAsync(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-12 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        {formik.errors._error && (
          <div className="text-red-500 mb-4">{formik.errors._error}</div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 mt-1">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 mt-1">{formik.errors.lastName}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 mt-1">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 mt-1">{formik.errors.password}</div>
            )}
          </div>
          <div className="mb-4">
            <button
              disabled={isLoading ? true : false}
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
          {isError && (
            <p className="py-1 px-1 text-red-800 bg-red-400">{error.message}</p>
          )}
          {isSuccess && (
            <p className="py-1 px-1 text-white bg-blue-500">{`Go to your ${formik.values.email} to activate account`}</p>
          )}
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
