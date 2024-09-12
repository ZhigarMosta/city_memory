"use client";
import React from "react";
import style from "./card.module.scss";
import Chelyabinsk from "@/shared/сhelyabinsk/сhelyabinsk";
import Map from "@/shared/map/map";
const Card = () => {
  return (
    <div className={style.container}>
      <Chelyabinsk />
      <Map />
    </div>
  );
};

export default Card;
