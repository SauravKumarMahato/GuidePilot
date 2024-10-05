"use client";

import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-28 py-10">
        {/* Video at the top */}
        <video
          src="/student.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[90vw] md:max-w-[500px] h-auto mb-8 rounded-md"
        />

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl font-light sm:font-normal leading-relaxed text-center text-gray-800 font-serif">
          Welcome to <span className="font-semibold">GuidePilot</span>, your ultimate solution for comprehensive
          student information management. With our innovative platform, managing
          student records, tracking fees, and providing feedback has never been
          more efficient. GuidePilot simplifies the process of overseeing
          student data, allowing educators and administrators to seamlessly add
          new student information, manage fee payments, and deliver constructive
          feedback. Our user-friendly interface empowers you to navigate through
          student records effortlessly, ensuring that you stay informed and
          organized. Experience the future of student management with
          <span className="font-semibold"> GuidePilot</span>, where streamlined processes meet intuitive design, making
          education management simpler and more effective.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
