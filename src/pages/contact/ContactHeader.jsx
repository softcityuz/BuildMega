import React from "react";
import { Breadcrumb } from "./HeaderImg/Breadcrumb.jsx";
import logo from "./HeaderImg/changed.jpg";
import moduleName from "./Header_contact.module.css";
import { useTranslation } from "react-i18next";

function ContactHeader() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div
        className={moduleName.body}
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <Breadcrumb
          pageName={t("contact_r")}
          pageNameForTitle={t("contact_r")}
        />
      </div>
    </>
  );
}
export default ContactHeader;
