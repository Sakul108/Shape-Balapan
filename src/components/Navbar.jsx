import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vision", path: "/vision" },
    { name: "Stories", path: "/stories" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="bg-[#F5EEDC] w-full sticky top-0 left-0 z-50 border-b-2 border-[#DDA853]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-11 sm:h-8 md:h-12" alt="Shape Balapan Logo" />
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black p-2 focus:outline-none"
        >
          ☰
        </button>

        {/* Nav links container */}
        <div className={`w-full md:flex md:items-center md:w-auto ${open ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium bg-neutral-secondary-soft md:bg-neutral-primary p-4 md:p-0 rounded md:rounded-none border border-default md:border-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                     block px-3 py-2 md:py-0 transition-colors duration-200
                     ${isActive
                      ? "text-[#DDA853] font-semibold"
                      : "text-[#183B4E] hover:text-[#DDA853]"
                    }
    `
                  }
                >
                  {link.name}
                </NavLink>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
