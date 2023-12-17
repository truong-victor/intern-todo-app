import CoreProduct from "../../../../../@core/components/productItem/CoreProduct"
import { useRequest } from "ahooks";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getListProductService } from "./api";
import { Pagination } from "@mui/material";
function Product(){
    const navigate = useNavigate();
    const [paging, setPaging] = useState({
      page: 1,
      pageSize: 5,
    });

    const {
      data: listData,
      loading: loadingListData,
      run: fetchListData,
    } = useRequest(getListProductService.search, {
      manual: true,
    });
console.log(listData)
    useEffect(() => {
      fetchListData({ params: paging });
    }, [JSON.stringify(paging)]);

    const handleChangePage = (_, page) => {
      setPaging((prev) => ({ ...prev, page }));
    };
   
    return (
        <>
        
      <div id="product_list" className="flex justify-between mt-3">
        {listData?.data?.dataTable.map((product,index) => (
          <CoreProduct key={index} 
            id= {product.id}
            name={product.name}
            avatar={product.avatar}
            price={product.price}
            salePrice = {product.salePrice}
          />
          
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" , marginTop:"20px"}}>
      <Pagination
        count={Math.floor(listData?.data?.totalCount / paging?.pageSize) + 1}
        onChange={handleChangePage}
      />
    </div>
      </>
    );
}
export default Product