import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { productService } from "../../../services/productService";
import {
  CircularProgress,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { useNavigate } from "react-router";

const ListProduct = (props) => {
  const navigate = useNavigate();
  const [paging, setPaging] = useState({
    page: 1,
    pageSize: 10,
  });

  const {
    data: listData,
    loading: loadingListData,
    run: fetchListData,
  } = useRequest(productService.search, {
    manual: true,
  });

  useEffect(() => {
    fetchListData({ params: paging });
  }, [JSON.stringify(paging)]);

  const handleChangePage = (_, page) => {
    setPaging((prev) => ({ ...prev, page }));
  };

  const handleDelete = async (id) => {
    try {
      await productService.remove(id);
      await fetchListData({ params: paging });
    } catch (error) {
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };

  return (
    <>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                <strong>ID</strong>
              </TableCell>
              <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                <strong>Tên sản phẩm</strong>
              </TableCell>
              <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                <strong>Giá</strong>
              </TableCell>
              <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                <strong>Avatar</strong>
              </TableCell>
              <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                <strong>Ảnh Chi Tiết</strong>
              </TableCell>
              <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                <strong>Hành động</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loadingListData ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              listData?.data?.dataTable?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell component="th" scope="row" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                    {row?.id}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                    {row?.name}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                    {row?.price?.toLocaleString()}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                    <img src={row?.avatar} alt="" width="90" height="60" />
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                    <img src={row?.avatar} alt="" width="60" height="60" />
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid #ddd", textAlign: "center" }}>
                    <IconButton
                      onClick={() => navigate(`/admin/product/${row?.id}`)}
                      color="primary"
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(row?.id)}
                      color="secondary"
                      size="small"
                    >
                      <DeleteIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        
        <Pagination
          count={Math.floor(listData?.data?.totalCount / paging?.pageSize) + 1}
          onChange={handleChangePage}
        />
      </div>
      <IconButton
        onClick={() => navigate("/admin/product/new")}
        color="primary"
        size="small"
      >
        <AddIcon /> Thêm sản phẩm
      </IconButton>
      
    </>
  );
};

export default ListProduct;