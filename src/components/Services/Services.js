import React from "react";
import "./Services.scss";
import {
  SqueareFootIcon,
  PeopleOutlineIcon,
  ViewQuiltIcon,
  ApartmentIcon,
  HouseIcon,
  EditTwoToneIcon,
} from "@mui/icons-material";
import Icon from "@mui/material/Icon";

function Services() {
  return (
    <div className="Services">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="icon"></div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
