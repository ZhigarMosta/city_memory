"use client";
import React from "react";
import style from "./mapLgend.module.scss";

const MapLgend = () => {
  return (
    <p className={style.text}>
      <span className={style.shaded}>Цветом </span>выделены улицы, о которых
      описана информация
    </p>
  );
};

export default MapLgend;
