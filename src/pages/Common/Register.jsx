import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // const form = e.target;
    console.log(e.target.name.value);
    console.log(e.target.checkbox.checked);
  };
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80)",
        backgroundSize: "cover",
      }}
    >
      {/* Background Overlay */}
      <div className="hero-overlay bg-opacity-70"></div>

      <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Left Side: Information */}
        <div className="text-center lg:text-left text-white max-w-md">
          <h1 className="text-5xl font-bold italic tracking-tighter">
            Join Us Today!
          </h1>
          <p className="py-6 text-lg opacity-90">
            Create your account to start managing your projects. Our platform
            integrates perfectly with Firebase and MongoDB for a seamless
            experience.
          </p>
          <div className="hidden lg:flex gap-2">
            <div className="stat bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="stat-title text-white/70">Security</div>
              <div className="stat-value text-2xl text-secondary">100%</div>
            </div>
            <div className="stat bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="stat-title text-white/70">Uptime</div>
              <div className="stat-value text-2xl text-accent">99.9%</div>
            </div>
          </div>
        </div>

        {/* Right Side: Register Card */}
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100/95 backdrop-blur-lg border border-white/20">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-3xl font-bold text-center text-primary mb-2">
              Register
            </h2>
            <p className="text-center text-sm opacity-60 mb-4">
              Fill in the details to create your account
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </fieldset>

              {/* Email Input */}
              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered focus:input-primary transition-all"
                />
              </fieldset>
            </div>

            {/* Password Input */}
            <fieldset className="fieldset mt-2">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered focus:input-primary transition-all"
              />
            </fieldset>

            {/* Confirm Password Input */}
            <fieldset className="fieldset mt-2">
              <label className="label">
                <span className="label-text font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className="input input-bordered focus:input-primary transition-all"
              />
            </fieldset>

            {/* Terms and Conditions */}
            <fieldset className="fieldset mt-4">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="label-text">
                  I agree to the{" "}
                  <span className="text-primary font-bold">
                    Terms & Conditions
                  </span>
                </span>
              </label>
            </fieldset>

            {/* Register Button */}
            <fieldset className="fieldset mt-4">
              <button className="btn btn-primary text-white shadow-xl hover:scale-[1.02] transition-transform">
                Create Account
              </button>
            </fieldset>

            <div className="divider text-xs font-bold uppercase opacity-40">
              OR
            </div>

            {/* Social Register */}
            <button className="btn btn-outline btn-secondary w-full gap-2">
              <FcGoogle size={20} />
              Signup with Google
            </button>

            <p className="text-center mt-4 text-sm">
              Already have an account?
              <a className="text-primary font-bold ml-1 cursor-pointer hover:underline">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
