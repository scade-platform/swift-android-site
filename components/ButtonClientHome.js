"use client";

import React from "react";
import { InfoHome } from "./InfoHome";
import { SlArrowDown } from "react-icons/sl";

const ButtonClientHome = () => {
  return (
    <div>
      <button
        onClick={() => {
          const element = document.getElementById("infoRef");
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex gap-4 mx-auto flex-col sm:flex-rows"
      >
        <SlArrowDown className="animate-pulse" />
      </button>

      <div className="mt-28" id="infoRef">
        <InfoHome />
      </div>
    </div>
  );
};

export default ButtonClientHome;
