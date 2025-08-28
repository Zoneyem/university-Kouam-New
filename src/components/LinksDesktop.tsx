import { links, type Link } from "@/utils/links";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const LinksDesktop = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (path: string, isOpen: boolean) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: isOpen,
    }));
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenus({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSubLinks = (subLinks: Link[], parentPath: string) => {
    return (
      <div
        className={`absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border rounded z-50 
        transition-all duration-200 ease-in-out 
        ${
          openMenus[parentPath]
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        {subLinks.map(({ ref, label, subLinks: childSubLinks }) => {
          const fullPath = parentPath + ref;

          return (
            <div
              key={fullPath}
              className="relative"
              onMouseEnter={() => toggleMenu(fullPath, true)}
              onMouseLeave={() => toggleMenu(fullPath, false)}
            >
              {childSubLinks ? (
                <button
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-100 capitalize"
                  aria-expanded={!!openMenus[fullPath]}
                  aria-haspopup="menu"
                >
                  {label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openMenus[fullPath] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={fullPath}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 capitalize ${
                      isActive ? "underline text-lg" : ""
                    }`
                  }
                  onClick={() => setOpenMenus({})}
                >
                  {label}
                </NavLink>
              )}

              {childSubLinks && (
                <div
                  className={`absolute top-0 left-full mt-0 ml-0 w-48 bg-white shadow-lg border rounded z-50 
                  transition-all duration-200 ease-in-out 
                  ${
                    openMenus[fullPath]
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {renderSubLinks(childSubLinks, fullPath)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      ref={menuRef}
      className="hidden w-full lg:flex gap-x-[5rem] justify-center items-center relative"
    >
      {links.map(({ ref, label, subLinks }) => (
        <div
          key={ref}
          className="relative"
          onMouseEnter={() => toggleMenu(ref, true)}
          onMouseLeave={() => toggleMenu(ref, false)}
        >
          {subLinks ? (
            <button
              className="capitalize tracking-wide flex items-center gap-1"
              aria-expanded={!!openMenus[ref]}
              aria-haspopup="menu"
            >
              {label}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenus[ref] ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          ) : (
            <NavLink
              to={ref}
              className={({ isActive }) =>
                `capitalize tracking-wide ${
                  isActive ? "underline text-xl" : ""
                }`
              }
            >
              {label}
            </NavLink>
          )}

          {subLinks && (
            <div
              className={`absolute top-full left-0 mt-0 w-48 transition-all duration-200 ease-in-out 
              ${
                openMenus[ref]
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              {renderSubLinks(subLinks, ref)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LinksDesktop;
