import React from "react";
import "animate.css";
const CherryBlossomEffect = () => {
  const petals = Array.from({ length: 21 }, (_, index) => (
    <div
      key={index}
      className=""
      style={{
        animationDuration: `${Math.floor(Math.random() * 10) + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        left: `${Math.random() * 100}vw`,
        top: `-${Math.random() * 20}vh`,
        position: "absolute",
        width: 10,
        height: 11,
        backgroundColor: "red",
        borderRadius: "100px 0 100px 0",
        boxShadow: "0 0 5px red",
        animation: "fall10 14s linear infinite",
        animationDelay: "calc(1s * var(--delay))",
      }}
    ></div>
  ));
  console.log("============= petals", petals);
  return (
    <div className="boxPetal overflow-hidden w-screen h-screen fixed">
      {petals}
    </div>
  );
};

export default CherryBlossomEffect;
