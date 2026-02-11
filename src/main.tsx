import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
);
