import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";
// import { ThemeProvider, StyleReset } from "atomize";

// const debug =
//   process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// const engine = new Styletron();

// const theme = {
//   colors: {
//     primary: "#3A5F0B",
//     accent: "#D4AF37",
//     background: "#d7ccbc",
//   },
// };

/* green hue #3A5F0B 
gold hue #D4AF37 */

ReactDOM.render(
  <React.StrictMode>
    {/* <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset /> */}
    <App />
    {/* </ThemeProvider>
    </StyletronProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
