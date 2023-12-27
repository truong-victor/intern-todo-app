import { CircularProgress, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import _debounce from 'lodash/debounce';
import { getListProductService } from "../../../../../pages/Shop/home/components/product/api";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router";

function SearchFilter() {
  const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState([]);
    const [paging, setPaging] = useState({
      page: 1,
      pageSize: 10,
    });
    const {
      data: listData,
      loading: loadingListData,
      run: fetchListData,
    } = useRequest(getListProductService.search, {
      manual: true,
      onSuccess: data => setFilteredData(data?.data?.dataTable),
    });


    useEffect(()=>{
      if(paging?.name?.trim()?.length > 0){
        fetchListData({params: paging})
      }
      else{
        setFilteredData([])
      }
    },[JSON.stringify(paging)])

    const debounceInputValue = _debounce((e)=> {
      
      setPaging(prev => ({...prev, name: e?.target?.value ?? ''}))
    }, 600)

  // console.log(listData)
    return(
    <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 430, height: 40, marginLeft: '10px' }}
          className='w-[130px] lg:ml-2 relative'
        >
          <InputBase
            onChange={debounceInputValue}
            sx={{ ml: 1, flex: 1, }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            {loadingListData ? <CircularProgress/> : <SearchIcon />}
          </IconButton>
          {filteredData?.length ? (
            <ul className='h-[320px] absolute top-[100%] overflow-y-scroll bg-white w-full p-2'>
              {filteredData?.map((item, index)=>(
                <li key={index} className='flex items-center content-between' onClick={() => navigate(`/product/${item.id}`)}>
                  <img style={{width: '50px'}} src={item?.avatar} alt="" />
                  <div className='text-[14px] p-2' >
                    <h4>{item?.name}</h4>
                    <h4 className='text-red-700 font-medium'>{item?.salePrice.toLocaleString()}</h4>
                  </div>
                </li>
              ))}
            </ul>) : ''}
        </Paper>
    )
}
export default SearchFilter