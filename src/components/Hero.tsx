import React from "react";

// component import
import GetStarted from "./GetStarted";

// local imports
import styles from "../style";
import { discount, robot } from "../assets";

function Hero() {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex items-center flex-row py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins flex-1 font-semibold ss:text-[62px] text-[42px] text-white">
            The Next <br className="sm:block hidden" />
            <span className={`text-gradient`}>Generation</span>{" "}
            <br className="sm:block hidden" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[58px] text-[42px] text-white leading-[75px] w-full">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute w-[40%] top-0 h-[35%] pink__gradient z-[0]"></div>
        <div className="absolute w-[80%] bottom-40 h-[40%] whit__gradient z-[1]"></div>
        <div className="absolute w-[50%] right-20 bottom-20 h-[50%] blue__gradient z-[0]"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
