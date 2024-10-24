import React, { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CenterPanel";
import TopRightPanel from "./components/TopRightPanel";
import RightPanel from "./components/RightPanel";
import "./components/Wsi.css";

function App() {
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (cellId) => {
    setSelectedCell(cellId);
  };

  return (
    <div className="app">
      <LeftPanel />
      <CenterPanel onCellClick={handleCellClick} />
      <TopRightPanel />
      <RightPanel selectedCell={selectedCell} />
    </div>
  );
}

export default App;
