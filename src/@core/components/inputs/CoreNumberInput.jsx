

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useCartContext } from '../../provider/CartProvider';
import { toast } from 'react-toastify';
// import './CustomNumberInput.css'; // Import your styles (if using external styles)
 
function CoreNumberInput(props) {
  const inputRef = useRef()
  // console.log(inputRef.current.);
  const {purchaseQuantity, setPurchaseQuantity, max  } = props
  const [value, setValue] = useState(1);

  console.log(purchaseQuantity)
  // const decrement = () => {
  //   inputRef.current.value = Math.max(Number(inputRef.current.value) - 1, 1);
  //   setPurchaseQuantity(Number(inputRef.current.value));
  //   // setValue(Number(inputRef.current.value))

  // };

  // const increment = () => {
  //   inputRef.current.value = Number(inputRef.current.value) + 1;
  //   setPurchaseQuantity(Number(inputRef.current.value));
  //   // setValue(Number(inputRef.current.value))

  // };
  
 
  const handleChange = (type, e) => {
      const currentValue = Number(inputRef?.current?.value);

      if (type === "increment") {
        if (currentValue < max) {
          inputRef.current.value++;
          setPurchaseQuantity(Number(inputRef.current.value))
        } else {
          toast.info(`So luong toi da la: ${max}`);
        }
      }

      if (type === "decrement") {
        if (currentValue > 1) {
          inputRef.current.value--;
          setPurchaseQuantity(Number(inputRef.current.value))
        } else {
          
        }
      }

      if (type === "onChange") {
        const newValue = e.target.value;

        setValue(newValue);
      }
    };

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
        <button onClick={()=>handleChange('decrement')} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input

          onChange={(e) => handleChange('onChange', e)}
          ref={inputRef}
          type="number"
          className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          defaultValue={1} 
          min={1}
        />
        <button onClick={()=>handleChange('increment')} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default React.memo(CoreNumberInput);
