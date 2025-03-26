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

      <div className="container w-full overflow-hidden mx-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-24 pr-24">
          {brandLogos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={`${logo.alt} logo`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
