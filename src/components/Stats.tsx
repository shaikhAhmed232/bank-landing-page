import React from "react";

// local imports
import { stats } from "../constants";
import styles from "../style";
import { TypeStats } from "../types";

function Stats() {
  return (
    <section
      id="stats"
      className={`flex flex-wrap ${styles.flexCenter} sm:mb-20 mb-6`}
    >
      {stats.map((stat: TypeStats) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[52px] leading-[40px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
