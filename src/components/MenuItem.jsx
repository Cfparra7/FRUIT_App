"use client";
import React, {useState} from "react";
import Link from "next/link";
import Submenu from "./Submenu";

export default function MenuItem ({ label, href, submenu }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={href} >
          {label}
        </Link>
        {submenu && isHovered && <Submenu items={submenu} />}
      </li>
    );
  };