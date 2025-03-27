const footerLinks = [
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="CodeFlow logo" className="h-10 w-10" />
          <span className="text-gray-300 font-bold text-lg">CodeFlow</span>
        </div>
        <div className="flex text-sm sm:text-base items-center gap-4 text-zinc-400">
          {footerLinks.map((links) => (
            <a key={links.label} href={links.href}>
              {links.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
