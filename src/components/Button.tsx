import React from "react";

type ButtonProps = {
  styles: string;
};

function Button({ styles }: ButtonProps) {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-[18px] outline-none text-primary ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
}

export default Button;
