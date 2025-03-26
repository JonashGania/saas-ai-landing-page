import { Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  return (
    <header className="w-full h-[115px] px-4 header-bg-gradient flex items-center justify-center">
      <div className="max-w-[675px] w-full mx-auto border border-white/15 pl-3 pr-3 sm:pr-1 py-1 rounded-full gap-4 flex items-center justify-between sticky top-0">
        <img src="/logo.svg" alt="CodeFlow logo" className="w-[40px]" />
        <nav className="hidden sm:flex items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label} className="text-gray-200 ">
              {link.label}
            </a>
          ))}
        </nav>
        <button className="hidden sm:block py-1.5 px-5 border border-white rounded-full text-white cursor-pointer">
          Login
        </button>
        <button className="block sm:hidden cursor-pointer">
          <Menu size={30} className="text-gray-200" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
