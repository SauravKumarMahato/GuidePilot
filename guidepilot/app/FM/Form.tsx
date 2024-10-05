"use client";

import { CopilotKit } from "@copilotkit/react-core";

import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  CardFooter,
} from "@material-tailwind/react";

interface FeeInfo {
  id: string;
  rollno: string;
  name: string;
  feeStatus: "Paid" | "Unpaid"; // Fee status can either be 'Paid' or 'Unpaid'
  year: string;
  penalty: number; // Penalty for late payment (negative for penalty, else 0)
}

interface Props {
  addEntry: (feeInfo: FeeInfo) => void;
}

const Form: React.FC<Props> = ({ addEntry }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FeeInfo>({
    id: "",
    rollno: "",
    name: "",
    feeStatus: "Unpaid",
    year: "",
    penalty: 0,
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    addEntry(formData);
    setFormData({
      id: "",
      rollno: "",
      name: "",
      feeStatus: "Unpaid",
      year: "",
      penalty: 0,
    });
    handleOpen();
  };

  return (
    <>
      <CopilotKit url="/api/copilotkit">
        <Button onClick={handleOpen}>Add Fee Record</Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add Fee Record
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Fill the fee record details below
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Roll No
              </Typography>
              <Input
                label="Roll No"
                size="lg"
                name="rollno"
                value={formData.rollno}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Name
              </Typography>
              <Input
                label="Name"
                size="lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Fee Status
              </Typography>
              <Input
                label="Fee Status"
                size="lg"
                name="feeStatus"
                value={formData.feeStatus}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Year
              </Typography>
              <Input
                label="Year"
                size="lg"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Penalty
              </Typography>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write penaly here..."
                className="peer w-full h-[10rem] bg-transparent text-blue-gray-700 font-sans font-normal outline-none border border-blue-gray-200 focus:border-gray-900 text-sm p-3 rounded-md"
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleSubmit} fullWidth>
                Add Fee Record
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </CopilotKit>
    </>
  );
};

export default Form;
