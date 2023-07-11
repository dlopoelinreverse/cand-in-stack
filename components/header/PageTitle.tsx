"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function PageTitle() {
  const activeSegment = useSelectedLayoutSegment();
  return <h3>{activeSegment}</h3>;
}
