import React from "react";
import Section from "./Section";
import imageMeeting from "/public/images/deliver.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we finalize each staffing plan, considering any
          changes in requirements. {" "}
          {/* <strong className="font-semibold text-neutral-950">
            changes in requirements
          </strong> */}
          This ensures the best match between workers and companies within
          the client's parameters.
        </p>
        <p>
          Despite the complexity of planning, the bulk of {" "}
          <strong className="font-semibold text-neutral-950">progress</strong>{" "}
          progress on each staffing plan occurs in
          the final stages. Our dedicated time is spent meticulously crafting the ideal worker-company
          match.
        </p>
        <p>
          e ensure that all aspects of the staffing plan are fully{" "}
          <strong className="font-semibold text-neutral-950">
            functional
          </strong>{" "}
          at launch — from
          worker profiles to company placements are carefully planned and confirmed.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          We ensure all aspects of the staffing plan are thoroughly checked and
          confirmed.

        </ListItem>
        <ListItem title="Infrastructure">
          We utilize top resources and partnerships to ensure seamless
          worker-company matching.
        </ListItem>
        <ListItem title="Support">
          Our dedicated consultants are always available to provide support and
          address any questions.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;