import { Fragment } from "react/jsx-runtime";
import { motion } from "motion/react";

const brandLogos = [
  { src: "/logos/clandestine.svg", alt: "Clandestine" },
  { src: "/logos/cubekit.svg", alt: "Cubkit" },
  { src: "/logos/foresight.svg", alt: "Forsight" },
  { src: "/logos/galileo.svg", alt: "Galileo" },
  { src: "/logos/hexsmith.svg", alt: "Hexsmith" },
  { src: "/logos/magnolia.svg", alt: "Magnolia" },
  { src: "/logos/segment.svg", alt: "Segment" },
];

const LogoTicker = () => {
  return (
    <div className="px-4 mt-12">
      <h3 className="text-zinc-400 text-lg text-center pb-8">
        Trusted by these market leaders
      </h3>

      <div className="container w-full flex overflow-hidden mx-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none items-center gap-24 pr-24"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {brandLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={`${logo.alt} logo`} />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
