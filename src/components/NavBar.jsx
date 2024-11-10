import { TabNav } from "@radix-ui/themes";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <TabNav.Root justify={"center"} mb={"4"}>
      <TabNav.Link asChild active={pathname === "/"}>
        <NavLink to={"/"}>Home</NavLink>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === "/about"}>
        <NavLink to={"/about"}>About</NavLink>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === "/contact"}>
        <NavLink to={"/contact"}>Contact</NavLink>
      </TabNav.Link>
      <TabNav.Link asChild>
        <a href="https://github.com/maxkor2017/React-router-radix-UI">Github</a>
      </TabNav.Link>
    </TabNav.Root>
  );
}
