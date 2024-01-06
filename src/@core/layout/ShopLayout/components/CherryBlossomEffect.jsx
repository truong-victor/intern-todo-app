import React from 'react';
import 'animate.css';
const CherryBlossomEffect = () => {
  const petals = Array.from({ length: 21 }, (_, index) => (
    <div
      key={index}
      className="petal animate-fall"
      style={{
        animationDuration: `${Math.floor(Math.random() * 10) + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        left: `${Math.random() * 100}vw`,
        top: `-${Math.random() * 20}vh`,
      }}
    ></div>
  ));
console.log('============= petals',petals)
  return (
    <div className="boxPetal overflow-hidden w-screen h-screen fixed">
      {petals}
    </div>
  );
};

export default CherryBlossomEffect;