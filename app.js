import Range from "./components/Range/index.js";

if (!customElements.get("phantom-range")) {
    customElements.define("phantom-range", Range);
}
