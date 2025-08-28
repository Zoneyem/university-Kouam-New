import { links, type Link } from "@/utils/links";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AlignLeft, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const LinksMobile = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (path: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderSubLinks = (subLinks: Link[], parentPath: string) => {
    return (
      <div className="ml-4 mt-1 border-l pl-3">
        {subLinks.map(({ ref, label, subLinks: childSubLinks }) => {
          const fullPath = parentPath + ref;

          return (
            <div key={fullPath} className="flex flex-col">
              {childSubLinks ? (
                <button
                  onClick={() => toggleMenu(fullPath)}
                  className="flex justify-between items-center py-2 text-left capitalize"
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
                    `block py-2 capitalize ${
                      isActive ? "underline text-lg" : ""
                    }`
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenMenus({});
                  }}
                >
                  {label}
                </NavLink>
              )}

              {childSubLinks && openMenus[fullPath] && (
                <div className="ml-4 border-l pl-3 transition-all duration-200">
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
    <div className="lg:hidden">
      {/* Mobile toggle button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <AlignLeft />
      </Button>

      {/* Mobile menu content */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-background shadow-lg border rounded-lg p-4 z-50 animate-scaleIn">
          {links.map(({ ref, label, subLinks }) => (
            <div key={ref} className="flex flex-col">
              {subLinks ? (
                <button
                  onClick={() => toggleMenu(ref)}
                  className="flex justify-between items-center py-2 capitalize"
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
                    `py-2 capitalize ${isActive ? "underline text-xl" : ""}`
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenMenus({});
                  }}
                >
                  {label}
                </NavLink>
              )}

              {/* Submenu rendering */}
              {subLinks && openMenus[ref] && (
                <div className="ml-4 border-l pl-3 transition-all duration-200">
                  {renderSubLinks(subLinks, ref)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinksMobile;
