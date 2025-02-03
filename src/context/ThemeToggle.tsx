import "../ThemeToggle.css";
import { Classic } from "@theme-toggles/react";

interface ToggleProps {
    handleChange: (isChecked: boolean) => void;
    isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <Classic
                toggled={isChecked}
                toggle={handleChange}
                style={{ color: "white" }}
                duration={750}
            />
        </div>
    );
};
