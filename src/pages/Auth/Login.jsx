import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const { signIn, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  // console.log(location)
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const inputEmail = form.email?.value;
    const password = form.password?.value;

    // console.log("login successful", { email, password });
    setError("");

    signIn(inputEmail, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Your Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
        form.reset();
      })
      .catch((err) => {
        console.log(err.code);

        if (err.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (err.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (err.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (err.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (err.code === "auth/too-many-requests") {
          toast.error(
            "Too many login attempts. Please wait and try again later."
          );
        } else if (err.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (err.code === "auth/missing-password") {
          toast.error("Please enter your password.");
        } else if (err.code === "auth/invalid-credential") {
          toast.error(
            "Invalid credentials. Please recheck your email or password."
          );
        } else {
          toast.error(
            err.message || "An unexpected error occurred. Please try again."
          );
        }
      });
  };

  // google sign in
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast(`Welcome ${user.displayName || "User"}!`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        if (err.code === "auth/account-exists-with-different-credential") {
          toast.error(
            "This email is already registered with another login provider. Please use that method."
          );
        } else {
          toast.error(err.message);
        }
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl text-orange-500 font-bold text-center mb-2">
          Login your account
        </h2>
        <div className=" flex items-center justify-center mt-8">
          <div className="border-b border-b-gray-300 h-px w-80"></div>
        </div>
        <form onSubmit={handleLogIn} className="card-body">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-orange-400 font-bold my-2">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="input input-bordered placeholder:text-gray-400"
              required
            />
          </div>
          {/* password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-orange-400 font-bold my-2">
                Password
              </span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered placeholder:text-gray-400"
              required
            />
            <span
              onClick={handleTogglePasswordShow}
              className="absolute top-[50px] right-5 md:right-6"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
            {/* forgot pass */}
            <label className="label my-2">
              <Link
                to="/auth/forgot-password"
                state={email ? { email } : null}
                className="label-text-alt link link-hover hover:text-orange-500"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control mt-6 ">
            <button disabled={!email} className="btn btn-style w-full">
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-gray-600/40"></div>
            <span className="text-sm text-gray-400/90">or</span>
            <div className="h-px w-16 bg-gray-600/40"></div>
          </div>

          {/* google signin */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>
        <p className="text-sm text-gray-500 font-semibold text-center">
          <span className="hover:text-orange-500">Don't Have An Account ?</span>

          <Link to="/auth/register">
            <span className="text-red-500 hover:font-bold"> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
