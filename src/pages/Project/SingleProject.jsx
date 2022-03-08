import React from "react";
// import { SingleHeader } from "./SingleHeader";
import  MainSingleProject  from "./MainSingleProject";
// import MobileNav1 from "./../mobilnav/MobileNav1";
const SingleProject = (props) => {
  return (
    <>
      {/* <SingleHeader news={props.news} /> */}
      <MainSingleProject news={props.news} />
    </>
  );
};
export default SingleProject;
