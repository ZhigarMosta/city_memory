"use client";
import React, { useState, useEffect } from "react";
import style from "./map.module.scss";
import Image from "next/image";
import imgCross from "./../../img/cross.svg";

import Img1 from "./../../img/soon1.png";
import Img2 from "./../../img/soon2.png";

const Map: React.FC = () => {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalImg, setModalImg] = useState<any | null>(null);
  const [modalName, setModalName] = useState<string | null>(null);
  const [modalYear, setModalYear] = useState<string | null>(null);
  const [modalPreviously, setModalPreviously] = useState<string | null>(null);

  useEffect(() => {
    const loadYandexMap = () => {
      if (document.getElementById("yandex-map-script")) {
        if (window.ymaps) {
          window.ymaps.ready(initMap);
        }
        return;
      }

      const ymapsScript = document.createElement("script");
      ymapsScript.id = "yandex-map-script";
      ymapsScript.src =
        "https://api-maps.yandex.ru/2.1/?apikey=366d686a-750d-484d-9486-ddc7ca0d0256&lang=ru_RU";
      ymapsScript.onload = () => {
        window.ymaps.ready(initMap);
      };
      document.body.appendChild(ymapsScript);
    };

    const initMap = () => {
      const mapContainer: any = document.getElementById("map");
      if (mapContainer) {
        mapContainer.innerHTML = "";
      }

      const myMap = new window.ymaps.Map("map", {
        center: [55.15, 61.35],
        zoom: 10,
        controls: [
          "zoomControl", // Контрол масштабирования
          "fullscreenControl", // Кнопка полноэкранного режима
          "searchControl", // Поисковая строка
          "typeSelector", // Переключатель типов карты
        ],
      });

      const kirov = new window.ymaps.Polygon(
        [
          [
            [55.184459, 61.399186],
            [55.157633, 61.401345],
            [55.157623, 61.401161],
            [55.18444, 61.398795],
            [55.184459, 61.399186],
          ],
        ],
        {
          hintContent: "Улица Кирова",
        },
        {
          strokeColor: "#B1D8EC",
          strokeWidth: 2,
          fillColor: "rgba(34, 150, 209, 0.6)", // Цвет заливки
        }
      );

      myMap.geoObjects.add(kirov);

      kirov.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalMessage(
          "Названа в честь Кирова Сергея Мироновича (1886-1934) – русского революционера времён Гражданской войны. Изначально поддерживал Временное правительство, и отдавал предпочтение белому движению. Но после Октябрьской революции перешёл на сторону большевиков. Занимал должность первого секретаря Ленинградского губернского комитета партии ЦК ВКП(б). Киров участвовал в борьбе со сторонниками Зиновьева и Каменева – оппозиционерами Сталина. Однако, 1 декабря 1934 года Кирова застрелили в Смольном институте. Стрелявшим являлся Леонид Николаев. Леонид Николаев являлся одним из малозначительных членов партии. Есть несколько версий мотива преступления – убийство по личным мотивам (были слухи, что жена Николаева имела близкую связь с Кировым), убийство организовала группа Зиновьева-Каменева, убийство организовал сам Сталин для повода проведения репрессий. В любом случае, Сталин воспользовался убийством и возвёл Кирова в жертву заговора, организованного оппозиционерами."
        );
        setModalImg(Img1);
        setModalName("Улица Кирова");
        setModalYear("Названа в 1929 г.");
        setModalPreviously(
          "(Ранее Рабоче-крестьянская, Екатеринбургская, Уфимская)"
        );
        // setModalPreviously(null); убрать маленький текс
        // Изменение цвета полигона на секунду
        kirov.options.set("fillColor", "rgba(101, 189, 235, 0.8)"); // Новый цвет заливки
        setTimeout(() => {
          kirov.options.set("fillColor", "rgba(34, 150, 209, 0.6)"); // Возврат к оригинальному цвету
        }, 500);
      });

      const zviling = new window.ymaps.Polygon(
        [
          [
            [55.168022, 61.403377],
            [55.168038, 61.403672],
            [55.168038, 61.403672],
            [55.160413, 61.404343],
            [55.160296, 61.404435],
            [55.159002, 61.406562],
            [55.15893, 61.406657],
            [55.158807, 61.406722],
            [55.158244, 61.406814],
            [55.155136, 61.407117],
            [55.154961, 61.407185],
            [55.150385, 61.41157],
            [55.150052, 61.411769],
            [55.1435, 61.41405],
            [55.143047, 61.413295],
            [55.143685, 61.413478],
            [55.143976, 61.413482],
            [55.144479, 61.413364],
            [55.150096, 61.411432],
            [55.150514, 61.411159],
            [55.154989, 61.406861],
            [55.155133, 61.406765],
            [55.155225, 61.40674],
            [55.155225, 61.40674],
            [55.158873, 61.406335],
            [55.159041, 61.406087],
            [55.160132, 61.404155],
            [55.160267, 61.404001],
            [55.160491, 61.403946],
          ],
        ],
        {
          hintContent: "Улица Цвиллинга",
        },
        {
          strokeColor: "#B1D8EC",
          strokeWidth: 2,
          fillColor: "rgba(34, 150, 209, 0.6)", // Цвет заливки
        }
      );

      myMap.geoObjects.add(zviling);

      zviling.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalMessage(
          "Названа в честь Самуила Яковлевича Цвиллинга (1891-1918) – уральского революционера, главы Исполкома Уральской области. Самуил Цвиллинг с юношества являлся народником. В 14 лет участвовал в революционных движениях в Тобольске. В 1905 году в разгар первой русской революции вступил в РСДРП. За участие в митингах отбывал 5 лет в заключении. В 1912 году, освободившись, вёл революционную деятельность в ряде городов Урала. Был призван на Первую Мировую войну. Служил в запасе в Челябинске, имея подпольные связи с “соц-демами”. Вёл агитацию среди солдат. С 1917 года был председателем Исполкома Совета. Участвовал в создании Партийной организации. Стал пропагандистом идей Ульянова. Стал руководителем Исполкома Уральской области. В декабре 17 года арестован был белыми, но сбежал. Организовал боевой отряд и погиб в бою с казацким атаманом Карнауховым."
        );
        setModalImg(Img2);
        setModalName("Улица Цвиллинга");
        setModalYear("Названа в ???? г.");
        setModalPreviously(
          "(Ранее Большая, до революции – Оренбургская и Христорождественская)"
        );
        // setModalPreviously(null); убрать маленький текс
        // Изменение цвета полигона на секунду
        zviling.options.set("fillColor", "rgba(101, 189, 235, 0.8)"); // Новый цвет заливки
        setTimeout(() => {
          zviling.options.set("fillColor", "rgba(34, 150, 209, 0.6)"); // Возврат к оригинальному цвету
        }, 500);
      });
    };
    loadYandexMap();
  }, []);

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <div>
      <div id="map" className={style.map}></div>
      {modalMessage && (
        <div className={style.modal__container}>
          <div className={style.modal}>
            <button
              className={style.close}
              onClick={() => {
                document.body.classList.remove(style.modal__open);
                closeModal();
              }}
            >
              <Image className={style.cross} src={imgCross} alt="Close" />
            </button>
            <Image src={modalImg} alt="Объект" className={style.img} />
            <div className={style.content_text__container}>
              <div className={style.content_first}>
                <div className={style.name}>{modalName}</div>
                <div className={style.year}>{modalYear}</div>
              </div>
              {modalPreviously ? (
                <div className={style.previously}>{modalPreviously}</div>
              ) : null}
              <div className={style.main__container}>
                <div className={style.main}>{modalMessage}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
