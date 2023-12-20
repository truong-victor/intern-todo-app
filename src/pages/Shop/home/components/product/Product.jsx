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
    useEffect(() => {
      fetchListData({ params: paging });
    }, [JSON.stringify(paging)]);
    
    const handleChangePage = (_, page) => {
      setPaging((prev) => ({ ...prev, page }));
    };
   
    return (
        <>
        <Pagination
          count={Math.floor(listData?.data?.totalCount / paging?.pageSize) + 1}
          onChange={handleChangePage}
        />
      <div id="product_list" className="flex justify-between">
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
      </>
    );
}
export default Product