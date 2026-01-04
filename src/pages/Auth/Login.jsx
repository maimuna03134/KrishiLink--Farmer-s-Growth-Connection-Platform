import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const DEMO_EMAIL = "demo@krisilink.com";
const DEMO_PASSWORD = "Demo@1234";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    setError("");

    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else if (err.code === "auth/user-not-found") {
          toast.error("User not found.");
        } else if (err.code === "auth/wrong-password") {
          toast.error("Wrong password.");
        } else if (err.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Try later.");
        } else {
          toast.error("Login failed. Try again.");
        }
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success(`Welcome ${res.user.displayName || "User"}!`);
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Google sign-in failed");
      });
  };

  // Toggle password visibility
  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  // Demo auto-fill
  const handleDemoFill = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    toast.success("Demo credentials filled");
  };

  // Demo one-click login
  const handleDemoLogin = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);

    signIn(DEMO_EMAIL, DEMO_PASSWORD)
      .then((res) => {
        setUser(res.user);
        toast.success("Logged in as Demo User");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Demo login failed");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="text-2xl text-green-600 font-bold text-center mb-2">
          Login your account
        </h2>

        <form onSubmit={handleLogIn} className="card-body">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-600 font-bold">
                Email address
              </span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-green-600 font-bold">
                Password
              </span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <span
              onClick={handleTogglePasswordShow}
              className="absolute top-[50px] right-5 cursor-pointer"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>

            <label className="label">
              <Link
                to="/auth/forgot-password"
                state={email ? { email } : null}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {/* Login */}
          <button className="btn btn-style w-full mt-4">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-3">
            <div className="h-px w-16 bg-gray-400"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px w-16 bg-gray-400"></div>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 bg-white border px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Demo Buttons */}
          <button
            type="button"
            onClick={handleDemoFill}
            className="mt-3 w-full border border-green-600 text-green-600 py-2 rounded-lg font-semibold hover:bg-green-50"
          >
            Use Demo Credentials
          </button>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Login as Demo User
          </button>
        </form>

        <p className="text-sm text-gray-500 font-semibold text-center">
          Don’t have an account?
          <Link to="/auth/register">
            <span className="text-red-500 ml-1 hover:font-bold">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
