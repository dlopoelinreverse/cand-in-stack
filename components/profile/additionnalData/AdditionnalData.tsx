"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import DisplayAnswers from "./DisplayAnswers";
import { AdditionnalApplyDataType } from "./ServerAdditionnalData";

interface AdditionnalDataProps {
  serverAppliesData: AdditionnalApplyDataType[];
}

export default function AdditionnalData({
  serverAppliesData,
}: AdditionnalDataProps) {
  return (
    <Accordion type="single" collapsible className="w-3/4 mx-auto my-5">
      {serverAppliesData.map((apply) => (
        <AccordionItem value={apply.id} key={apply.id}>
          <AccordionTrigger>
            <div className="flex justify-between w-full">
              {apply.offerTitle}
              <p className="font-extralight mr-7">
                {apply.createdAt.toDateString()}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <DisplayAnswers answers={apply.answers} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
