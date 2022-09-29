import React from "react";

// local import
import styles from "../style";
import Button from "./Button";

function CTA() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h1 className={styles.heading2}>Let's try our service now!</h1>
        <p className={`${styles.paragraph} max-w-[450px]`}>
          Everything ou need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles="" />
      </div>
    </section>
  );
}

export default CTA;
