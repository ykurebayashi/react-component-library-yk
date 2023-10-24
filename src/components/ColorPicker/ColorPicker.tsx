import React, { useState } from "react";
import "./ColorPicker.css";

interface ButtonProps {
  customColorSet: string[];
  useDebounce: boolean;
  useThrottle: boolean;
  selectedColor: string;
  setSelectedColor: (newValue: string) => void;
  throttleTime: number;
  debounceTime: number;
}

const ColorPicker = (props: ButtonProps) => {
  const standardColors = [
    "#ffffcc",
    "#ffcc99",
    "#ffcccc",
    "#ff99cc",
    "#ffccff",
    "#cc99ff",
    "#ccccff",
    "#99ccff",
    "#ccffff",
  ];

  const [customColor, setCustomColor] = useState("black");

  const colorSet = props.customColorSet || standardColors;
  let debounceTimeout: number;
  let throttled = false;

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.useDebounce) {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(() => {
        props.setSelectedColor(e.target.value);
        setCustomColor(e.target.value);
      }, props.debounceTime ?? 300);
      return;
    }

    if (props.useThrottle) {
      if (throttled) return;
      throttled = true;
      setTimeout(() => {
        props.setSelectedColor(e.target.value);
        setCustomColor(e.target.value);
        throttled = false;
      }, props.throttleTime ?? 100);
      return;
    }

    props.setSelectedColor(e.target.value);
    setCustomColor(e.target.value);
  };

  return (
    <div className={`yk_colorpicker_class`}>
      {colorSet.map((element) => {
        return (
          <button
            onClick={() => props.setSelectedColor(element)}
            key={element}
            className={`yk_colorpicker_option`}
            style={{
              backgroundColor: element,
              border:
                element === props.selectedColor ? "2px solid #eeeeea" : "none",
            }}
          />
        );
      })}
      <input
        className={`yk_colorpicker_option_picker`}
        style={{
          border:
            customColor === props.selectedColor ? "2px solid #eeeeea" : "none",
        }}
        type="color"
        onChange={(e) => handleColorChange(e)}
      />
    </div>
  );
};

export default ColorPicker;
