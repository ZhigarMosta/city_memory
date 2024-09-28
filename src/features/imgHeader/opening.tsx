"use client";
import React from "react";
import style from "./imgHeader.module.scss";
import TextHeader from "../../shared/textHeader/textHeader";
import ArrowHeader from "../../shared/arrowHeader/arrowHeader";

const Opening = () => {
  return (
    <div>
      <div className={style.grey__block}></div>
      <div className={style.img}>
        <TextHeader />
        <div className={style.shadow}>
          <ArrowHeader />
        </div>
      </div>
    </div>
  );
};

export default Opening;
