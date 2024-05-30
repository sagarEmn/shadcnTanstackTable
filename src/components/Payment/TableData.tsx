import { TableStructure } from "./TableStructure";
import { columns, columnsId, Payment } from "./Columns";

const data: Payment[] = [
  {
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];
const secondData: Payment[] = [
  {
    id: "Eminem",
    amount: 500,
    status: "success",
    email: "m@example.com",
  },
];

export default function DemoPage() {
  return (
    <>
      <div className="container mx-auto py-10">
        <TableStructure columns={columns} data={data} />
      </div>
      <div className="container mx-auto py-10">
        <TableStructure columns={columnsId} data={secondData} />
      </div>
    </>
  );
}
