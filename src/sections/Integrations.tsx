import Tag from "../components/Tag";

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

const Integrations = () => {
  return (
    <section className="overflow-hidden py-20 px-4">
      <div className="container w-full mx-auto flex">
        <div>
          <Tag>Integrations</Tag>
          <h1 className="text-gray-200 font-medium text-6xl mt-2">
            Integrate well with <span className="text-violet-500">others</span>
          </h1>
          <p className="text-zinc-400 mt-4">
            CodeFlow seamlessly connects with your favorite tools, making it
            easy to plug into any workflow and collaborate across platforms.
          </p>
        </div>
        <div className="">
          <div className="flex flex-col gap-4 pb-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col justify-center items-center bg-neutral-900 p-6 rounded-3xl border border-white/15"
              >
                <div className="bg-white p-3 rounded-2xl">
                  <img
                    src={integration.src}
                    alt={`${integration.name} logo`}
                    className="size-10"
                  />
                </div>
                <h3 className="text-gray-200 text-2xl mt-4">
                  {integration.name}
                </h3>
                <p className="text-center text-zinc-400 mt-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
