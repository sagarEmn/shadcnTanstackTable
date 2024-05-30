export type Payment = {
  id: string;
  name: string;
  joiningDate: string;
  providerType: string;
  contactNumber: string;
  status: "active" | "pending" | "inactive";
};

export const data: Payment[] = [
  {
    id: "ADSF35",
    name: "Harris",
    joiningDate: "May 28, 2024",
    providerType: "Company",
    contactNumber: "01-12345",
    status: 'active',
  },
  {
    id: "ADSF35",
    name: "Bob",
    joiningDate: "May 29, 2024",
    providerType: "Freelance",
    contactNumber: "01-123456",
    status: 'inactive',
  }
];
