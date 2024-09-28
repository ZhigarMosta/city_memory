"use client";
import React from "react";
import style from "./map.module.scss";
import Chelyabinsk from "@/shared/сhelyabinsk/сhelyabinsk";
import ChelyabinskMap from "@/features/ChelyabinskMap/ChelyabinskMap";
import MapLgend from "@/shared/mapLgend/mapLgend";
const Map = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container__map}>
        <Chelyabinsk />
        <ChelyabinskMap />
      </div>
      <MapLgend />
    </div>
  );
};

export default Map;
