
import loading from '../../../../../../public/images/Magnify-1s-200px.png';
import { useRequest } from "ahooks";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getListProductService } from "./api";
import { Pagination } from "@mui/material";
import CoreProduct from "../../../../../@core/components/productItem/CoreProduct";

const LoadingIcon = () => <img src={loading} alt='Loading...' />;

function Product() {
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
    const timeoutId = setTimeout(() => {
      fetchListData({ params: paging });
    }, 1000); // Thêm độ trễ 1 giây

    return () => {
      clearTimeout(timeoutId); // Xóa timeout nếu thành phần bị unmount
    };
  }, [JSON.stringify(paging)]);

  const handleChangePage = (_, page) => {
    setPaging((prev) => ({ ...prev, page }));
  };

  return (
    <>
      <div id="product_list" className="flex justify-between mt-3">
        {loadingListData ? (
          <div className="flex flex-col justify-center">
            <LoadingIcon />
            <p>Đang tải dữ liệu...</p>
          </div>
        ) : (
          /* Hiển thị danh sách sản phẩm */
          listData?.data?.dataTable.map((product, index) => (
            <CoreProduct
              key={index}
              id={product.id}
              name={product.name}
              avatar={product.avatar}
              price={product.price}
              salePrice={product.salePrice}
            />
          ))
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          count={Math.floor(listData?.data?.totalCount / paging?.pageSize) + 1}
          onChange={handleChangePage}
        />
      </div>
    </>
  );
}

export default Product;