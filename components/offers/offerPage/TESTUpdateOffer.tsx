import Button from "@/components/customs/Button";
import axios from "axios";
import React from "react";

export default function TESTUpdateOffer({ offerId }: { offerId: string }) {
  const handleTestUpdate = () => {
    const updatedData = {
      title: "Developpeur FrontEnd",
      description: "Offre à pourvoir dans une récent entreprise",
    };
    const updatedKeys = ["title", "description"];
    axios
      .patch(`/api/offer/${offerId}`, { updatedData, updatedKeys })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Button label="testupdate" onClick={handleTestUpdate} />
    </div>
  );
}
