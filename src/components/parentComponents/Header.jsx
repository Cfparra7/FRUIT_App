import React from "react";
import MenuItem from "../MenuItem";
import Image from "next/image";

const Header = () => {
  const menuItems = [
    { label: "Inicio", href: "/" },
    {
      label: "Servicios",
      href: "#",
      submenu: [
        { label: "Diseño Web", href: "/servicios/diseno-web" },
        { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
      ],
    },
    { label: "Acerca de", href: "/acerca-de" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header>
      <div>
        <Image
          src={
            "https://greenbee-2.myshopify.com/cdn/shop/files/logo_200x.png?v=1613769207"
          }
          width={100}
          height={100}
          alt="Logo fruit"
        ></Image>
      </div>



      <nav>
        <ul>
          {menuItems.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
