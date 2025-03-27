import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "development with AI-powered assistance and seamless version control. Code smarter, build faster, and stay in flow. Experience the future of coding with CodeFlow.";
const words = text.split(" ");

const Introduction = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="introduction-bg-gradient py-20">
      <div className="container w-full mx-auto px-4 ">
        <div className="sticky top-44 sm:top-60">
          <div className="text-5xl sm:text-6xl font-medium text-center lg:leading-[70px]">
            <span className="text-gray-100">Streamline your </span>
            <span className="text-zinc-600">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition duration-500 text-white/30",
                    index < currentWord && "text-gray-100"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
