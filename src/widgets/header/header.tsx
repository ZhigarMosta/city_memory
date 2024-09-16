"use client";
import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../img/logoHeader.svg";
import MenuText from "@/shared/menuText/menuText";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [menuChecked, setmenuChecked] = useState(false);

  const onChange = () => {
    setmenuChecked(!menuChecked);
  };

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setVisible(true);
    } else {
      setVisible(false);
      setmenuChecked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.header} ${visible ? style.visible : ""}`}>
      <div className={style.container}>
        <input
          id="menu_toggle"
          name="menu_toggle"
          className={style.menu_toggle}
          type="checkbox"
          onChange={onChange}
          checked={menuChecked}
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
    </div>
  );
};

export default Header;
