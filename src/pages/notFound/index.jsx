import "./notFound.css";
import React, { useEffect, useRef } from 'react';

export const NotFound = () => {

  const boxRef = useRef(null);

  useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const changeColor = () => {
      const box = boxRef.current;
      if (box) {
        box.style.color = getRandomColor();
      }
    };

    const animationInterval = setInterval(() => {
      changeColor();
    }, 1000);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="container">
      <div className="not-found">
        <h2 className="not-found-title" ref={boxRef} style={{ transition: '1.5s' }}>404</h2>
        <p className="not-found-p">Bu sahifa bo'sh</p>
      </div>
    </div>
  );
};
