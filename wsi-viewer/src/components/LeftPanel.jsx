import React from "react";

const LeftPanel = () => {
  const data = [
    { name: "Segmented Neutrophil", count: 83, percentage: "41.7%" },
    { name: "Band Neutrophil", count: 3, percentage: "1.5%" },
    { name: "Lymphocyte", count: 53, percentage: "26.6%" },
    // Add more items based on your data
  ];

  return (
    <div className="left-panel">
      <h3>WBC - Differential</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.count} ({item.percentage})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;
