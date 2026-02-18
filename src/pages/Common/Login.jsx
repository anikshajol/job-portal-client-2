import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80)",
        backgroundSize: "cover",
      }}
    >
      {/* Background Overlay */}
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
        <div className="text-center lg:text-left text-white max-w-md">
          <h1 className="text-5xl font-bold italic tracking-tighter">
            Welcome Back!
          </h1>
          <p className="py-6 text-lg opacity-90">
            Login to access your projects, manage your database, and keep
            building amazing things with React and Firebase.
          </p>
          <div className="hidden lg:block">
            <span className="badge badge-primary p-4 mr-2">Firebase</span>
            <span className="badge badge-secondary p-4 mr-2">MongoDB</span>
            <span className="badge badge-accent p-4">Tailwind</span>
          </div>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100/90 backdrop-blur-md border border-white/20">
          <form className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            {/* Email Input */}
            <fieldset className="fieldset">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                className="input input-bordered focus:input-primary transition-all"
              />
            </fieldset>

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
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot password?
                </a>
              </label>
            </fieldset>

            {/* Login Button */}
            <fieldset className="fieldset mt-6">
              <button className="btn btn-primary text-white shadow-lg">
                Login
              </button>
            </fieldset>

            <div className="divider text-xs font-bold uppercase opacity-50">
              Or login with
            </div>

            {/* Social Login */}
            <div className="flex gap-2">
              <button className="btn btn-outline flex-1 gap-2">
                <FcGoogle size={20} />
                Google
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-4 text-sm">
              Don't have an account?
              <a className="text-primary font-bold ml-1 cursor-pointer hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
