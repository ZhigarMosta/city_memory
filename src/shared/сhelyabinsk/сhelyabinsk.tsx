"use client";
import React from "react";
import style from "./сhelyabinsk.module.scss";
import Image from "next/image";
import icon from "./../../img/chelyabinskGerb.png";

const Chelyabinsk = () => {
  return (
    <div className={style.container}>
      <Image src={icon} alt="chelyabinsk gerb" />
      <div className={style.text}>Челябинск</div>
    </div>
  );
};

export default Chelyabinsk;
