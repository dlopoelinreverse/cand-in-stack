import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import Navbar from "./Navbar";

type UserLink = {
  userRole: "USER" | "ENTERPRISE" | "ADMIN" | "SUPERADMIN";
  links: LinkType[];
};

export type LinkType = {
  href: string;
  title: string;
  targetSegment: string | null;
};

export default async function NavBarUserDispatchLinks() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const userRole = session?.user.role;

  const usersLinks: UserLink[] = [
    {
      userRole: "USER",
      links: [
        { href: "/", title: "Les Offres", targetSegment: null },
        {
          href: "/applies",
          title: "Mes Candidatures",
          targetSegment: "applies",
        },
      ],
    },
    {
      userRole: "ENTERPRISE",
      links: [
        { href: "/", title: "Les Offres", targetSegment: null },
        { href: "/offers", title: "Mes Offres", targetSegment: "offers" },
        {
          href: "/candidates",
          title: "Mes Candidats",
          targetSegment: "candidates",
        },
        // {
        //   href: "/dashboard",
        //   title: "Tableau de bord",
        //   targetSegment: "dashboard",
        // },
      ],
    },
    {
      userRole: "ADMIN",
      links: [
        { href: "/", title: "Les Offres", targetSegment: null },
        {
          href: "/candidates",
          title: "Mes Candidats",
          targetSegment: "candidates",
        },
        {
          href: "/dashboard",
          title: "Tableau de bord",
          targetSegment: "dashboard",
        },
      ],
    },
    {
      userRole: "SUPERADMIN",
      links: [
        { href: "/", title: "Les Offres", targetSegment: null },
        {
          href: "/candidates",
          title: "Mes Candidats",
          targetSegment: "candidates",
        },
        {
          href: "/dashboard",
          title: "Tableau de bord",
          targetSegment: "dashboard",
        },
      ],
    },
  ];

  const links = userRole
    ? usersLinks.find((userLink) => userLink.userRole === userRole)?.links
    : usersLinks[0].links;

  if (!links) return;
  return <Navbar links={links} />;
}
