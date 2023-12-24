import CoreProduct from "../../../../@core/components/productItem/CoreProduct";
import { useRequest } from "ahooks";
import { useNavigate, } from "react-router";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { getListProductService } from "../../home/components/product/api";
import { Pagination } from "@mui/material";
function ProductList(props) {
   const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('search');

  const [paging, setPaging] = useState({
    page: 1,
    pageSize: 10,
    name: query ? query : ''
  });
  const {
    data: listData,
    loading: loadingListData,
    run: fetchListData,
  } = useRequest(getListProductService.search, {
    manual: true,
  });


  const handleChangePage = (_, page) => {
    setPaging((prev) => ({ ...prev, page}));
  };
  useEffect(()=>{
    setPaging((prev) =>({...prev, name: query ? query : ''}))
  }, [query])
  useEffect(() => {
    fetchListData({ params: paging });
  }, [JSON.stringify(paging)]);


  return (
    <div className="">
      {query ? (<div className="inline-block py-2 border-b-2 border-[#333]">
        <h1 className="inline-block text-xl text-[#333] font-semibold ">KẾT QUẢ TÌM KIẾM : {query?.toLocaleUpperCase()}</h1>
        <span>{`  (Tổng ${listData?.data?.dataTable.length} sản phẩm)`}</span>
      </div>) 
      : '' }

      <div className='bg-[#f7f5f5] shadow-md  '>
        
        <div id="product_list" className=" flex flex-wrap gap-3.5 p-3">
          {listData?.data?.dataTable.map((product, index) => (
            <CoreProduct
              key={index}
              id={product.id}
              name={product.name}
              avatar={product.avatar}
              price={product.price}
              salePrice={product.salePrice}
            />
          ))}
        </div>
        <Pagination
          className='flex justify-center mt-3'
          count={Math.floor(listData?.data?.totalCount / paging?.pageSize) + 1}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
}
export default ProductList;
