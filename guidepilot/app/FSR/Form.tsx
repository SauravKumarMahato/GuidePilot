"use client";

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
import {
  CopilotKit,
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";
import { CopilotTextarea } from "@copilotkit/react-textarea";

// Define the type for feedback form data
interface FeedbackFormData {
  name: string;
  rollno: string;
  year: string;
  description: string;
}

interface Props {
  addFeedback: (formData: FeedbackFormData) => void;
}

const Form: React.FC<Props> = ({ addFeedback }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    rollno: "",
    year: "",
    description: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    addFeedback(formData);
    setFormData({
      name: "",
      rollno: "",
      year: "",
      description: "",
    });
    handleOpen();
  };

  // Make description readable with Copilot
  useCopilotReadable({
    description: "Field to provide student feedback",
    value: formData.description,
  });

  // Copilot action to set feedback description
  useCopilotAction({
    name: "setFeedback",
    description: "Set the feedback for the student",
    parameters: [
      {
        name: "description",
        type: "string",
        description: "Detailed feedback for the student",
      },
    ],
    handler: ({ description }: { description: string }) => {
      setFormData({ ...formData, description });
    },
    render: "Setting the feedback...",
  });

  return (
    <>
      <CopilotKit url="/api/copilotkit">
        <Button onClick={handleOpen} variant="gradient">
          Add Feedback
        </Button>
        <Dialog
          size="sm"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Provide Feedback
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-3 font-normal"
                color="gray"
              >
                Fill in the details below
              </Typography>
              <Input
                label="Name"
                size="lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Roll No"
                size="lg"
                name="rollno"
                value={formData.rollno}
                onChange={handleChange}
              />
              <Input
                label="Year of Study"
                size="lg"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
              <CopilotTextarea
                className="peer w-full h-[20vh] bg-transparent text-blue-gray-700 font-sans font-normal outline-none border border-blue-gray-200 focus:border-gray-900 focus:ring-0 transition-all text-sm p-3 rounded-md resize-none overflow-auto placeholder:text-gray-400 placeholder:opacity-100"
                label="Qualities"
                placeholder="Briefly describe qualities of the employee..."
                value={formData.description}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, description: value })
                }
                autosuggestionsConfig={{
                  textareaPurpose:
                    "Suggest a good feedback to student according to the given context.",
                  chatApiConfigs: {
                    suggestionsApiConfig: {
                      forwardedParams: {
                        max_tokens: 20,
                        stop: [".", "?", "!"],
                      },
                    },
                  },
                }}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleSubmit} fullWidth>
                Submit Feedback
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </CopilotKit>
    </>
  );
};

export default Form;
