import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, setUser, signInWithGoogle, updateProfileInfo } =
    use(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value;
    const photo = form.photo?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    // console.log("clicked", { name, photo, email, password });

    setError("");

    // pass validation
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (!uppercase.test(password)) {
      setError("Password must include at least one uppercase letter.");
      return;
    }
    if (!lowercase.test(password)) {
      setError("Password must include at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // create user
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setUser(user);
        form.reset();

        updateProfileInfo({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success(
              `Registration successful! Welcome ${name || "User"}!`
            );
            navigate("/");
          })
          .catch((err) => {
            console.error("Profile update error:", err);
          });
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/email-already-in-use") {
          toast.error(
            "Oops! That email is already taken. Please try logging in instead."
          );
        } else if (e.code === "auth/weak-password") {
          toast.error("You need to add at least 6 characters!");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
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
        <h2 className="text-2xl text-green-600 hover:text-green-700 font-bold text-center mb-2">
          Register your account
        </h2>
        <div className=" flex items-center justify-center mt-8">
          <div className="border-b border-b-gray-300 h-px w-80"></div>
        </div>

        <form onSubmit={handleRegister} className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-500 hover:text-green-700 font-bold my-2">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered placeholder:text-gray-400"
              required
            />
          </div>
          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-500 hover:text-green-700 font-bold my-2">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered placeholder:text-gray-400"
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-500 hover:text-green-700 font-bold my-2">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered placeholder:text-gray-400"
              required
            />
          </div>
          {/* password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-green-500 hover:text-green-700 font-bold my-2">
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
              className="absolute top-[50px] right-7"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}
          {/* register button */}
          <div className="form-control mt-6 ">
            <button type="submit" className="btn btn-style w-full">
              Register
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
          <span className="hover:text-red-500 ">
            Already Have An Account ?{" "}
          </span>
          <Link to="/auth/login">
            <span className="text-red-500 hover:font-bold"> Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
