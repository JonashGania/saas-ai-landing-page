const text =
  "AI-powered assistance and seamless version control. Code smarter, build faster, and stay in flow. Experience the future of coding with CodeFlow.";

const Introduction = () => {
  return (
    <section className="introduction-bg-gradient py-20">
      <div className="container w-full mx-auto px-4 text-3xl sm:text-5xl lg:text-6xl font-semibold text-center lg:leading-[70px]">
        <span className="text-gray-200">Streamline your development with </span>
        <span className="text-[#6E7681]">{text}</span>
      </div>
    </section>
  );
};

export default Introduction;
