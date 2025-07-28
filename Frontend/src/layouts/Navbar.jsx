import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      label: "Services",
      dropdown: [
        { path: "/services/web", label: "Web Development" },
        { path: "/services/mobile", label: "Mobile App Development" },
        { path: "/services/cloud", label: "Cloud Solutions" },
      ],
    },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-700">
          X-mart Solutions
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium relative">
          {menuLinks.map((link, idx) =>
            link.dropdown ? (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span className="flex items-center cursor-pointer hover:text-blue-700">
                  {link.label} <ChevronDown size={16} className="ml-1" />
                </span>

                {/* Dropdown Menu */}
                {openDropdown === idx && (
                  <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-52 py-2">
                    {link.dropdown.map((dropItem, dropIdx) => (
                      <li key={dropIdx}>
                        <NavLink
                          to={dropItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-blue-100 ${
                              isActive ? "text-blue-700 font-semibold" : ""
                            }`
                          }
                        >
                          {dropItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-blue-700 ${
                      isActive ? "text-blue-700 font-semibold" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
          {menuLinks.map((link, idx) =>
            link.dropdown ? (
              <li key={idx} className="w-full text-center">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="w-full flex justify-center items-center gap-1 hover:text-blue-700"
                >
                  {link.label} <ChevronDown size={16} />
                </button>

                {openDropdown === idx && (
                  <ul className="bg-gray-50 rounded-md mt-2 w-full">
                    {link.dropdown.map((dropItem, dropIdx) => (
                      <li key={dropIdx}>
                        <NavLink
                          to={dropItem.path}
                          className="block px-4 py-2 hover:bg-blue-100"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {dropItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className="hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
