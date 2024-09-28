"use client";
import React from "react";
import style from "./contacts.module.scss"
import Image from "next/image";
import phone from "./../../img/call.svg";
import email from "./../../img/sms.svg";
import location from "./../../img/location.svg";

const Contacts = () => {
  return (
    <div className={style.container}>
      <div className={style.contacts__wrapper}>
        <Image src={phone} alt="phone" />{" "}
        <a href="tel:+7 999 123 45 67" className={style.text}>+7 999 123 45 67</a>
      </div>
      <div className={style.contacts__wrapper}>
        <Image src={email} alt="email" />{" "}
        <p className={style.text}>citymemory@mail.ru</p>
      </div>
      <div className={style.contacts__wrapper}>
        <Image src={location} alt="location" />{" "}
        <p className={style.text}>Челябинск, Ленина 1</p>
      </div>
    </div>
  );
};

export default Contacts;
