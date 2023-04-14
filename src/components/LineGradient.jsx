import React from "react";

const LineGradient = ({ width = "w-full", margin }) => {
    return <div className={`h-0.5 ${width} bg-gradient-dw ${margin}`} />;
};

export default LineGradient;
