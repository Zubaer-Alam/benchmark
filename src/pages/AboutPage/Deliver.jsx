import React from "react";
import Section from "./Section";
import imageMeeting from "/public/images/portfolio_2.jpeg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we finalize each travel plan,
          taking into account any{" "}
          <strong className="font-semibold text-neutral-950">
            changes in requirements
          </strong>
          . This allows us to ensure the best travel experience within the client's budget.
        </p>
        <p>
          Despite the complexity of planning, most of the{" "}
          <strong className="font-semibold text-neutral-950">progress</strong>{" "}
          on each travel plan takes place in the final stages. The time allocated to each client is 
          spent crafting the perfect travel experience.
        </p>
        <p>
          We ensure that all aspects of the travel plan are{" "}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{" "}
          at launch — the itinerary, accommodations, and activities are all carefully planned 
          and confirmed.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          We ensure all aspects of the travel plan are thoroughly checked and confirmed.
        </ListItem>
        <ListItem title="Infrastructure">
          We use the best resources and partnerships to ensure a seamless travel experience.
        </ListItem>
        <ListItem title="Support">
          Our dedicated travel consultants are always available to provide support and answer any questions.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;