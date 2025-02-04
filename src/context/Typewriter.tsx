// import React, { useEffect, useState } from "react";
// import "../App.css"; // Import your CSS

// export const StartAnimation: React.FC = () => {
//   const [animationClass, setAnimationClass] = useState("typing");

//   useEffect(() => {
//     const typeDuration = 3000;  // Typing animation duration
//     const pauseDuration = 1000; // Pause before erasing
//     const eraseDuration = 2000;  // Erasing animation duration
//     const resetDelay = 1000;    // Pause before restarting
  
//     const cycleAnimation = () => {
//       setAnimationClass("typing");
  
//       setTimeout(() => {
//         setAnimationClass("erasing");
//       }, typeDuration + pauseDuration); // After typing + pause, start erasing
  
//       setTimeout(() => {
//         setAnimationClass(""); // Reset state (hidden) after erase
//       }, typeDuration + pauseDuration + eraseDuration + resetDelay);
//     };
  
//     cycleAnimation();
  
//     // Repeat animation every full cycle
//     const interval = setInterval(cycleAnimation, typeDuration + pauseDuration + eraseDuration + resetDelay + 500);
  
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);
  

//   return (
//     <div id="typewriterContainer">
//       <p id="typewriterText" className={animationClass}>
//         Hello, I'm Alex!
//       </p>
//     </div>
//   );
// };

// export default StartAnimation;
