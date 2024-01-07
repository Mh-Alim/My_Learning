import "./App.css";

import { useState } from "react";
import FlushSync from "./React-Hitesh/03_UseState/FlushSync.js";
import UseState from "./React-Hitesh/03_UseState/UseState.js";
import UseState2 from "./React-Hitesh/03_UseState/UseState2.js";
import Class from "./Ts_Components/Class.tsx";
import Class_with_interface from "./Ts_Components/Class_with_interface.tsx";
import Generics from "./Ts_Components/Generics.tsx";
import TypePredicates from "./Ts_Components/TypePredicates.tsx";
import DoughnutChar from "./chart-js/DoughnutChar";
import Bind from "./components/Bind";
import Debouncing from "./components/Debouncing";
import Getter_Setter from "./components/Getter_Setter";
import Throttling from "./components/Throttling";
import Grid from "./css_components/grid/Grid.jsx";
import Parent from "./React-Hitesh/04_UseCallback/Parent.js";
import InputBox from "./React-Hitesh/customHooks/InputBox.jsx";
import UseState3 from "./React-Hitesh/03_UseState/UseState3.jsx";

function App() {
  return (
    <div className="App">
      {/* <Debouncing /> */}
      {/* <Throttling /> */}
      {/* <Bind /> */}
      {/* <Getter_Setter /> */}
      {/* <Class /> */}
      {/* <Class_with_interface /> */}
      {/* <Generics /> */}
      {/* <TypePredicates /> */}
      {/* <Grid /> */}

      {/* <FlushSync /> */}
      {/* <UseState /> */}
      {/* <UseState2 /> */}
      {/* <UseState3 /> */}
      {/* <DoughnutChar /> */}
      {/* <Parent /> */}
      <InputBox />
    </div>
  );
}

export default App;
