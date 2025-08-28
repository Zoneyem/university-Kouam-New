import { links, type Link } from "@/utils/links";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const LinksDesktop = () => {
  // Track which first-level and second-level menus are open
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (path: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderSubLinks = (subLinks: Link[], parentPath: string) => {
    return (
      <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border rounded z-50">
        {subLinks.map(({ ref, label, subLinks: childSubLinks }) => {
          const fullPath = parentPath + ref;

          return (
            <div key={fullPath} className="relative">
              {childSubLinks ? (
                <button
                  onClick={() => toggleMenu(fullPath)}
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-100 capitalize"
                >
                  {label} <ChevronDown size={16} />
                </button>
              ) : (
                <NavLink
                  to={fullPath}
                  className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-gray-100 capitalize ${
                      isActive ? "underline text-lg" : ""
                    }`
                  }
                  onClick={() => setOpenMenus({})} // close all menus after navigation
                >
                  {label}
                </NavLink>
              )}

              {/* Render nested subLinks if open */}
              {childSubLinks && openMenus[fullPath] && (
                <div className="absolute top-0 left-full mt-0 ml-0 w-48 bg-white shadow-lg border rounded z-50">
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
    <div className="hidden w-full lg:flex gap-x-[5rem] justify-center items-center relative">
      {links.map(({ ref, label, subLinks }) => (
        <div key={ref} className="relative">
          {subLinks ? (
            <button
              onClick={() => toggleMenu(ref)}
              className="capitalize tracking-wide flex items-center gap-1"
            >
              {label} <ChevronDown size={16} />
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

          {/* First-level submenu */}
          {subLinks && openMenus[ref] && (
            <div className="absolute top-full left-0 mt-0 w-48">
              {renderSubLinks(subLinks, ref)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LinksDesktop;
