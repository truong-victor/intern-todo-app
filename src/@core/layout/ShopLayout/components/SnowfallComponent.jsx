import React from 'react';
import Snowfall from 'react-snowfall';
const snowflake1 = document.createElement('img')
snowflake1.src = '/public/images/hoamai.png'
const snowflake2 = document.createElement('img')
snowflake2.src = '/public/images/hoamaiir2.png'

const images = [snowflake1, snowflake2]
const SnowfallComponent = () => {
  return (
    <div>
      <Snowfall
      // Applied to the canvas element
      snowflakeCount={200}
      // Pass in the images to be used
      div
      images={images}
    />
    </div>
  );
};

export default SnowfallComponent;
