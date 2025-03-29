import { Fragment } from "react/jsx-runtime";
import { motion } from "motion/react";
import clandestine from "../assets/logos/clandestine.svg";
import cubekit from "../assets/logos/cubekit.svg";
import foresight from "../assets/logos/foresight.svg";
import galileo from "../assets/logos/galileo.svg";
import hexsmith from "../assets/logos/hexsmith.svg";
import magnolia from "../assets/logos/magnolia.svg";
import segment from "../assets/logos/segment.svg";

const brandLogos = [
  { src: clandestine, alt: "Clandestine" },
  { src: cubekit, alt: "Cubekit" },
  { src: foresight, alt: "Foresight" },
  { src: galileo, alt: "Galileo" },
  { src: hexsmith, alt: "Hexsmith" },
  { src: magnolia, alt: "Magnolia" },
  { src: segment, alt: "Segment" },
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
