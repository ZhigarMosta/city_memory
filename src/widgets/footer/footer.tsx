"use client";
import React from "react";
import style from "./footer.module.scss";
import Image from "next/image";
import logo from "./../../img/logo.svg";
import Contacts from "@/shared/contacts/contacts";
import NavFooter from "@/shared/navFooter/navFooter";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.main_footer__container}>
        <Image src={logo} alt="logo" className={style.logo} />
        <div className={style.right__container}>
          <div className={style.navigation__container}>
            <NavFooter text="Об Организации" />
            <NavFooter text="Новости" />
            <NavFooter text="Контакты" />
            <NavFooter text="Помочь" />
          </div>
          <div className={style.contacts__container}>
            <Contacts />
          </div>
        </div>
      </div>
      <p className={style.protected}>
        ©️ Городская память. 2024. Все права защищены
      </p>
    </div>
  );
};

export default Footer;
