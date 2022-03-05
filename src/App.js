import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Footer from "./components/Footer/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";
const SingleNews = React.lazy(() => import("./pages/news/SingleNews"));
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
          <TopHeader />
          <Header />
          <Routes>
            <Route
              path="news"
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
                  <News />
                </Suspense>
              }
            />
            <Route
              path="singilur"
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
                  <SingleNews />
                </Suspense>
              }
            />
            <Route
              path="contact"
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
                  <Contact />
                </Suspense>
              }
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer/>
        </>
      )}
    </div>
  );
};
export default App;
