"use client";
import React from "react";
import style from "./map.module.scss";
import Chelyabinsk from "@/shared/сhelyabinsk/сhelyabinsk";
import ChelyabinskMap from "@/features/ChelyabinskMap/ChelyabinskMap";
const Map = () => {
  return (
    <div className={style.container}>
      <Chelyabinsk />
      <ChelyabinskMap/>
    </div>
  );
};

export default Map;
