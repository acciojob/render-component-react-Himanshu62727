import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <p>I am learning React. My life is getting better.</p>;
}

const root = document.getElementById("root");
createRoot(root).render(<App />);
