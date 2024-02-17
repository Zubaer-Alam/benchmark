import React from "react";
import Section from "./Section";
import imageWhiteboard from "/public/images/post_1.jpeg"; 
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-white">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-50">travel needs</strong> and
          preferences, immersing ourselves in their travel dreams to understand
          what makes their ideal vacation.
        </p>
        <p>
          Our team of travel consultants research the best destinations and create
          personalized itineraries while our account managers focus on ensuring the
          best deals and experiences. Our senior travel experts then curate the best{" "}
          <strong className="font-semibold text-neutral-50">tour packages</strong>
          that cater to our clients' unique needs.
        </p>
        <p>
          Once the full itinerary is complete, we present our clients with a comprehensive
          <strong className="font-semibold text-neutral-50">travel plan</strong> and,
          more importantly, a budget.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-50">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Personalized questionnaires</TagListItem>
        <TagListItem>Destination research</TagListItem>
        <TagListItem>Travel itinerary creation</TagListItem>
        <TagListItem>Travel surveys</TagListItem>
        <TagListItem>Customized tour packages</TagListItem>
        <TagListItem>Budget planning</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;