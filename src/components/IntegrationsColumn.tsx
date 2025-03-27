import { IntegrationsType } from "../sections/Integrations";
import { twMerge } from "tailwind-merge";

const IntegrationsColumn = ({
  integrations,
  className,
}: {
  integrations: IntegrationsType;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
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
    </div>
  );
};

export default IntegrationsColumn;
