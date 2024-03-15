import React from "react";
import Section from "./Section";
import imageLaptop from "/public/images/hr.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Planning" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        In the planning phase, we meticulously tailor staffing strategies to meet each company's
unique needs. We analyze their requirements, including skills, experience, and preferences,
leveraging our expertise to identify the best candidates. Through thorough assessments, we
ensure precise matches that exceed expectations
        </p>
        <p>
        We prioritize clear communication and collaboration, involving both the company and
selected workers throughout the process. Our dedicated account managers provide regular
updates, ensuring a smooth execution. Our goal is to deliver value, fostering long-term
partnerships based on trust, reliability, and exceptional service.

        </p>
        {/* <p>
          Our travel consultants are trained to promptly reply to client emails, ensuring
          that all questions and concerns are addressed in a timely manner. This reinforces our commitment 
          to excellent customer service and encourages clients to provide feedback.
        </p> */}
      </div>
      <Blockquote
        author={{ name: "“Nafiza Islam Khan", role: "CEO, The Benchmark" }}
        className="mt-12"
      >
        The travel consultants at our agency were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;