"use client";
import React from "react";
import style from "./modalMemory.module.scss";
import Image from "next/image";
import imgCross from "./../../img/cross.svg";

interface ModalMemoryProps {
  closeModal: any;
  img: any;
  nameLocation: string | null;
  year: string | null;
  previously: string | null;
  message: string | null;
}

const ModalMemory: React.FC<ModalMemoryProps> = (props: ModalMemoryProps) => {
  return (
    <div className={style.modal__container}>
      <div className={style.modal}>
        <button
          className={style.close}
          onClick={() => {

            props.closeModal();
          }}
        >
          <Image className={style.cross} src={imgCross} alt="Close" />
        </button>
        <Image src={props.img} alt="Объект" className={style.img} />
        <div className={style.content_text__container}>
          <div className={style.content_first}>
            <div className={style.name}>{props.nameLocation}</div>
            <div className={style.year}>{props.year}</div>
          </div>
          {props.previously ? (
            <div className={style.previously}>{props.previously}</div>
          ) : null}
          <div className={style.main__container}>
            <div className={style.main}>{props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMemory;
