import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-iqhv2h8zqhxl4hur.us.auth0.com"
    clientId="WWbXXklRfOIO9CkS1q0aQ25TFGKe3uLC"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
