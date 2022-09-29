import React from "react";

// component imports
import Button from "./Button";

// local imports
import { features } from "../constants";
import styles, { layout } from "../style";
import { TypeFeature } from "../types";

type FeaturedCardProps = TypeFeature & {
  index: number;
};

const FeatureCard = ({ icon, content, title, index }: FeaturedCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50px] h-[50px] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p
        className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1`}
      >
        {content}
      </p>
    </div>
  </div>
);

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do this business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card,you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`flex-col ${layout.sectionImg}`}>
        {features.map((feature: TypeFeature, index: number) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
