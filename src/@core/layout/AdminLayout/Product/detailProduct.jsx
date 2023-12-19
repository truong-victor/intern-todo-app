import React, { useEffect, useState  } from "react";

import { useNavigate } from "react-router";
import { useRequest } from "ahooks";
import { useParams } from "react-router";
import { productService } from "../../../../pages/Admin/Product/service/ProductService";
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
  import { toast } from "react-toastify";

  import Footer from "../components/Footer";
  import BasicBreadcrumbsAdmin from "../../../../pages/Shop/home/components/Breadcrumb/breadcrumbadmin";
  import { Link } from "react-router-dom";

export default function DetailProductAdmin({props}){

    const navigate =  useNavigate()
    const [loading, setLoading] =useState(false)

    const {id} = useParams()
    console.log(id)

    const handleDelete = async (id) =>{
      try {
        await productService.remove(id);
        await fetchListData({ params: paging });
        toast.success("Xoá sản phẩm thành công");
      } catch (error) {
        console.error(`Error deleting item with ID ${id}:`, error);
      }
    }

    // const [paging, setPaging] = useState({
    //     page:1, 
    //     pageSize: 1
    //   })

    // const{
    //     data:listData,
    //     loading: loadingListData,
    //     run: fetchListData,
    //   } = useRequest(productService.search,
    //     {
    //       manual: true
    //     })

    //     console.log('listData', listData?.data?.dataTable)

    //     const all = listData?.data?.dataTable.map((row) => (
    //         console.log("row", row.id)
    //     ))

    //     useEffect(() =>{
    //       fetchListData({params: paging},
    //       )},[JSON.stringify(paging)])


    const 
    {data: listData,
    loading: loadingListData,
    run: fetchListData
  } = useRequest(productService.find,
    {
      manual: true
    })


    console.log('listData', listData?.data?.name)
 
    useEffect(() => {
      fetchListData(id)
    },[])

    return(
        <>

        <BasicBreadcrumbsAdmin/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Tên sản phẩm</TableCell>
                            <TableCell>Giá</TableCell>
                            <TableCell>Avatar</TableCell>
                            <TableCell>Ảnh chi tiết</TableCell>
                            <TableCell>Mô tả</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            loadingListData ? (<div className="flex w-full justify-center"><CircularProgress/></div>)
                            : (
                
                                    <TableRow           
                                    key={listData?.data?.id} 
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                          {listData?.data?.id}
                                        </TableCell>
                                        <TableCell align="right">{listData?.data?.name}</TableCell>
                                        <TableCell align="right">
                                          <div className="flex flex-col gap-4">
                                            <span className="text-[2.2rem] text-blur-600">
                                              {listData?.data?.price?.toLocaleString()}
                                            </span>
                                            <span>{listData?.data?.salePrice?.toLocaleString()}</span>
                                          </div>
                                        </TableCell>
                                        <TableCell align="right">
                                          <img src={listData?.data?.avatar} className="w-[60px] aspect-square" />
                                        </TableCell>
                                        <TableCell align="right">1</TableCell>
                                        <TableCell align="right">
                                          {
                                            <div
                                              dangerouslySetInnerHTML={{ __html: listData?.data?.description }}
                                            ></div>
                                          }
                                        </TableCell>
                                        <TableCell align="right">
                                          <IconButton
                                            onClick={() => navigate(`/admin/product/${listData?.data?.id}`)}
                                            color="primary"
                                            size="small"
                                          >
                                            sửa
                                          </IconButton>
                                          <Link to="/admin/product">
                                            <IconButton
                                            onClick={() => handleDelete(listData?.data?.id)}
                                            color="secondary"
                                            size="small"
                                          >
                                            xóa
                                          </IconButton>
                                          </Link>
                                      </TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <Footer/>
        </>
    );
}