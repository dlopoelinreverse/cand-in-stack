interface TableProps {
  columns: ColumnsType[];
  content: 
}

export type ColumnsType = {
  header: string;
  accesId: string;
  usage?: "date" | "status" | "linkToId";
};

export default function Table({ columns }: TableProps) {
  return (
    <table className="container">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accesId}>{column.header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
}
