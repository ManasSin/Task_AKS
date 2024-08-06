import React from "react";
import { Link } from "react-router-dom";

// type Props = {};

export const Hero = () => {
  return (
    <section className="hero relative w-full min-h-screen  flex items-center justify-center">
      <div className="text-white p-12 ">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Welcome to the course platform
        </h1>
        <p className="mt-2 text-white/50 md:text-lg">
          Get enrolled in our courses and learn new skills.
        </p>
        <div className="mt-8">
          <Link
            to="/courses"
            className="px-4 py-3 rounded-lg bg-blue-900 text-white hover:bg-blue-600"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};
