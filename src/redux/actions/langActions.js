import { LANG_CHANGED } from "./types";

export const changeLanguage = (lang) => (dispatch) => {
  console.log(lang);
  dispatch({
    type: LANG_CHANGED,
    payload: lang,
  });
};
