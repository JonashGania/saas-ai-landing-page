const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="overflow-x-clip p-4 flex">
        <div className="flex flex-none gap-16 font-medium text-4xl md:text-6xl">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex gap-6 items-center">
              <span className="text-violet-600 md:text-5xl">&#10038;</span>
              <span className="text-gray-200">Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
