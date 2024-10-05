"use client";

import React, { useState, ChangeEvent } from "react";
import { CopilotKit } from "@copilotkit/react-core";

import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  CardFooter,
} from "@material-tailwind/react";

interface FormData {
  rollno: string;
  name: string;
  dob: string;
  address: string;
  gender: string;
  contact: string;
}

interface Props {
  addEntry: (formData: FormData) => void;
}

const Form: React.FC<Props> = ({ addEntry }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    rollno: "",
    name: "",
    dob: "",
    address: "",
    gender: "",
    contact: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    addEntry(formData);
    setFormData({
      rollno: "",
      name: "",
      dob: "",
      address: "",
      gender: "",
      contact: "",
    });
    handleOpen();
  };

  return (
    <>
      <CopilotKit url="/api/copilotkit">
        <Button onClick={handleOpen}>Add Student</Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add Student
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Fill in the information below
              </Typography>
              <Input
                label="Roll No"
                size="lg"
                name="rollno"
                value={formData.rollno}
                onChange={handleChange}
              />
              <Input
                label="Name"
                size="lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                size="lg"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
              <Input
                label="Address"
                size="lg"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <Input
                label="Gender"
                size="lg"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <Input
                label="Contact"
                size="lg"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleSubmit} fullWidth>
                Add
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </CopilotKit>
    </>
  );
};

export default Form;
