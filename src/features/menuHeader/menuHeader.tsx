"use client";
import React from "react";
import style from "./menuHeader.module.scss";
import Image from "next/image";
import logo from "../../img/logoHeader.svg";
import MenuText from "@/shared/menuText/menuText";

const MenuHeader = () => {
  return (
    <div className={style.container}>
      <input
        id="menu_toggle"
        name="menu_toggle"
        className={style.menu_toggle}
        type="checkbox"
      />
      <div className={style.logo__wrapper}>
        <Image className={style.img} src={logo} alt="logo" />
        <label className={style.menu_button_container} htmlFor="menu_toggle">
          <div className={style.menu_button}></div>
        </label>
      </div>
      <div className={style.wrapper}>
        <div className={style.menu}>
          <MenuText text="Об Организации" />
          <MenuText text="Новости" />
          <MenuText text="Контакты" />
          <MenuText text="Помочь" />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
