import React from "react";
import { icons } from "../icons";

const WeatherIcon = ({ name, size, color }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      fill={color}
      style={{ fill: color }}
    />
  );
};

export default WeatherIcon;
