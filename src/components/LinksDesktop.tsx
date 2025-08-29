import { links, type Link } from "@/utils/links";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const LinksDesktop = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (path: string, isOpen: boolean) => {
    setOpenMenus((prev) => ({ ...prev, [path]: isOpen }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenus({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Render submenus recursively
  const renderSubLinks = (
    subLinks: Link[],
    parentPath: string,
    isNested = false
  ) => {
    return (
      <div
        className={`absolute ${
          isNested ? "left-full top-0 ml-1" : "top-full left-0 mt-1"
        } 
          w-48 bg-gray-900 text-yellow-200 shadow-lg border border-gray-700 rounded z-50 transition-all duration-200 ease-in-out
          ${
            openMenus[parentPath]
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }
        `}
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
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-blue-500 hover:text-white capitalize text-[clamp(0.8rem,1.5vw,1rem)] transition-colors"
                  aria-expanded={!!openMenus[fullPath]}
                  aria-haspopup="menu"
                >
                  {label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openMenus[fullPath] ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={fullPath}
                  className={({ isActive }) =>
                    `block px-4 py-2 capitalize text-[clamp(0.8rem,1.5vw,1rem)] transition-colors hover:bg-blue-500 hover:text-white ${
                      isActive
                        ? "underline text-lg text-blue-400"
                        : "text-yellow-200"
                    }`
                  }
                  onClick={() => setOpenMenus({})}
                >
                  {label}
                </NavLink>
              )}
              {childSubLinks && renderSubLinks(childSubLinks, fullPath, true)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      ref={menuRef}
      className="hidden w-full lg:flex flex-wrap justify-center items-center gap-8 relative bg-gray-900 p-2 rounded"
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
              className="capitalize tracking-wide flex items-center gap-1 text-[clamp(0.9rem,2vw,1.1rem)] text-yellow-200 hover:text-blue-400 transition-colors"
              aria-expanded={!!openMenus[ref]}
              aria-haspopup="menu"
            >
              {label}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openMenus[ref] ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          ) : (
            <NavLink
              to={ref}
              className={({ isActive }) =>
                `capitalize tracking-wide text-[clamp(0.9rem,2vw,1.1rem)] transition-colors ${
                  isActive
                    ? "underline text-lg text-blue-400"
                    : "text-yellow-200 hover:text-blue-400"
                }`
              }
            >
              {label}
            </NavLink>
          )}
          {subLinks && renderSubLinks(subLinks, ref)}
        </div>
      ))}
    </div>
  );
};

export default LinksDesktop;
