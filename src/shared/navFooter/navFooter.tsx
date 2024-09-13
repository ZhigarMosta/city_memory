"use client";
import React from "react";
import style from "./navFooter.module.scss";

interface NavFooterProps {
  text: string;
}

const NavFooter: React.FC<NavFooterProps> = ({ text }) => {
  return <p className={style.text}>{text}</p>;
};

export default NavFooter;
