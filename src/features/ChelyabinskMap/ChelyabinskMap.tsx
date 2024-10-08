"use client";
import React, { useState, useEffect } from "react";
import style from "./ChelyabinskMap.module.scss";

import ImgKirova from "./../../img/street/Kirov.jpg";
import ImgZviling from "./../../img/street/Zviling.jpg";
import ImgPRLenina from "./../../img/street/PRLenina.jpg";
import ImgKarlMarcsa from "./../../img/street/KarlMarcsa.jpg";
import ImgVorovscogo from "./../../img/street/Vorovscogo.jpg";
import ModalMemory from "@/shared/modalMemory/modalMemory";

const ChelyabinskMap: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalImg, setModalImg] = useState<any | null>(null);
  const [modalName, setModalName] = useState<string | null>(null);
  const [modalYear, setModalYear] = useState<string | null>(null);
  const [modalPreviously, setModalPreviously] = useState<string | null>(null);

  const strokeColor = "rgba(82, 164, 164, 0.9)";
  const fillColor = "rgba(82, 164, 164, 0.9)";

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
        center: [55.160346, 61.402786],
        zoom: 14,
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
          strokeColor: strokeColor,
          strokeWidth: 2,
          fillColor: fillColor,
        }
      );

      myMap.geoObjects.add(kirov);

      kirov.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalIsOpen(true);
        setModalMessage(
          "Названа в честь Кирова Сергея Мироновича (1886-1934) – русского революционера времён Гражданской войны. Изначально поддерживал Временное правительство, и отдавал предпочтение белому движению. Но после Октябрьской революции перешёл на сторону большевиков. Занимал должность первого секретаря Ленинградского губернского комитета партии ЦК ВКП(б). Киров участвовал в борьбе со сторонниками Зиновьева и Каменева – оппозиционерами Сталина. Однако, 1 декабря 1934 года Кирова застрелили в Смольном институте. Стрелявшим являлся Леонид Николаев. Леонид Николаев являлся одним из малозначительных членов партии. Есть несколько версий мотива преступления – убийство по личным мотивам (были слухи, что жена Николаева имела близкую связь с Кировым), убийство организовала группа Зиновьева-Каменева, убийство организовал сам Сталин для повода проведения репрессий. В любом случае, Сталин воспользовался убийством и возвёл Кирова в жертву заговора, организованного оппозиционерами."
        );
        setModalImg(ImgKirova);
        setModalName("Улица Кирова");
        setModalYear("в 1929 г.");
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
          strokeColor: strokeColor,
          strokeWidth: 2,
          fillColor: fillColor,
        }
      );

      myMap.geoObjects.add(zviling);

      zviling.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalIsOpen(true);
        setModalMessage(
          "Названа в честь Самуила Яковлевича Цвиллинга (1891-1918) – уральского революционера, главы Исполкома Уральской области. Самуил Цвиллинг с юношества являлся народником. В 14 лет участвовал в революционных движениях в Тобольске. В 1905 году в разгар первой русской революции вступил в РСДРП. За участие в митингах отбывал 5 лет в заключении. В 1912 году, освободившись, вёл революционную деятельность в ряде городов Урала. Был призван на Первую Мировую войну. Служил в запасе в Челябинске, имея подпольные связи с “соц-демами”. Вёл агитацию среди солдат. С 1917 года был председателем Исполкома Совета. Участвовал в создании Партийной организации. Стал пропагандистом идей Ульянова. Стал руководителем Исполкома Уральской области. В декабре 17 года арестован был белыми, но сбежал. Организовал боевой отряд и погиб в бою с казацким атаманом Карнауховым."
        );
        setModalImg(ImgZviling);
        setModalName("Улица Цвиллинга");
        setModalYear("Названа в 1920 году");
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

      const PRLenina = new window.ymaps.Polygon(
        [
          [
            [55.159387, 61.364453],
            [55.161288, 61.433803],
            [55.161281, 61.434093],
            [55.161272, 61.434313],
            [55.160258, 61.450692],
            [55.159887, 61.455824],
            [55.158167, 61.485432],
            [55.158105, 61.485423],
            [55.161137, 61.434231],
            [55.161157, 61.433412],
            [55.159204, 61.364488],
            [55.159387, 61.364453],
          ],
        ],
        {
          hintContent: "Проспект Ленина",
        },
        {
          strokeColor: strokeColor,
          strokeWidth: 2,
          fillColor: fillColor,
        }
      );

      myMap.geoObjects.add(PRLenina);

      PRLenina.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalIsOpen(true);
        setModalMessage(
          "Названа в честь Владимира Ильича Ленина (1870-1924) – российского и советского революционера, лидера большевистского движения времён Гражданской войны, публициста и идеолога, первого правителя и основателя СССР. Владимир Ленин является одной из знаковых фигур XX века, один из главных представителей марксистской идеологии. Был в эмиграции в разных странах Европы, именно там издал свои главные труды, возвращался в Россию, но в 1908 году снова эмигрировал. После Февральской революции вернулся в Россию и возглавил движение Большевиков, выдвинул апрельские тезисы. После конфликта с Временным правительством, скрывался в Финляндии. В событиях Октябрьской революции 1917 года Ленин сыграл главную роль в свержении Временного правительства, создании Совета народных комиссаров и начале Гражданской войны в России, в которой смогли удержать власть и победить белое движение. Умер в 1924 году, после длительной болезни. Тело Ленина помещено в мавзолей на Красной площади в Москве."
        );
        setModalImg(ImgPRLenina);
        setModalName("Проспект Ленина");
        setModalYear("Названа в 1929 году");
        setModalPreviously("(ранее Южный бульвар, Сербская и улица Спартака)");
        // setModalPreviously(null); убрать маленький текс
        // Изменение цвета полигона на секунду
        kirov.options.set("fillColor", "rgba(101, 189, 235, 0.8)"); // Новый цвет заливки
        setTimeout(() => {
          kirov.options.set("fillColor", "rgba(34, 150, 209, 0.6)"); // Возврат к оригинальному цвету
        }, 500);
      });

      const KarlMarcsa = new window.ymaps.Polygon(
        [
          [
            [55.165183, 61.393092],
            [55.165317, 61.399986],
            [55.165819, 61.416009],
            [55.165686, 61.416006],
            [55.165241, 61.399913],
            [55.165108, 61.393099],
            [55.165183, 61.393092],
          ],
        ],
        {
          hintContent: "Улица Карла Маркса",
        },
        {
          strokeColor: strokeColor,
          strokeWidth: 2,
          fillColor: fillColor,
        }
      );

      myMap.geoObjects.add(KarlMarcsa);

      KarlMarcsa.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalIsOpen(true);
        setModalMessage(
          "Названа в честь Карла Генриха Маркса (1818-1883) - немецкого философа, публициста, создателя Маркистской теории. Мировоззрение Маркса формировалось под влиянием идей Просвещения, Гегеля, Спинозы, французских социалистических учений. После женитьбы на баронессе, переехал в Париж, где издал ряд трудов. В 1842 году познакомился с Фридрихом Энгельсом. Вместе они публикуют труды, критикующие немецкий идеализм. В 1847 году вступил в Союз Справедливых, который позже с Энгельсом преобразует в Союз Коммунистов. После Французской революции 1848 года возвращается в Германию и активно начинает издавать труды. Но главный свой труд – Капитал. Критика политической экономики, он написал в 1867 году. Данный труд будет одним из основных, на которые опирался Владимир Ленин и другие идеологи большевизма в России во времена революции, и она станет одной из основных и наиболее почётных трудов в СССР. "
        );
        setModalImg(ImgKarlMarcsa);
        setModalName("Улица Карла Маркса");
        setModalYear("Названа в 1920 году.");
        setModalPreviously("(ранее Исетская и Михайловская)");
        // setModalPreviously(null); убрать маленький текс
        // Изменение цвета полигона на секунду
        kirov.options.set("fillColor", "rgba(101, 189, 235, 0.8)"); // Новый цвет заливки
        setTimeout(() => {
          kirov.options.set("fillColor", "rgba(34, 150, 209, 0.6)"); // Возврат к оригинальному цвету
        }, 500);
      });

      const Vorovscogo = new window.ymaps.Polygon(
        [
          [
            [55.160171, 61.400512],
            [55.141287, 61.375148],
            [55.140882, 61.374967],
            [55.14065, 61.374962],
            [55.137601, 61.375135],
            [55.136258, 61.374821],
            [55.136457, 61.375107],
            [55.137508, 61.375371],
            [55.140685, 61.375205],
            [55.141148, 61.375313],
            [55.141538, 61.37578],
            [55.160196, 61.40092],
          ],
        ],
        {
          hintContent: "Улица Воровского",
        },
        {
          strokeColor: strokeColor,
          strokeWidth: 2,
          fillColor: fillColor,
        }
      );

      myMap.geoObjects.add(Vorovscogo);

      Vorovscogo.events.add("click", () => {
        document.body.classList.add(style.modal__open);
        setModalIsOpen(true);
        setModalMessage(
          "Названа в честь Воровского Вацлава Вацлавовича (1871-1923) - русского революционера. Воровский с детства занимался провокационной деятельностью. Учился в Московском университете. Вёл революционную деятельность с 1894 года со вступление в РСДРП. Был в ссылке в Вологде и Вятке. Из ссылки Перебрался в Женеву и там стал участником большевиков. В 1903 году прибыл в Одессу для подпольной деятельности Воровский занимался публицистикой. Он перебрался в Петроград и работал обычным инженером, но был популярной персоной в газете. Имел дружеские отношения с некоторыми поэтами, но также и негативные. Воровский стал настоящим писателем, критиком и литератором. В 1921 году – полпред в Италии. Принимал участие в Генуэзской конференции. В мае 1923 года Воровский был убит в Швейцарии Морисом Конради – противником большевиков. Похоронен в братской могиле в Москве."
        );
        setModalImg(ImgVorovscogo);
        setModalName("Улица Воровского");
        setModalYear("Названа в 1923 году");
        setModalPreviously(null); //убрать маленький текс
        // Изменение цвета полигона на секунду
        kirov.options.set("fillColor", "rgba(101, 189, 235, 0.8)"); // Новый цвет заливки
        setTimeout(() => {
          kirov.options.set("fillColor", "rgba(34, 150, 209, 0.6)"); // Возврат к оригинальному цвету
        }, 500);
      });
    };
    loadYandexMap();
  }, []);

  const closeModal = () => {
    document.body.classList.remove(style.modal__open);
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className={style.map__container}>
        <div id="map" className={style.map}></div>
      </div>
      {modalIsOpen && (
        <ModalMemory
          closeModal={closeModal}
          img={modalImg}
          nameLocation={modalName}
          year={modalYear}
          previously={modalPreviously}
          message={modalMessage}
        />
      )}
    </div>
  );
};

export default ChelyabinskMap;
