"use client";
import React from "react";
import style from "./textHeader.module.scss";

const TextHeader = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Городская память</h1>
      <p className={style.text}>
        Город в лицах: изучаем и сохраняем культурное наследие
      </p>
    </div>
  );
};

export default TextHeader;
