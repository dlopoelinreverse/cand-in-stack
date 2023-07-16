// import { Technology } from "@/app/types/types";
// import React from "react";
// import { Badge } from "./DisplayBadges";

// interface BadgeProps {
//   badge: Badge;
//   onClick: (technologyId: string) => void;
//   typeAction?: "adding" | "removing";
//   technologies?: Technology[];
// }

// export default function Badge({
//   badge,
//   onClick,
//   typeAction,
//   technologies,
// }: BadgeProps) {
//   const badgeName = technologies
//     ? technologies.filter((technology) => technology.id === badge.id)[0].name
//     : badge.name;
//   return (
//     <li
//       onClick={() => onClick(badge.id)}
//       className={`${typeAction === "adding" && "hover:bg-green-200"} ${
//         typeAction === "removing" && " hover:bg-red-200"
//       } transition cursor-pointer flex items-center gap-2 p-3 rounded-lg bg-slate-200`}
//     >
//       {typeAction === "adding" && <span>+</span>}
//       {typeAction === "removing" && <span>x</span>}
//       <p>{badgeName}</p>
//     </li>
//   );
// }
