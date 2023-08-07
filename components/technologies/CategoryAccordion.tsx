"use client";
import { Category, Technology } from "@/app/types/types";
import DisplayTechnologies from "./DisplayTechnologies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface CategoryAccordion {
  category: Category;
  technologies: Technology[];
  onClick: (technologyId: string) => void;
}

export default function CategoryAccordion({
  category,
  technologies,
  onClick,
}: CategoryAccordion) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{category.name}</AccordionTrigger>
        <AccordionContent>
          <DisplayTechnologies
            typeAction="adding"
            onClick={onClick}
            technologiesIds={technologies?.map((technology) => technology.id)}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
