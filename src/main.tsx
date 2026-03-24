import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import { LanguageProvider } from "./LanguageContext"; 
import "./styles/index.css"; // 🌟 指向正确的 CSS 文件夹

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);