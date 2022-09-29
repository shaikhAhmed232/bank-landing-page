import React from "react";

// local imports
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="w-[50%] h-[50%] rounded-full z-[3] absolute -left-1/2 top-0 white__gradient" />
        <div className="w-[50%] h-[50%] rounded-full z-[0] absolute -left-1/2 bottom-0 pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing and
          invoicing
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultreces ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer "
          />
          <img
            src={google}
            alt="play_store"
            className="w-[128px] h-[42px] object-contain  cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
