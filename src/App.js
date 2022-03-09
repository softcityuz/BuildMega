import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import ScrollToTop from './components/ScrollToTop'
import { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Footer from "./components/Footer/Footer";
import { BackToTop } from "./BackToTop.js";
import CircularProgress from "@material-ui/core/CircularProgress";
const MainProject = React.lazy(() => import("./pages/Project/MainProject"));
const SingleNews1 = React.lazy(() => import("./pages/news/SingleNews1"));
const SingleNews2 = React.lazy(() => import("./pages/news/SingleNews2"));
const SingleNews3 = React.lazy(() => import("./pages/news/SingleNews3"));
const SingleProject1 = React.lazy(() => import("./pages/Project/SingleProject1"));
const SingleProject2 = React.lazy(() => import("./pages/Project/SingleProject2"));
const SingleProject3 = React.lazy(() => import("./pages/Project/SingleProject3"));
const SingleProject4 = React.lazy(() => import("./pages/Project/SingleProject4"));
const News = React.lazy(() => import("./pages/news/News"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  const map = [
    { id: 1, url: "news", kompannent: <News /> },
    { id: 2, url: "news/singular1", kompannent: <SingleNews1 /> },
    { id: 9, url: "news/singular2", kompannent: <SingleNews2 /> },
    { id: 10, url: "news/singular3", kompannent: <SingleNews3 /> },
    { id: 3, url: "contact", kompannent: <Contact /> },
    { id: 4, url: "project", kompannent: <MainProject /> },
    { id: 5, url: "project/singularproject1", kompannent: <SingleProject1 /> },
    { id: 6, url: "project/singularproject2", kompannent: <SingleProject2 /> },
    { id: 7, url: "project/singularproject3", kompannent: <SingleProject3 /> },
    { id: 8, url: "project/singularproject4", kompannent: <SingleProject4 /> },
  ];
  const mapRoute = map.map((a) => (
    <Route
      key={a.id}
      path={a.url}
      element={
        <Suspense
          fallback={
            <>
              <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
              </Backdrop>{" "}
            </>
          }
        >
          {" "}
          {a.kompannent}
        </Suspense>
      }
    />
  ));
  return (
    <div className="App">
      
      {isLoading ? (
        <>
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>{" "}
        </>
      ) : (
        <>
          <ScrollToTop />
          <BackToTop />
          <TopHeader />
          <BurgerMenu />
          <Header />
          <Routes>
            {mapRoute}
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
