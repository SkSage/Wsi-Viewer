import React from "react";

const TopRightPanel = () => {
  return (
    <div className="top-right-panel">
      <h3>Whole Slide View</h3>
      <img
        src="/src/assets/wsi.png"
        alt="Whole Slide View"
        className="whole-slide"
      />
      {/* You can add an overlay or pointer indicating the view area */}
    </div>
  );
};

export default TopRightPanel;
