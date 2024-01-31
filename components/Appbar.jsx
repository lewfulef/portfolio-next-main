import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Appbar = () => {
  const links = [
    {
      nombre: "Acerca de mi",
      href: "/about",
    },
    {
      nombre: "Proyectos",
      href: "/projects",
    },
    {
      nombre: "Contacto",
      href: "/contacto",
    },
  ];

  return (
    <Navbar>
      <NavbarBrand> <a href="/">
        <p className="font-bold text-inherit">Lautro Huichalaf Bassano</p>
        </a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default Appbar;
