import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none gap-16 font-medium text-4xl md:text-6xl cursor-pointer group"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex gap-6 items-center">
              <span className="text-violet-600 md:text-5xl">&#10038;</span>
              <span className="text-gray-200 group-hover:text-violet-600 transition duration-300">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
