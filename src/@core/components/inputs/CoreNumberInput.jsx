import React, { useEffect, useState } from 'react';
import { useCart } from '../../provider/CartProvider';
 
function CoreNumberInput(props) {
  const {purchaseQuantity, setPurchaseQuantity } = props
  const [value, setValue] = useState(1);

  console.log(purchaseQuantity)
  const decrement = () => {
    setValue(prevValue => Math.max(prevValue - 1, 0));
  };

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

 
  useEffect(()=>{
      setPurchaseQuantity(value)
   
  }, [value])

  return (
    <div className="custom-number-input h-10 w-32">
      <style>
        {`
          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          .custom-number-input input:focus {
            outline: none !important;
          }

          .custom-number-input button:focus {
            outline: none !important;
          }
        `}
      </style>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button onClick={decrement} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value={value}
          defaultValue={1} 
        />
        <button onClick={increment} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default CoreNumberInput;