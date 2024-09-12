"use client";
import React from "react";
import style from "./soon.module.scss";
import NameBlockText from "@/shared/nameBlockText/nameBlockText";
import img1 from "./../../img/soon1.png";
import img2 from "./../../img/soon2.png";
import img3 from "./../../img/soon3.png";
import SoonCard from "@/shared/soonCard/soonCard";

const Soon = () => {
  return (
    <div className={style.container}>
      <NameBlockText text="Скоро на сайте" />
      <div className={style.card__container}>
        <SoonCard
          text__name="Lörem Ipsum"
          text__deckription="Lörem ipsum huv demöment emedan bena labelt i diang fåsål, i peling dov hexapengen lölingar doresat. "
          img={img1}
        />
        <SoonCard
          text__name="Lörem Ipsum"
          text__deckription="Lörem ipsum huv demöment emedan bena labelt i diang fåsål, i peling dov hexapengen lölingar doresat. "
          img={img2}
        />
        <SoonCard
          text__name="Lörem Ipsum"
          text__deckription="Lörem ipsum huv demöment emedan bena labelt i diang fåsål, i peling dov hexapengen lölingar doresat. "
          img={img3}
        />
      </div>
    </div>
  );
};

export default Soon;
