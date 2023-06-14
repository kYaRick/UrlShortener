import { render } from "preact";
import { registerSW } from "virtual:pwa-register";
import './i18n';

import App from "./App";

registerSW({
  onRegistered() {
    console.info("[kYaDebug]:", "Registered!");
  },
});

render(<App/>, document.getElementById("app")!);
