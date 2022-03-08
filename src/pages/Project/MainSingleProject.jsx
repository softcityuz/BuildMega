import React from "react";
import style from "./ProjectSingle.module.css";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import img from "../../assets/architecture3.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const MainSingleProject = (props) => {
  const classes = useStyles();
  const { language } = useSelector((state) => state.langReducer);
  if (!props.news) {
    return (
      <>
        {" "}
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>{" "}
      </>
    );
  }
  return (
    <div className={style.WrappererNews}>
      <div
        className={style.HeaderNews2}
        style={{ backgroundImage: `url(${img})` }}
      >
        {language === "uz" ? (
          <h1>{props.news.name}</h1>
        ) : language === "ru" ? (
          <h1>{props.news.name}</h1>
        ) : (
          <>..</>
        )}
      </div>
      <div className={style.SingleKatalog}>
        <div className={style.discription} style={{ width: "100%" }}>
          {language === "uz" ? (
            <h1 className={style.TitleName}>{props.news.name}</h1>
          ) : language === "ru" ? (
            <h1 className={style.description}>{props.news.nameRu}</h1>
          ) : (
            <>..</>
          )}
          {language === "uz" ? (
            <h1 className={style.description4}>{props.news.description}</h1>
          ) : language === "ru" ? (
            <h1 className={style.description4}>{props.news.descriptionRu}</h1>
          ) : (
            <>..</>
          )}
        </div>
      </div>
    </div>
  );
};
export default MainSingleProject;
