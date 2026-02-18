import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Large Decorative 404 */}
        <h1 className="text-9xl font-black text-base-content/10 select-none animate-pulse">
          404
        </h1>

        {/* Main Content */}
        <div className="-mt-16 relative">
          <h2 className="text-4xl font-serif font-bold text-base-content mb-4 italic">
            Lost in Space?
          </h2>
          <div className="divider w-24 mx-auto divider-primary"></div>
          <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="btn btn-primary btn-outline px-8 rounded-full hover:scale-105 transition-all">
                Go Back Home
              </button>
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-ghost px-8 rounded-full border-base-300"
            >
              Try Again
            </button>
          </div>
        </div>

        {/* Footer Quote */}
        <p className="mt-12 text-sm italic opacity-40 font-light">
          "Not all those who wander are lost."
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
