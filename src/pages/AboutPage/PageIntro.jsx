import React from "react";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";

const PageIntro = ({ eyebrow, title, children, centered = false }) => {
  return (
    <Container className={clsx("pt-28 lg:pt-36", centered && "text-center")}>
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "md:mt-6 mt-3 block max-w-5xl font-display md:text-5xl text-3xl font-medium tracking-tight text-neutral-950  [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6  text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
};

export default PageIntro;
