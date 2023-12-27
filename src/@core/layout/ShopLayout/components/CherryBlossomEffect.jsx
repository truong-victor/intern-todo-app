import React, { useEffect } from 'react';

const CherryBlossomEffect = () => {
  useEffect(() => {
    const pictureSrc ='/images/hoamai.png';
    const pictureWidth = 20;
    const pictureHeight = 20;
    const numFlakes = 20;
    const downSpeed = 0.009;
    const lrFlakes = 15;

    let xcoords = [];
    let ycoords = [];

    for (let x = 0; x < numFlakes; x++) {
      xcoords[x] = (x + 1) / (numFlakes + 1);
      do {
        let snFlkTemp = Math.round((numFlakes - 1) * Math.random());
        if (typeof ycoords[snFlkTemp] !== 'number') {
          ycoords[snFlkTemp] = x / numFlakes;
          break;
        }
      } while (true);
    }

    function flakeFall() {
      let scrWidth = window.innerWidth;
      let scrHeight = window.innerHeight;
      let scrollHeight = window.pageYOffset;
      let scrollWidth = window.pageXOffset;

      for (let x = 0; x < numFlakes; x++) {
        if (ycoords[x] * scrHeight > scrHeight - pictureHeight) {
          ycoords[x] = 0;
        }
        let divRef = document.getElementById(`snFlkDiv${x}`);
        if (divRef) {
          divRef.style.top = Math.round(ycoords[x] * scrHeight) + scrollHeight + 'px';
          divRef.style.left =
            Math.round(
              (xcoords[x] * scrWidth - pictureWidth / 2) +
                (scrWidth / ((numFlakes + 1) * 4)) *
                  (Math.sin(lrFlakes * ycoords[x]) - Math.sin(3 * lrFlakes * ycoords[x]))
            ) + scrollWidth + 'px';
          ycoords[x] += downSpeed;
        }
      }
    }

    const createFlakes = () => {
      for (let x = 0; x < numFlakes; x++) {
        let snowflake = document.createElement('div');
        snowflake.id = `snFlkDiv${x}`;
        snowflake.style.position = 'absolute';
        snowflake.style.zIndex = '9999';
        snowflake.innerHTML = `<img src="${pictureSrc}" width="${pictureWidth}" height="${pictureHeight}" alt="*" border="0" />`;
        document.body.appendChild(snowflake);
      }
    };

    createFlakes();
    const interval = setInterval(flakeFall, 100);

    return () => {
      clearInterval(interval);
      for (let x = 0; x < numFlakes; x++) {
        let divRef = document.getElementById(`snFlkDiv${x}`);
        if (divRef) {
          divRef.parentNode.removeChild(divRef);
        }
      }
    };
  }, []);

  return null;
};

export default CherryBlossomEffect;
