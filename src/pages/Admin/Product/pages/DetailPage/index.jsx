import React from "react";
import { useParams } from "react-router-dom";
import AddProductForm from "./AddProductForm";

const DetailProductPage = () => {
  const { id } = useParams();

  return (
    <>
      {id === "new" ? (
        <AddProductForm initData={{}} id={id} />
      ) : (
        <>
          <AddProductForm initData={{ /* Dữ liệu từ API hoặc nơi khác */ }} id={id} />
          <p>DetailProductPage</p>
        </>
      )}
    </>
  );
};

export default DetailProductPage;
