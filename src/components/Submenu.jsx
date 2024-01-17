import React from "react";
import Link from "next/link";

export default function Submenu({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
