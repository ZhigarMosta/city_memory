"use client";
import React from "react";
import style from "./menuText.module.scss";

// Определяем типы пропсов
interface MenuTextProps {
  text: string;
}

const MenuText: React.FC<MenuTextProps> = ({ text }) => {
  return <p className={style.text}>{text}</p>;
};

export default MenuText;
