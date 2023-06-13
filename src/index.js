import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ChannelProvider } from "./context/ChannelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider value="Lily">
      <ChannelProvider value="Mobile Mechanics">
        <App />
      </ChannelProvider>
    </UserProvider>
  </React.StrictMode>
);
