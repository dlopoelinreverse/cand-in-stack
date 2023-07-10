"use client";

import React from "react";
import { LinkType } from "./NavBarUserDispatchLinks";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

export default function Navbar({ links }: { links: LinkType[] }) {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <nav className="flex flex-col gap-8 mt-20">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={`${
            activeSegment === link.targetSegment
              ? "bg-slate-50 hover:bg-slate-100"
              : "bg-slate-400 hover:bg-slate-50"
          } text-center px-5 py-2 rounded-full text-xl`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
