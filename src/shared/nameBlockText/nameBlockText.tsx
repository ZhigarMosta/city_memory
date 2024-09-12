"use client";
import React from "react";
import style from "./nameBlockText.module.scss";

interface NameBlockTextProps {
  text: string;
}
const NameBlockText: React.FC<NameBlockTextProps> = ({ text }) => {
  return <div className={style.text}>{text}</div>;
};

export default NameBlockText;
