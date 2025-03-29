import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logos/logo.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-9 px-4 flex items-center fixed w-full top-0 z-50">
      <div className="max-w-[675px] w-full mx-auto border border-white/15 pl-3 pr-3 sm:pr-1 py-1 rounded-3xl sm:rounded-full bg-neutral-900/70  backdrop-blur">
        <div className="gap-4 flex items-center justify-between">
          <img src={logo} alt="CodeFlow logo" className="w-[40px]" />
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block sm:hidden cursor-pointer"
          >
            {isOpen ? (
              <X size={25} className="text-gray-200" />
            ) : (
              <Menu size={30} className="text-gray-200" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-3 pb-2">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    className="text-gray-200 "
                  >
                    {link.label}
                  </a>
                ))}
                <button className="py-1.5 w-full border border-white rounded-full text-white cursor-pointer">
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
