import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Basic validation for email
    if (name === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
            errorMessage = 'Email is required';
        } else if (!emailPattern.test(value)) {
            errorMessage = 'Invalid email address';
        }
    }

    // Basic validation for password
    if (name === 'password') {
        if (!value.trim()) {
            errorMessage = 'Password is required';
        } else if (value.length < 6) {
            errorMessage = 'Password must be at least 6 characters long';
        }
    }

    // Update the state with the new form data and error message
    setFormdata({
      ...formdata,
      [name]: value,
    });
    // Update error state if needed
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const baseurl = "http://127.0.0.1:8000";

  const axiosintance = axios.create({
    baseURL: baseurl,
  });

  const hadlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosintance.post("/api/login/", formdata);
      console.log(formdata, "5656565");
      if (res.status === 200) {
        navigate("/hompage");
        console.log("sucess");
      }
    } catch (error) {
      console.log("erorro");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={hadlesubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handlechange}
                  value={formdata.email}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handlechange}
                  value={formdata.password}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
            <div>
              <Link
                to="/signup"
                className="text-indigo-600 text-sm font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
