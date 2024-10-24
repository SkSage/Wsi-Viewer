import React from "react";

const CenterPanel = ({ onCellClick }) => {
  const cellImages = Array.from(
    { length: 20 },
    (_, index) => `cell-${index + 1}.jpg`
  );

  return (
    <div className="center-panel">
      <h3>Segmented Neutrophil</h3>
      <div className="grid">
        {cellImages.map((img, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => onCellClick(index + 1)}
          >
            <img src={`/src/assets/wsi.png`} alt={`Cell ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterPanel;
