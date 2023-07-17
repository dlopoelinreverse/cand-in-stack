"use client";

import Button from "@/components/customs/Button";
import axios from "axios";
import React from "react";

export default function Testapi() {
  return (
    <>
      <Button
        label="test get user technologies"
        onClick={() =>
          axios("/api/user/technologies").then((res) => console.log(res))
        }
      />
      <Button
        label="ajouter technologie a un user"
        onClick={() =>
          axios
            .patch("/api/user/update/technologies", {
              technologiesIds: ["64abd9ece091f636c39c4369"],
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
      />
    </>
  );
}
