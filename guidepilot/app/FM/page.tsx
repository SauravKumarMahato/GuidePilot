'use client'; 

import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Layout from "../components/Layout";
import Form from "./Form";
import {
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";

// Define the type for fee data
interface FeeInfo {
  rollno: string;
  name: string;
  feeStatus: "Paid" | "Unpaid"; // Fee status can either be 'Paid' or 'Unpaid'
  year: string;
  penalty: number; // Negative amount if there's a penalty, otherwise 0
}

// Table header for fee management
const TABLE_HEAD: string[] = ["Roll no", "Name", "Fee Status", "Year", "Penalty", ""];

const FeeManagement: React.FC = () => {
  const [feeList, setFeeList] = useState<FeeInfo[]>([
    {
      rollno: "101",
      name: "John Michael",
      feeStatus: "Paid",
      year: "2024",
      penalty: 0,
    },
    {
      rollno: "102",
      name: "Sarah Johnson",
      feeStatus: "Unpaid",
      year: "2024",
      penalty: -50, // Penalty due to late payment
    },
    // Add more sample data as necessary...
  ]);

  // Implementing the useCopilotReadable to describe the fee records list
  useCopilotReadable({
    description: "The user's fee records list.",
    value: feeList,
  });

  const deleteFeeRecord = (rollno: string) => {
    setFeeList((prevRows) => prevRows.filter((fee) => fee.rollno !== rollno));
  };

  // Implementing the useCopilotAction for deleting a fee record
  useCopilotAction({
    name: "deleteFeeRecord",
    description: "Delete a fee record",
    parameters: [
      {
        name: "rollno",
        type: "string",
        description: "The roll number of the student whose fee record to delete.",
      },
    ],
    handler: ({ rollno }: { rollno: string }) => {
      deleteFeeRecord(rollno);
    },
    render: "Deleting a fee record...",
  });

  const addFeeRecord = (fee: FeeInfo) => {
    setFeeList([...feeList, fee]);
  };

  // Implementing the useCopilotAction for updating the fee list
  useCopilotAction({
    name: "updateFeeList",
    description: "Update the fee records list",
    parameters: [
      {
        name: "fees",
        type: "object[]",
        description: "The updated fee records list.",
        attributes: [
          {
            name: "rollno",
            type: "string",
            description: "The roll number of the student.",
          },
          {
            name: "name",
            type: "string",
            description: "The name of the student.",
          },
          {
            name: "feeStatus",
            type: "string",
            description: "The latest tuition fee status (Paid or Unpaid).",
          },
          {
            name: "year",
            type: "string",
            description: "The year for which the fee status is recorded.",
          },
          {
            name: "penalty",
            type: "number",
            description: "Penalty amount for late payment (negative if penalty, else 0).",
          },
        ],
      },
    ],
    handler: ({ fees }: { fees: FeeInfo[] }) => {
      setFeeList(fees);
    },
    render: "Updating the fee records list...",
  });

  return (
    <Layout>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {feeList.map(({ rollno, name, feeStatus, year, penalty }, index) => {
              const isLast = index === feeList.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={rollno}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {rollno}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color={feeStatus === "Paid" ? "green" : "red"} // Color based on fee status
                      className="font-normal"
                    >
                      {feeStatus}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {year}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color={penalty < 0 ? "red" : "blue-gray"} // Red for penalty, blue-gray otherwise
                      className="font-normal"
                    >
                      {penalty < 0 ? `Penalty: ₹${Math.abs(penalty)}` : "No Penalty"}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                      onClick={() => deleteFeeRecord(rollno)}
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-10">
          <Form addEntry={addFeeRecord} />
        </div>
      </Card>
    </Layout>
  );
}

export default FeeManagement;
