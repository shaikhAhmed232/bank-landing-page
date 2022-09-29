import React from "react";

// components
import FeedBackCard from "./FeedBackCard";

// local import
import { feedback } from "../constants";
import styles from "../style";

import { TypeFeedback } from "../types";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient " />

      <div className="w-full justify-between flex sm:flex-row flex-col items-center sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything ou need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-row overflow-auto lg:justify-center justify-start w-full feedback-container relative ">
        {feedback.map((card: TypeFeedback, index: number) => (
          <FeedBackCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
