import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Visual Studio Code",
    src: "/logos/vscode.svg",
    description:
      "Visual Studio Code is a fast, lightweight editor with powerful AI extensions.",
  },
  {
    name: "Github",
    src: "/logos/github.svg",
    description:
      "Github is the go-to platform for version control and collaboration.",
  },
  {
    name: "JetBrains",
    src: "/logos/jetbrain.svg",
    description:
      "JetBrains is a smart development tools for maximum productivity.",
  },
  {
    name: "Neovim",
    src: "/logos/neovim.svg",
    description: "Neovim is a modern, customizable Vim-based editor.",
  },
  {
    name: "Bitbucket",
    src: "/logos/bitbucket.svg",
    description:
      "Bitbucket is a Git solution with built-in CI/CD and Jira integration.",
  },
  {
    name: "GitLab",
    src: "/logos/gitlab.svg",
    description:
      "GitLab is a complete DevOps platform with CI/CD and security.",
  },
];

export type IntegrationsType = typeof integrations;

const Integrations = () => {
  return (
    <section className="overflow-hidden py-20 px-4">
      <div className="container w-full mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h1 className="text-gray-200 font-medium text-3xl sm:text-5xl lg:text-6xl mt-2">
              Integrate well with{" "}
              <span className="text-violet-500">others</span>
            </h1>
            <p className="text-zinc-400 mt-4">
              CodeFlow seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div className="lg:max-w-[500px] w-full lg:justify-self-end">
            <div className="h-[400px] lg:h-[800px] mt-4 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
