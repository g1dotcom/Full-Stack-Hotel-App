import React from "react";
import ReactDOM from "react-dom/client";

//PAGES
import App from "./App";
//CONTEXT
import { SearchContextProvider } from "./context/SearchContex";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
