import React from "react";

const RightPanel = ({ selectedCell }) => {
  return (
    <div className="right-panel">
      <h3>Analysis Results</h3>
      {selectedCell ? (
        <div className="analysis">
          <img src={`/src/assets/wsi.png`} alt={`Cell ${selectedCell}`} />
          <p>Details about Cell {selectedCell}</p>
        </div>
      ) : (
        <p>Select a cell to see the analysis</p>
      )}
    </div>
  );
};

export default RightPanel;
