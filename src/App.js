import React, { useEffect } from "react";
import JSMindMM from "./components/JSMindMM";
import logo from "./logo.svg";
import "./App.css";

const mind = {
  version: 1,
  meta: {
    name: "demo",
    author: "hizzgdev@163.com",
    version: "0.2",
  },
  format: "node_array",
  data: [],
};
const options = {
  container: "jsmind_container",
  theme: "clouds",
  /** other available themes
   * primary
   * warning
   * danger
   * success
   * info
   * greensea
   * nephrite
   * belizehole
   * wisteria
   * asphalt
   * orange
   * pumpkin
   * pomegranate
   * clouds
   * asbestos
   */
  editable: true,
  support_html: true,
  view: {
    draggable: false /* это для того чтоб если увеличить мап то его можно было переместить целиком */,
    hide_scrollbars_when_draggable: true,
  },
};

function App() {
  // Just comment
  const handleContextMenu = (e, jmnode) => {};
  const handleMouseDown = (e, jmnode) => {};
  const handleMouseUp = (e, jmnode) => {};
  const handleClick = (e, jmnode) => {};

  return (
    <>
      <JSMindMM
        mind={mind}
        options={options}
        styles={{ width: "100%", height: "500px" }}
        // maybe this will help us in future when we decide to add our custom logic
        // onClick={handleClick}
        // onContextMenu={handleContextMenu}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
      />
    </>
  );
}

export default App;
