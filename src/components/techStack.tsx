import React, { useState } from "react";
import '../App.css'

type Category = "Front-End" | "Back-End" | "Tools" | "All"; // Define valid categories

const techCategories: Record<Exclude<Category, "All">, { src: string; name: string }[]> = {
  "Front-End": [
    { src: "./html.png", name: "HTML" },
    { src: "./css.png", name: "CSS" },
    { src: "./js.png", name: "JavaScript" },
    { src: "./react.png", name: "React" },
    { src: "./vite.png", name: "Vite" },
    { src: "./redux.png", name: "Redux" },
    { src: "./typescript.png", name: "TypeScript" },
    { src: "./bootstrap.png", name: "Bootstrap" },
    { src: "./react-bootstrap.png", name: "React-Bootstrap" },
  ],
  "Back-End": [
    { src: "./firebase.png", name: "Firebase" },
    { src: "./python.png", name: "Python" },
    { src: "./mysql.png", name: "MySQL" },
    { src: "./flask.png", name: "Flask" },
  ],
  "Tools": [
    { src: "./github.png", name: "GitHub" },
    { src: "./vs-code.png", name: "VS Code" },
    { src: "./vercel.png", name: "Vercel" },
  ],
};

const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Front-End");

  // Get the tech stack items based on selection
  const displayedTech =
    selectedCategory === "All"
      ? Object.values(techCategories).flat() // Show all categories when "All" is selected
      : techCategories[selectedCategory as Exclude<Category, "All">];

  return (
    <div className="tech-stack-container">
      {/* Category Buttons */}
      <div className="category-buttons">
        {(["Front-End", "Back-End", "Tools", "All"] as Category[]).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tech Stack Grid */}
      <div className="tech-grid">
        {displayedTech.map((tech, index) => (
          <div key={index} className="tech-card" data-tooltip={tech.name}>
            <img src={tech.src} alt={tech.name} className="tech-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;