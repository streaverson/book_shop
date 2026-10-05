import { useState } from "react";

function HeroBook({ heroBookTitle, isActive }) {
  // const [isBookActive, setIsBookActive] = useState(false);

  const darkColors = [
    "#1e3a8a",
    "#4a2d1d",
    "#1f2937",
    "#064e3b",
    "#312e81",
    "#3d4a2a",
    "#b8471f",
    "#7a1f2b",
    "#a4d063",
  ];

  const [bgColor] = useState(() => {
    return darkColors[Math.floor(Math.random() * darkColors.length)];
  });
  const [bookHeight] = useState(() => {
    const randomHeight = Math.floor(Math.random() * 150) + 150;
    return randomHeight;
  });

  return (
    <div
      // onMouseEnter={() => setIsHover((prev) => !prev)}
      // onMouseLeave={() => setIsHover((prev) => !prev)}
      className={`heroBook ${isActive ? "heroBookActive" : ""}`}
      style={{
        background: bgColor,
        height: bookHeight,
        transition: "all 0.5s ease-in-out",
        padding: "10px 10px",
      }}
    >
      {heroBookTitle}
    </div>
  );
}

export default HeroBook;

// function HeroBook({ heroBookTitle }) {
//   const [bgColor] = useState(() => {
//     const h = Math.floor(Math.random() * 360);
//     const s = 40;
//     const l = 80;
//     return `hsl(${h}, ${s}%, ${l}%)`;
//   });

//   return (
//     <div
//       className="heroBook"
//       style={{
//         backgroundColor: bgColor,
//         padding: "20px",
//         borderRadius: "8px",
//       }}
//     >
//       {heroBookTitle}
//     </div>
//   );
// }
