import { createContext, useContext } from "react";

import { useLocalStorageState } from "ahooks";

const CartContextV2 = createContext();

export const useCartV2 = () => useContext(CartContextV2);

const CartProdiverV2 = (props) => {
  const [items, setItems] = useLocalStorageState("cartItems", {
    defaultValue: [],
  });
  console.log(
    "🚀 ~ file: CartProdiverV2.jsx:13 ~ CartProdiverV2 ~ items:",
    items
  );

  const context = {
    items,
    ...props,
  };

  return (
    <CartContextV2.Provider value={{ ...context }}>
      {props.children}
    </CartContextV2.Provider>
  );
};

export default CartProdiverV2;
