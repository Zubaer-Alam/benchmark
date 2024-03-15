import React from "react";
import Section from "./Section";
import imageWhiteboard from "/public/images/ceo.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients at {" "}
          <strong className="font-semibold text-neutral-950">The Benchmark</strong> to facilitate the seamless
          placement of workers into companies across EU countries.
        </p>
        <p>
          Our team collaborates closely with companies to gather their staffing requirements and
          manage worker visas, while also coordinating with embassies and handling transportation
          logistics as necessary.
          {" "}
          {/* <strong className="font-semibold text-neutral-950">tour packages</strong>
          that cater to our clients' unique needs. */}
        </p>
        <p>
          Our consultants diligently research the best matches between workers and companies,
          crafting personalized itineraries for successful placements. Prior to placement, workers undergo
          a thorough screening process to ensure compatibility and qualifications.

          {/* <strong className="font-semibold text-neutral-950">travel plan</strong> and,
          more importantly, a budget. */}
        </p>
        <p>
          Once the placement process is complete, we provide our clients with a comprehensive
          plan outlining the details of the worker placement, along with transparent budgeting. This
          ensures clarity and empowers our clients to make informed decisions about their staffing needs.

          {/* <strong className="font-semibold text-neutral-950">travel plan</strong> and,
          more importantly, a budget. */}
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Detailed assessment forms</TagListItem>
        <TagListItem> Extensive worker analysis</TagListItem>
        <TagListItem>Tailored itinerary development</TagListItem>
        <TagListItem>Matching between companies and workers</TagListItem>
        <TagListItem>Individualized worker packages</TagListItem>
        <TagListItem>Financial planning and budgeting</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;