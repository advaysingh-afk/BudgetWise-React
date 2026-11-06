import React, { useEffect, useRef } from "react";
import legacyMarkup from "./legacy.html?raw";

/*
 * React owns the application mount point and lifecycle.
 * The original dashboard's feature-rich transaction, chart, budget, account,
 * recurring-payment and goal logic is initialized once inside this React app.
 */
export default function App() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const host = document.getElementById("budgetwise-legacy-root");
    const script = document.createElement("script");
    script.src = "/src/legacy.js";
    script.async = false;
    script.onload = () => {};
    document.body.appendChild(script);

    return () => {
      // Vite's full-page reload handles development teardown.
      script.remove();
    };
  }, []);

  return <div id="budgetwise-legacy-root" dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}
