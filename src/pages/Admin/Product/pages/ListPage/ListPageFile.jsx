import { useRequest } from "ahooks";
import React, { useEffect, useState } from "react";
import { productService } from "../../service/ProductService";
import SearchBarAdmin from "../../../../Shop/home/components/SearchBar/SearchBarAdmin";
import SearchBarResults from "../../../../Shop/home/components/SearchBar/SearchBarResults";

import {
  CircularProgress,
  Icon,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router";

export default function ListProduct({props}) {

  const navigate = useNavigate()

  const [paging, setPaging] = useState({
    page:1, 
    pageSize: 3
  })
  const[results, setResults] =useState([])
  console.log("results",results)

  const handleDelete = async (id) =>{
    try {
      await productService.remove(id);
      await fetchListData({ params: paging });
    } catch (error) {
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  }

  const{
    data:listData,
    loading: loadingLisData,
    run: fetchListData,
  } = useRequest(productService.search,
    {
      manual: true
    })

    console.log('ListData', listData?.data?.dataTable)

    useEffect(() =>{
      fetchListData({params: paging}
      )},[JSON.stringify(paging)])

    
      const handleChange = (_, page) =>{
          setPaging(prev => ({...prev, page}))
      }

  return(
    <>
      <SearchBarAdmin setResults={setResults}/>
      {
        results && results.length &&  <SearchBarResults results={results}/>
      }
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Tên sản phẩm</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">Ảnh chi tiết</TableCell>
              <TableCell align="right">Mô tả</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              { loadingLisData ?(<div className="flex w-full justify-center"><CircularProgress/></div> ) :

              (listData?.data?.dataTable.map((row)=> (
                <TableRow           
                key={row?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row?.name}</TableCell>
                    <TableCell align="right">
                      <div className="flex flex-col gap-4">
                        <span className="text-[2.2rem] text-blur-600">
                          {row?.price?.toLocaleString()}
                        </span>
                        <span>{row?.salePrice?.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <img src={row?.avatar} className="w-[60px] aspect-square" />
                    </TableCell>
                    <TableCell align="right">1</TableCell>
                    <TableCell align="right">
                      {
                        <div
                          dangerouslySetInnerHTML={{ __html: row?.description }}
                        ></div>
                      }
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => navigate(`/admin/product/${row?.id}`)}
                        color="primary"
                        size="small"
                      >
                        sửa
                      </IconButton>
                  <IconButton
                      onClick={() => handleDelete(row?.id)}
                      color="secondary"
                      size="small"
                    >
                      xóa
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
          )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={Math.floor(listData?.data?.totalCount / paging?.pageSize)+1}
    onChange={handleChange}/>
    </>
  );
}