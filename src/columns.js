import { format, parseISO } from "date-fns";
export const columns = [
  { Header: "Id", accessor: "id" },
  { Header: "First Name", accessor: "first_name" },
  { Header: "Last Name", accessor: "last_name" },
  { Header: "Email", accessor: "email" },
  { Header: "Gender", accessor: "gender" },
  { Header: "Ip Address", accessor: "ip_address" },
  { Header: "Date of Birth", accessor: "date_of_birth" },
];

export const grouped_columns = [
  { Header: "Id", accessor: "id" },
  {
    Header: "About",
    columns: [
      { Header: "First Name", accessor: "first_name" },
      { Header: "Last Name", accessor: "last_name" },
      { Header: "Email", accessor: "email" },
      { Header: "Gender", accessor: "gender" },
    ],
  },
  {
    Header: "More",
    columns: [
      { Header: "Ip Address", accessor: "ip_address" },
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
        Cell: ({ value }) => {
          if (!value || isNaN(new Date(value).valueOf())) {
            return "Invalid date";
          }

          const date = parseISO(value);
          return format(date, "dd/MM/yyyy");
        },
      },
    ],
  },
];
