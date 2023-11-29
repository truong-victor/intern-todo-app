import React, { useEffect, useState } from "react";
import AddProductForm from "../DetailPage/AddProductForm";
import { adminProductService } from "../../../services/adminProductService";
import { useParams } from "react-router";
const EditProductPage = () => {
    const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => { 
    const fetchData = async () => {
      try {
        console.log(id);
        // Gọi hàm find từ adminProductService để lấy dữ liệu sản phẩm có id là id
        const result = await adminProductService.find(id);
        
        console.log(result);
        // Lưu trữ dữ liệu vào state
        setProductData(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Gọi hàm fetchData khi component được render hoặc khi id thay đổi
    fetchData();
  }, [id]); // Dependency array chứa biến id để gọi hàm khi id thay đổi

  // Nếu không có dữ liệu, có thể hiển thị một thông báo hoặc hiển thị "Loading"
  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Truyền dữ liệu của sản phẩm vào props initData của AddProductForm */}
      <AddProductForm initData={productData} id={id} />
    </div>
  );
};

export default EditProductPage;
