import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let chartBarFill = '0%';
  if (props.maxValue > 0){
    chartBarFill = ((props.value / props.maxValue) * 100) + '%';
    debugger
  }
  return (
    <>
      <div className="chart-bar">
        <div className="chart-bar-inner">
          <div className="chart-bar-fill" style={{height: chartBarFill}}></div>
        </div>
        <div className="chart-bar-label"> {props.label} </div>
      </div>
    </>
  );
};

export default ChartBar;
