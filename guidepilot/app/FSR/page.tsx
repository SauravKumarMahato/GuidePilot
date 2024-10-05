"use client";

import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Form from "./Form";
import Layout from "../components/Layout";

interface Feedback {
  name: string;
  rollno: string;
  year: string; // Added year of study
  description: string;
}

const FeedbackPage: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  const addFeedback = (newFeedback: Feedback) => {
    setFeedbackList([...feedbackList, newFeedback]);
  };

  return (
    <Layout>
      <div className="sm:mx-[10vw] md:mx-[14vw] lg:mx-[16vw]">
        <h2 className="text-2xl text-center mt-10 mb-4">Student Feedback</h2>
        <hr className="mb-6" />

        <Form addFeedback={addFeedback} />

        {/* Feedback List */}
        <Card className="mt-8 p-6">
          <Typography variant="h5" color="blue-gray" className="mb-6">
            Feedback List
          </Typography>
          {feedbackList.length > 0 ? (
            feedbackList.map((feedback, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <Typography variant="h6">
                  {feedback.name} ({feedback.rollno}) - Year {feedback.year}
                </Typography>
                <Typography variant="paragraph" color="gray" className="mt-2">
                  {feedback.description}
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="paragraph" color="gray">
              No feedback available.
            </Typography>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
