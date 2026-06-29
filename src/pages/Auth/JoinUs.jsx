import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const JoinUs = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { createUser, setUser, signInWithGoogle, updateProfileInfo } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (!/[A-Z]/.test(password)) return setError("Password must include at least one uppercase letter.");
    if (!/[a-z]/.test(password)) return setError("Password must include at least one lowercase letter.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        form.reset();
        updateProfileInfo({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success(`Welcome aboard, ${name || "Farmer"}!`);
            navigate("/");
          })
          .catch(console.error);
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error("Email already registered. Try logging in.");
        } else {
          toast.error(err.message || "Registration failed.");
        }
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success(`Welcome, ${res.user.displayName || "Farmer"}!`);
        navigate("/");
      })
      .catch(() => toast.error("Google sign-in failed."));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <HiOutlineUserGroup className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Join KrishiLink</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Connect with farmers and buyers across the country
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Photo URL <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="https://your-photo-url.com"
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Min 6 chars, upper & lowercase"
                  required
                  className="w-full px-4 py-2.5 pr-11 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  {showPass ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition shadow-sm mt-2"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600" />
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogle}
            className="flex items-center justify-center gap-3 w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 font-semibold py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-green-600 dark:text-green-400 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
