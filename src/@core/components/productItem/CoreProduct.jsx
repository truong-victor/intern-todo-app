import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { coreService } from "./CoreService";
import { useNavigate } from "react-router";
import { CircularProgress } from "@mui/material"; 

const CoreProduct = (props) => {
  const navigate = useNavigate();
  const [paging, setPaging] = useState({
    page: 1,
    pageSize: 10,
  });
  const {
    data: listData,
    loading: loadingListData,
    run: fetchListData,
    
  } = useRequest(coreService.search, {
    manual: true,
  });
  {console.log('============= ',listData)}
  useEffect(() => {
    fetchListData({ params: paging });
  }, [JSON.stringify(paging)]);


  return loadingListData ? (
    <div className="flex w-full justify-center">
      <CircularProgress />
    </div>
  ) : (
    listData?.data?.dataTable?.map((row) => (
      <div className="w-20/100 p-[10px] border border-grey-400" key={row?.id}>
        <img className="w-[200px]" src={row?.avatar} alt="" />
        <h2>{row?.name}</h2>
        <p className="text-[#575757] line-through text-[14px] font-400">
          {row?.price?.toLocaleString()}
        </p>
        <h3 className="font-700 text-[20px] text-[#be1f2d] font-sans-serif">
          {row?.salePrice?.toLocaleString()}
        </h3>
      </div>
    ))
  );
};

export default CoreProduct;