import React from "react";
import Section from "./Section";
import imageLaptop from "/public/images/portfolio_3.jpeg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive travel plan
          for each client and start working towards delivery. The travel plan is a
          detailed itinerary designed to ensure the most enjoyable travel experience.
        </p>
        <p>
          Each client is assigned a dedicated travel consultant to keep lines of
          communication open and provide regular updates on the progress of the travel plan.
          They act as a liaison between the client’s travel dreams and the team who are hard at work 
          crafting the perfect travel experience.
        </p>
        <p>
          Our travel consultants are trained to promptly reply to client emails, ensuring
          that all questions and concerns are addressed in a timely manner. This reinforces our commitment 
          to excellent customer service and encourages clients to provide feedback.
        </p>
      </div>
      <Blockquote
        author={{ name: "example", role: "CEO of example" }}
        className="mt-12"
      >
        The travel consultants at our agency were so regular with their progress updates we almost began
        to think they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;