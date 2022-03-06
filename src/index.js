import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import store from './redux/Redux-store';
import { Provider } from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <SimpleReactLightbox>
  <BrowserRouter>
      <App />
    </BrowserRouter>
        </SimpleReactLightbox>
      
      </Provider>,
  document.getElementById("root")
);
reportWebVitals();