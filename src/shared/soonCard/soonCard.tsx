"use client";
import React from "react";
import style from "./soonCard.module.scss";
import Image from "next/image";

interface SoonCardProps {
  text__name: string;
  text__deckription: string;
  img: any;
}

const SoonCard: React.FC<SoonCardProps> = ({
  text__name,
  text__deckription,
  img,
}) => {
  return (
    <div className={style.container}>
      <Image src={img} alt="нововведение" className={style.img} />
      <div className={style.text__container}>
        <div className={style.text__name}>{text__name}</div>
        <div className={style.text__deckription}>{text__deckription}</div>
      </div>
    </div>
  );
};

export default SoonCard;
