import { useParams } from "react-router";
import AdminLayout from "../../../../../@core/layout/AdminLayout";
import AddProductForm from "./AddProductForm";
import { useRequest } from "ahooks";
import { productService } from "../../services/productService";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";
const DetailProductPage = (props) => {
  const { id } = useParams();
  console.log("🚀 ~ file: index.jsx:7 ~ DetailProductPage ~ id:", id);

  const {
    data: detailProduct,
    loading: loadingDetailProduct,
    run: getDetailProduct,
  } = useRequest(productService.find, {
    manual: true,
  });

  useEffect(() => {
    if (id === "new") {
      //day la trang them moi
    } else {
      getDetailProduct(id);
    }
  }, [id]);
  return (
    <>
      <AdminLayout>
        {loadingDetailProduct ? (
          <Skeleton />
        ) : (
          <AddProductForm initData={detailProduct?.data} id={id} />
        )}
      </AdminLayout>
    </>
  );
};

export default DetailProductPage;
