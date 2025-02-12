import React from 'react';
import { Classic } from "@theme-toggles/react";

interface ToggleProps {
  handleChange: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <Classic
              toggled={isChecked} // The state of the toggle (true/false)
              toggle={handleChange} // The function to update the state directly
              style={{ color: isChecked ? "#e6e6e6" : "#333333" }} // The color based on the toggle state
              duration={750} // The animation duration
              key="theme-toggle" // Ensure a unique key is provided
              id="theme-toggle-id" // Assign an ID for the toggle
              name="theme-toggle" // Name for form submissions (optional)
              color="default" // Set a default color if needed
              translate="yes" // Optional translation behavior (if needed)
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      />
    </div>
  );
};
