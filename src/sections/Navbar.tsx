const Navbar = () => {
  const navLinks = ["Home", "Features", "Integrations", "FAQs"];
  return (
    <header className="w-full h-[115px] header-bg-gradient flex items-center justify-center">
      <nav className="max-w-[675px] w-full mx-auto border border-zinc-700 pl-3 pr-1 py-1 rounded-[30px] flex items-center justify-between">
        <img src="/logo.svg" alt="logo" />
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index} className="text-gray-200">
                {link}
              </li>
            ))}
          </ul>
          <button className="py-2 px-5 border border-white rounded-3xl text-white cursor-pointer">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
