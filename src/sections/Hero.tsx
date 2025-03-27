import LogoTicker from "../components/LogoTicker";

const Hero = () => {
  return (
    <section className="min-h-[100vh] md:min-h-screen w-full hero bg-cover bg-center bg-no-repeat pt-20 pb-32">
      <div className="pt-20 flex flex-col gap-4 px-4">
        <h1 className="max-w-[430px] mx-auto text-center text-4xl sm:text-[50px] font-bold text-gray-200 sm:leading-16">
          AI Powered, Coding Simplified
        </h1>
        <p className="max-w-[430px] mx-auto text-center text-zinc-400">
          Build, optimize, and deploy faster with intelligent automation—write
          better code with less effort.
        </p>
        <div className="max-w-[360px] w-full mx-auto border border-white/15 rounded-3xl gap-2 py-1 pl-3 pr-1 flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="focus:outline-none placeholder:text-zinc-500 text-gray-300 flex-1"
          />
          <button className="px-4 py-[7px] bg-violet-600 text-indigo-950 rounded-2xl text-sm font-medium cursor-pointer">
            Sign up
          </button>
        </div>
      </div>

      <div className="max-w-[975px] w-full mx-auto px-4 mt-20 sm:mt-8">
        <img
          src="/images/hero-dashboard.png"
          alt="Dashboard Image"
          className=" object-cover w-full h-full"
        />
      </div>

      <LogoTicker />
    </section>
  );
};

export default Hero;
