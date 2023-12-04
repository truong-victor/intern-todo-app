import ShopLayout from "../../../@core/layout/ShopLayout";
import DetailProduct from "./DetailProduct";
import { useParams } from "react-router";
import { useRequest } from "ahooks";
import { getDetailProductService } from "../services/GetDetailProductService";

import { useEffect } from "react";
const DetailProductPage = () => {

  const {id} = useParams()
  const {
    data: detailProduct,
    loading: loadingDetailProduct,
    run: getDetailProduct,
  } = useRequest(getDetailProductService.find, {
    manual: true,
  });
  useEffect(() => {
    getDetailProduct(id);
  }, [id]);
  
  return (
    <ShopLayout>
        <DetailProduct 
          detailProductData = {detailProduct?.data} 
        />
    </ShopLayout>
  );
};

export default DetailProductPage;
