import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HomeCarousel.scss";
import { useSelector } from "react-redux";
import { instance } from "./../../api/api";
function HomeCarousel() {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("carousel/").then((response) => setImage(response.data));
  }, []);
  // const map = [
  //   {
  //     id: 1,
  //     clas1: "for_backline1",
  //     class2: "slider1",
  //     title: t("homeCarousel.title1"),
  //     title2: t("homeCarousel.subTitle1"),
  //   },
  //   {
  //     id: 2,
  //     clas1: "for_backline2",
  //     class2: "slider2",
  //     title: t("homeCarousel.title2"),
  //     title2: t("homeCarousel.subTitle2"),
  //   },
  //   {
  //     id: 3,
  //     clas1: "for_backline3",
  //     class2: "slider3",
  //     title: t("homeCarousel.title3"),
  //     title2: t("homeCarousel.subTitle3"),
  //   },
  // ];
  const map2 = image.map((a) => (
    <Carousel.Item key={a.id}>
      <div
        className="for_backline1"
        style={{
          backgroundImage: `url(${
            "https://javagenius.herokuapp.com" + a.attachment.url
          })`,
        }}
      >
        <div className="slider1">
          <div className="sometext">
            <h1>
              {" "}
              {language === "uz" ? (
                <>{a.name}</>
              ) : language === "ru" ? (
                <> {a.nameRu}</>
              ) : (
                <>..</>
              )}
            </h1>
            <h4>
              {" "}
              {language === "uz" ? (
                <>{a.description}</>
              ) : language === "ru" ? (
                <> {a.descriptionRu}</>
              ) : (
                <>..</>
              )}
            </h4>
            <Link className="to_other_page" to="/project">
              {t("seeMore")}
            </Link>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ));
  return (
    <div className="HomeCarousel">
      <Carousel fade>{map2}</Carousel>
    </div>
  );
}

export default HomeCarousel;
