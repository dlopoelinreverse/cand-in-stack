"use client";

import axios from "axios";
import Link from "next/link";
import { ChangeEvent } from "react";

export default function Upload() {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (!fileInput.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      console.warn("files list is empty");
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    try {
      axios
        .post("/api/saveFile", formData)
        .then((res) => console.log(res.data));
    } catch (error) {}
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Link href="../../public/uploads/dlopoel/CV_Leopold_Lesaulnier.pdf">
        PDF
      </Link>
    </div>
  );
}
