import Tag from "../components/Tag";
import FeatureCard from "../components/FeatureCard";
import Avatar from "../components/Avatar";
import Key from "../components/Key";
import { Ellipsis } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const text = "if (true) AI.analyze(inputData) generatePrediction()";
const words = text.split("");

const Features = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container w-full mx-auto px-4 py-20 bg-[#0A0A0A] features-bg-gradient">
      <div className="flex flex-col justify-center items-center pt-12">
        <Tag>Features</Tag>
        <span className="mt-8 text-3xl sm:text-5xl lg:text-6xl text-gray-200 font-medium max-w-[350px] sm:max-w-[500px] text-center">
          Supercharge your coding workflow
        </span>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FeatureCard
            title="AI Code Suggestions"
            description="Autocomplete and smart recommendations tailored to your style."
            classname="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-2xl font-bold text-center">
                <span className="text-orange-700">return </span>
                <span>
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ color: "#525252" }}
                      animate={isHovered ? { color: "#e5e7eb" } : {}}
                      transition={{
                        duration: 0.1,
                        delay: isHovered ? index * 0.05 : 0,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </p>
            </div>
          </FeatureCard>
        </div>

        <FeatureCard
          title="Seamless collaboration"
          description="Real-time code sharing and smooth merge handling."
          classname="md:col-span-2 lg:col-span-1 group"
        >
          <div className="aspect-video flex items-center justify-center">
            <Avatar className="z-40">
              <img
                src="/images/avatar-1.jpg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </Avatar>
            <Avatar className="-ml-6 border-indigo-500 z-30">
              <img
                src="/images/avatar-2.jpg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </Avatar>
            <Avatar className="-ml-6 border-orange-500 z-20">
              <img
                src="/images/avatar-3.jpg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </Avatar>
            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition duration-300">
              <div className="size-full bg-neutral-700 rounded-full grid place-items-center relative">
                <img
                  src="/images/avatar-4.jpg"
                  alt="avatar"
                  className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                />
                <Ellipsis size={35} className="text-gray-200" />
              </div>
            </Avatar>
          </div>
        </FeatureCard>
        <FeatureCard
          title="Keyboard Quick Actions"
          description="Powerful commands to help you code quickly and efficiently."
          classname="md:col-span-2 lg:col-span-1 lg:col-start-auto md:col-start-2 group"
        >
          <div className="aspect-video flex items-center justify-center gap-4">
            <Key className="w-28 outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-600 transition-all duration-500 group-hover:translate-y-1">
              shift
            </Key>
            <Key className="outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-600 transition-all duration-500 delay-150 group-hover:translate-y-1">
              alt
            </Key>
            <Key className="outline-2 outline-offset-4 outline-transparent group-hover:outline-violet-600 transition-all duration-500 delay-300 group-hover:translate-y-1">
              C
            </Key>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};

export default Features;
