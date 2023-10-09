import { useFormik } from "formik";
import { useContext } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userLogin } from "../../lib/loginRequest";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email addres required"),
    password: Yup.string().required("Password required"),
  });

  // Add a state for error message

  /* 
    react query
  */

  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: (data) => userLogin(data),
    onSuccess: async (data) => {
      console.log(data);
      setUser(data.payload.user);
      navigate("/");
    },
  });

  // formik
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }) => {
      const data = {
        email,
        password,
      };
      await mutateAsync(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md outline-none"
            />
            {errors.email && touched.email && (
              <span className="text-red-700 pt-2 block">{errors.email}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 outline-none"
            >
              Password
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.password && touched.password && (
              <span className="text-red-700 pt-2 block">{errors.password}</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              disabled={isLoading ? true : false}
            >
              Log In
            </button>
          </div>
        </form>

        {isError && error && (
          <div className="mt-4 text-red-500 text-sm text-center">
            {error.message}
          </div>
        )}
        <div className="mt-4 flex justify-between text-sm text-center">
          <span>{"Don't have any account"}</span>{" "}
          <Link className="text-blue-700 underline" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
