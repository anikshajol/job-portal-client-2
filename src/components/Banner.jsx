// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[90vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure>
          <motion.img
            src={team1}
            animate={{ y: [100, 150, 100] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{ willChange: "transform" }}
            className="max-w-sm object-cover rounded-t-4xl rounded-r-4xl border-l-8 border-b-8 border-blue-800 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{
              duration: 7.5,
              delay: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{ willChange: "transform" }}
            className="max-w-sm object-cover rounded-t-4xl rounded-r-4xl border-l-8 border-b-8 border-blue-800 shadow-2xl"
          />
        </figure>

        <div>
          <h1 className="text-5xl font-bold">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#fc9d03", "#03fc20", "#034afc"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You
          </h1>
          <p className="py-6">
            Here you can find your desire remote job. So What are you waiting
            for!!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
