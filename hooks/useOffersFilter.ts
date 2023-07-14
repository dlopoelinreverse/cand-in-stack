import { useState } from "react";

export default function useOffersFilter() {
  const [filters, setFilters] = useState([
    { filterId: "match", label: "Match", isActive: false },
    {
      filterId: "technologies",
      label: "Technologies",
      isActive: false,
      filters: [],
    },
    { filterId: "cities", label: "Villes", isActive: false, filters: [] },
    { filterId: "dates", label: "Dates", isActive: false, filters: [] },
  ]);

  const toggleFilters = (filterId: string) => {
    setFilters((current) =>
      current.map((filter) => {
        if (filter.filterId === filterId) {
          return { ...filter, isActive: !filter.isActive };
        }
        return filter;
      })
    );
  };

  return { filters, toggleFilters };
}
