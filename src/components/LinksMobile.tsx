import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links, type Link } from "@/utils/links";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

const LinksMobile = () => {
  
return (
  <DropdownMenu >
    <DropdownMenuTrigger asChild className="lg:hidden">
      <Button variant={"outline"} size='icon'> <AlignLeft/></Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="lg:hidden "align="start" sideOffset={10}>
      {links.map(({ ref, label }: Link) => {
        return (
          <DropdownMenuItem key={label}>
            <NavLink
              className={({ isActive }) =>
                `capitalize tracking-wide ${
                  isActive ? "underline text-xl" : ""
                }`
              }
              to={ref}
            >
              {label}
            </NavLink>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);
};

export default LinksMobile;
