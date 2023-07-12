import CustomButton from "../customs/CustomButton";

const fakeTechnos = [
  { id: "1", name: "React" },
  { id: "2", name: "Python" },
  { id: "3", name: "Sql" },
  { id: "4", name: "MongoDB" },
];

export default function TechnologiesFilterModal() {
  const technos = fakeTechnos;
  // getalltechnos
  // map technos => button with chip "+"
  // selected filters => map selected technos => button with chip "-"
  // this gonna be retunr in to th modal
  return (
    <div>
      <ul>
        {technos.map((techno) => (
          <CustomButton
            key={techno.id}
            actionLabel={techno.name}
            onClick={() => {}}
          />
        ))}
      </ul>
    </div>
  );
}
