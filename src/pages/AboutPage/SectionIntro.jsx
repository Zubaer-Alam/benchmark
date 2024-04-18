import React from "react";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FadeIn className="">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "md:mb-6 mb-3 block font-display text-base font-semibold",
                  invert ? "text-white" : "text-neutral-950"
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block font-display tracking-tight [text-wrap:balance]",
              smaller
                ? "text-2xl font-semibold"
                : "text-3xl font-medium md:text-5xl",
              invert ? "text-white" : "text-neutral-950"
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              "md:mt-6 mt-3 text-xl",
              invert ? "text-neutral-300" : "text-neutral-600"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionIntro;
