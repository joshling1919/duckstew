import { ChakraProvider } from "@chakra-ui/react";
import "@pages/popup/Popup.css";
import React from "react";
import App from "./App";

const Popup = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <div className="App">
          <App />
        </div>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default Popup;
