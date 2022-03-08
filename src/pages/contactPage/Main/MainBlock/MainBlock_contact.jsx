import React from "react";
import { Field, reduxForm } from "redux-form";
import { useTranslation } from "react-i18next";
import {
  maxLengthCreator,
  required,
} from "../../../../_utils/validators/validators";
import { Input, Textarea } from "../../../../formControl/Text";
import moduleName from "./MainBlock_contact.module.css";
let maxLength10 = maxLengthCreator(10);
let maxLength100 = maxLengthCreator(40);
function ContactForm({ handleSubmit }) {
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div className={moduleName.inp_body}>
        <div className={moduleName.inp_with_label}>
          <label key={"name"} htmlFor="">
            {t("menu2Contact1")}
          </label>
          <Field
            value={"sd"}
            name="name"
            component={Input}
            validate={[required, maxLength10]}
            className={moduleName.name}
            type="text"
          />
        </div>
        <div className={moduleName.inp_with_label}>
          <label key={"name"} htmlFor="">
            {t("menu2Contact2")}
          </label>
          <Field
            name="email"
            component={Input}
            validate={[required, maxLength100]}
            className={moduleName.email}
            type="email"
          />
        </div>
      </div>
      <div id="comment" className={moduleName.inp_with_labelComment}>
        <label htmlFor="comment">{t("menu2Contact3")}</label>
        <Field
          name="comment"
          component={Textarea}
          validate={[required, maxLength100]}
          minLength={1}
          maxLength={300}
          className={moduleName.comment}
          type="text"
        />
      </div>
      <button>{t("menu2ContactButton")}</button>
    </form>
  );
}

const ContactReduxForm = reduxForm({ form: " contact " })(ContactForm);
export const MainBlock = () => {
    const { t } = useTranslation();
  const onClick = (formData) => {
    let email = formData.email;
    let comment = formData.comment;
    let name = formData.name;
    fetch(`${process.env.REACT_APP_API_URL}userComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        comment: comment,
      }),
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
    formData.name = "";
    formData.email = "";
    formData.comment = "";
    alert("Xabaringiz yuborildi!");
  };
  return (
    <div className={moduleName.body}>
      <h1 className={moduleName.title}>{t("menuContact")}</h1>
      <ContactReduxForm onSubmit={onClick} />
    </div>
  );
};
