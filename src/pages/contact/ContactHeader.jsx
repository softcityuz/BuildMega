import React, { useEffect } from "react";
import { Breadcrumb } from "./HeaderImg/Breadcrumb.jsx";
import logo from "./HeaderImg/changed.jpg";
import moduleName from "./Header_contact.module.css";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
function ContactHeader() {
        const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
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