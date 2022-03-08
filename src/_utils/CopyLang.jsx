import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { instance } from './../api/api';
function CopiedLanguages(props) {
  const { language } = useSelector((state) => state.langReducer);
  const [image, setTitle_uz] = useState([]);
  useEffect(() => {
    instance.get(props.url).then((res) => {
      setTitle_uz(res.data);
    });
    //eslint-disable-next-line
  }, []);
  let imagmap = [];
  switch (language) {
    case "uz":
      imagmap = image.map((a, index) => <span key={index}> {a.name} </span>);
      break;
    case "ru":
      imagmap = image.map((a, index) => <span key={index}> {a.nameRu} </span>);
      break;
    default:
      imagmap = image.map((a, index) => <span key={index}>{a.name} </span>);
  }
  return imagmap;
}
export function CopiedLanguages2(props) {
  const { language } = useSelector((state) => state.langReducer);
  const [image, setTitle_uz] = useState([]);
  useEffect(() => {
    instance.get(props.url).then((res) => {
      setTitle_uz(res.data);
    });
    //eslint-disable-next-line
  }, []);
  let imagmap = [];
  switch (language) {
    case "uz":
      imagmap = image.map((a, index) => (
        <span key={index}> {a.description} </span>
      ));
      break;
    case "ru":
      imagmap = image.map((a, index) => (
        <span key={index}> {a.descriptionRu} </span>
      ));
      break;
    default:
      imagmap = image.map((a, index) => (
        <span key={index}>{a.description} </span>
      ));
  }
  return imagmap;
}
export default CopiedLanguages;
