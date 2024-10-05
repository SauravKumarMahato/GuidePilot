'use client'; 

import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Layout from "../components/Layout";
import Form from "./Form";
import {
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";

// Define the type for student data
interface StudentInfo {
  rollno: string;
  name: string;
  dob: string;
  address: string;
  gender: string;
  contact: string;
}

// Table header for student management
const TABLE_HEAD: string[] = ["Rollno", "Name", "DOB", "Address", "Gender", "Contact", ""];

const StudentTable: React.FC = () => {
  const [studentList, setStudentList] = useState<StudentInfo[]>([
    {
      rollno: "101",
      name: "John Michael",
      dob: "12/04/2000",
      address: "New York",
      gender: "Male",
      contact: "123-456-7890",
    },
    // Add more sample data if needed...
  ]);

  // Implementing the useCopilotReadable to describe the student's list
  useCopilotReadable({
    description: "The user's student information list.",
    value: studentList,
  });

  const deleteStudent = (rollno: string) => {
    setStudentList((prevRows) => prevRows.filter((student) => student.rollno !== rollno));
  };

  // Implementing the useCopilotAction for deleting a student from the list
  useCopilotAction({
    name: "deleteStudent",
    description: "Delete a student",
    parameters: [
      {
        name: "rollno",
        type: "string",
        description: "The roll number of the student to delete.",
      },
    ],
    handler: ({ rollno }: { rollno: string }) => {
      deleteStudent(rollno);
    },
    render: "Deleting a student...",
  });

  const addStudent = (student: StudentInfo) => {
    setStudentList([...studentList, student]);
  };

  // Implementing the useCopilotAction for updating the student list
  useCopilotAction({
    name: "updateStudentList",
    description: "Update the student list",
    parameters: [
      {
        name: "students",
        type: "object[]",
        description: "The new and updated student list items.",
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
            name: "dob",
            type: "string",
            description: "The date of birth of the student.",
          },
          {
            name: "address",
            type: "string",
            description: "The address of the student.",
          },
          {
            name: "gender",
            type: "string",
            description: "The gender of the student.",
          },
          {
            name: "contact",
            type: "string",
            description: "The contact details of the student.",
          },
        ],
      },
    ],
    handler: ({ students }: { students: StudentInfo[] }) => {
      setStudentList(students);
    },
    render: "Updating the student list...",
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
            {studentList.map(({ rollno, name, dob, address, gender, contact }, index) => {
              const isLast = index === studentList.length - 1;
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
                      color="blue-gray"
                      className="font-normal"
                    >
                      {dob}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {address}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {gender}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {contact}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                      onClick={() => deleteStudent(rollno)}
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
          <Form addEntry={addStudent} />
        </div>
      </Card>
    </Layout>
  );
}

export default StudentTable;
