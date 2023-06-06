import { MantineProvider } from "@mantine/core";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";
import { isHTMLElement } from "./util/typeguards.ts";

const rootElm = document.getElementById("root");

if (isHTMLElement(rootElm)) {
  const root = ReactDOM.createRoot(rootElm);
  root.render(
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </React.StrictMode>
  );
}
