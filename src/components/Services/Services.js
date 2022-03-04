import React from "react";
import "./Services.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHive} from '@fortawesome/free-brands-svg-icons'
import { faUserGroup,faRulerCombined, faCity, faHouseChimneyWindow, faPencil } from "@fortawesome/free-solid-svg-icons";
// import {
//   SqueareFootIcon,
//   PeopleOutlineIcon,
//   ViewQuiltIcon,
//   ApartmentIcon,
//   HouseIcon,
//   EditTwoToneIcon,
// } from "@material-ui/icons";


function Services() {
  return (
    <div className="Services">
      <div className="container">
        <div className="intro">
            <h2>Bizning ximatlar</h2>
          </div>
        <div className="row">
          <div className="col-md-4">
            <div className="icon">
            <FontAwesomeIcon icon={faRulerCombined}/>
              </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
                  <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
              </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
                <FontAwesomeIcon icon={faHive}></FontAwesomeIcon>
              </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            </div>
          </div>
        </div>
        <div className="row the_second">
          <div className="col-md-4">
            <div className="icon">
            <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
              </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
                  <FontAwesomeIcon icon={faHouseChimneyWindow}></FontAwesomeIcon>
              </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
              </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
