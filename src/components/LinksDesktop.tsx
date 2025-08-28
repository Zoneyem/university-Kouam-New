import { formations } from "@/utils/formation";
import { links, type Link } from "@/utils/links";
import { NavLink } from "react-router-dom";


const LinksDesktop = () => {
  return (
    <div className="hidden w-full lg:flex gap-x-[5rem] justify-center items-center">
      {links.map(({ ref, label }: Link) => {
        return (
          <NavLink
            className={({ isActive }) =>
              `capitalize tracking-wide ${isActive ? "underline text-xl" : ""}`
            }
            to={ref}
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default LinksDesktop;
