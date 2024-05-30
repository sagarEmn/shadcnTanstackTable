import { TableStructure } from "./TableStructure";
import { columns, Payment } from "./Columns";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <TableStructure columns={columns} data={data} />
    </div>
  );
}