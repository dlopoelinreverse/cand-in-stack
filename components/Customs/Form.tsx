import { FromElement } from "@/app/types/customCompoponentTypes";

interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLElement>) => void;
  formContent: FromElement[];
}

export default function Form({ handleSubmit, formContent }: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      {/* {formContent.map((element) => {
        if (element.type === "submit") return <Button label="" />;
      })} */}
    </form>
  );
}
