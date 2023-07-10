"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const basicLinks = [
  { href: "/", title: "Les Offres", targetSegment: null },
  { href: "/applies", title: "Mes Candidatures", targetSegment: "applies" },
  { href: "/dashboard", title: "Dashboard", targetSegment: "dashboard" },
];

const enterpriseLinks = [
  { href: "/", title: "Les Offres", targetSegment: null },
  { href: "/offers", title: "Mes Offres", targetSegment: "offers" },
  { href: "/candidates", title: "Mes Candidats", targetSegment: "candidates" },
];

const tutorLinks = [
  { href: "/", title: "Les Offres", targetSegment: null },
  { href: "/candidates", title: "Mes Candidats", targetSegment: "candidates" },
];

export default function NavBar() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <nav className="flex flex-col gap-8 mt-20">
      {basicLinks.map((link) => (
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
