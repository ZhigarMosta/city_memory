"use client";
import React from "react";
import style from "./soon.module.scss";
import NameBlockText from "@/shared/nameBlockText/nameBlockText";

import Wasenco from "./../../img/soon/Wasenco.jpg";
import ImgEngelsa from "./../../img/soon/Engelsa.jpg";
import ImgElkino from "./../../img/soon/Elkino.jpg";
import SoonCard from "@/shared/soonCard/soonCard";

const Soon = () => {
  return (
    <div className={style.container}>
      <NameBlockText text="Скоро на сайте" />
      <div className={style.card__container}>
        <SoonCard
          text__name="Улица Васенко"
          text__deckription="(ранее Пермская, Маршаловская, Оренбургская). Названа в честь Евдокима Лукьяновича Васенко (1882 – 1918). Евдоким Васенко – советский партийный деятель. Родился на Кубани в Ейске и закончил  ..."
          img={Wasenco}
        />
        <SoonCard
          text__name="Улица Елькина"
          text__deckription="(ранее Шиховская, Азиатская). Названа в честь Соломона Яковлевича Елькина (1888-1918) – челябинского революционера. Елькин родился в еврейской семье челябинского купца. Под влиянием старшего брата он ..."
          img={ImgElkino}
        />
        <SoonCard
          text__name="Улица Энгельса"
          text__deckription="Названа в честь Фридриха Энгельса (1820-1895) – немецкий политик, философ, публицист и историк. Сподвижник Маркса, один из создателей марксистской теории. С детства увлекался ..."
          img={ImgEngelsa}
        />
      </div>
    </div>
  );
};

export default Soon;
