import React from "react";

// local imports
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find better card <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[489px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor. Aliquest ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card_deals" className={`w-[100%] h-[100%]`} />
      </div>
    </section>
  );
}

export default CardDeal;
