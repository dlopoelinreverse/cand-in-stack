import Button from "@/components/customs/Button";
import React, { useState } from "react";
import AddTechnologies from "../AddTechnologies";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import useUser from "@/hooks/useUser";

interface AddUserTechnologiesProps {
  userTechnologies: string[];
}

export default function AddUserTechnologies({
  userTechnologies,
}: AddUserTechnologiesProps) {
  const { updateUserTechnologies } = useUser();
  const [userTechnologiesIds, setUserTechnologiesIds] =
    useState<string[]>(userTechnologies);

  const handeUpdateUserTechnologies = () => {
    updateUserTechnologies.mutate(userTechnologiesIds);
  };
  return (
    <>
      <AddTechnologies
        technologiesIds={userTechnologiesIds}
        setTechnologiesIds={setUserTechnologiesIds}
      />
      <div className="flex justify-center gap-5">
        <Button label="Valider" onClick={handeUpdateUserTechnologies} />
        <Button
          label="Annuler"
          onClick={() => setUserTechnologiesIds(userTechnologies)}
          secondary
        />
      </div>
    </>
  );
}
