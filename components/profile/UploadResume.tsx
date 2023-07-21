"use client";

import axios from "axios";
import { ChangeEvent } from "react";

interface UploadResumeProps {
  uploadUserResumeUuid: (resumeUuid: string) => void;
}

export default function UploadResume({
  uploadUserResumeUuid,
}: UploadResumeProps) {
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

    axios
      .post("/api/saveFile", formData)
      .then((res) => uploadUserResumeUuid(res.data.filename))
      .catch((error) => alert(error));
  };
  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
}
