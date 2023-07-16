// "use client";
// import { Technology } from "@/app/types/types";
// import useTechnology from "@/hooks/useTechnology";
// import React from "react";
// import Badge from "./Badge";

// interface DisplayBadgesProps {
//   badgeContent: string[];
//   onClick?: (technologyId: string) => void;
//   typeAction?: "adding" | "removing";
//   technologies?: Technology[];
// }

// export type Badge = {
//   id: string;
//   name: string;
// };

// export default function DisplayBadges({
//   badgeContent,
//   onClick,
//   typeAction,
// }: DisplayBadgesProps) {
//   const { technologies } = useTechnology();
//   const handleClick = (technologyId: string) => {
//     if (onClick) onClick(technologyId);
//   };
//   return (
//     <ul className="flex flex-wrap justify-center gap-3 mx-auto max-w-[300px] min-h-12">
//       {technologyIds.map((technologyId) => (
//         <Badge
//           onClick={() => handleClick(technologyId)}
//           technologies={technologies}
//           typeAction={typeAction}
//           key={technologyId}
//         />
//       ))}
//     </ul>
//   );
// }
