"use client";
import React from "react";
import style from "./imgHeader.module.scss";
import TextHeader from "../../shared/textHeader/textHeader";
import ArrowHeader from "../../shared/arrowHeader/arrowHeader";

const ImgHeader = () => {
  return (
    <div className={style.gray}>
      <div className={style.img}>
        <TextHeader />
        <div className={style.shadow}>
          <ArrowHeader />
        </div>
      </div>
    </div>
  );
};

export default ImgHeader;
