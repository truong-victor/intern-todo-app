import { useParams } from "react-router";
import AdminLayout from "../../../../../@core/layout/AdminLayout";
import AddProductForm from "./AddProductFile";
import { useRequest } from "ahooks";
import { productService } from "../../service/ProductService";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";
import DetailProductAdmin from "../../../../../@core/layout/AdminLayout/Product/detailProduct";



const DetailProductPage = (props) => {
  const {id} = useParams()
  console.log("id",id)

  const {data: detailProduct,
     loading:loadingDetailProduct, 
     run:getDetailProduct 
    } = useRequest(
    productService.find, 
    {manual: true})

    console.log("detail", detailProduct)
    console.log("loading", loadingDetailProduct)
    console.log("get", getDetailProduct)


    useEffect(() =>{
      if(id === 'new'){

      }else{
        getDetailProduct(id)
      }
    },[id])

  return <AdminLayout>
    {
      loadingDetailProduct ?  (
        <Skeleton/> 
      )
      : (
        <AddProductForm initData={detailProduct?.data} id={id}/>
      )
    }
    </AdminLayout>;
};

export default DetailProductPage;
