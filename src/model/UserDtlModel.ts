import { MdBusiness, MdLocationOn, MdPerson } from "react-icons/md";
import type { UserDetailModel } from "../types/user";

export const UserDtlModel: UserDetailModel[] = [
  {
    title: "Basic Details",
    icon: MdPerson,
    data: [
      {
        label: "Email",
        value: "email",
      },
      {
        label: "Username",
        value: "username",
      },
      {
        label: "Phone",
        value: "phone",
      },
      {
        label: "Website",
        value: "website",
      },
    ],
  },
  {
    title: "Address Details",
    icon: MdLocationOn,
    data: [
      {
        label: "Street",
        value: "address.street",
      },
      {
        label: "Suite",
        value: "address.suite",
      },
      {
        label: "City",
        value: "address.city",
      },
      {
        label: "Zipcode",
        value: "address.zipcode",
      },
    ],
  },

  {
    title: "Company Details",
    icon: MdBusiness,
    data: [
      {
        label: "Company",
        value: "company.name",
      },
    ],
  },
];
