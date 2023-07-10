import { Category, Technologie } from "@/app/types/types";

interface CategoryAccordion {
  category: Category;
  technologies: Technologie[];
  onClick: (technologyId: string) => void;
}

export default function CategoryAccordion({
  category,
  technologies,
  onClick,
}: CategoryAccordion) {
  return (
    <div>
      <h4>{category.name}</h4>
      <ul>
        {technologies?.map((technology) => (
          <li onClick={() => onClick(technology.id)} key={technology.id}>
            {technology.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
