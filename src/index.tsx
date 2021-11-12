import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/theme";
import "@fontsource/m-plus-rounded-1c";
import "@fontsource/anonymous-pro";
import "@fontsource/raleway";
import "@fontsource/lexend-deca";
import "@fontsource/mononoki";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
