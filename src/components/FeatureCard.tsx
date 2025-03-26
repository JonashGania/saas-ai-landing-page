import { twMerge } from "tailwind-merge";

type FeatureCardProps = {
  children?: React.ReactNode;
  classname?: string;
  title: string;
  description: string;
};

const FeatureCard = ({
  children,
  classname,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 p-6 rounded-3xl border border-white/15",
        classname
      )}
    >
      <div className="aspect-video">{children}</div>
      <div className="flex flex-col gap-2">
        <span className="text-gray-200 text-2xl font-medium mt-6">{title}</span>
        <span className="text-zinc-400">{description}</span>
      </div>
    </div>
  );
};

export default FeatureCard;
