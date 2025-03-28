import { IntegrationsType } from "../sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { Fragment } from "react/jsx-runtime";

const IntegrationsColumn = ({
  integrations,
  className,
  reverse,
}: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col justify-center items-center bg-neutral-900 p-6 lg:px-4 lg:py-6 rounded-3xl border border-white/15"
            >
              <div className="bg-white p-3 rounded-2xl">
                <img
                  src={integration.src}
                  alt={`${integration.name} logo`}
                  className="size-10"
                />
              </div>
              <h3 className="text-gray-200 text-xl mt-4 text-center">
                {integration.name}
              </h3>
              <p className="text-center text-sm text-zinc-400 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default IntegrationsColumn;
