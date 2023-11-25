import { useRequest } from "ahooks";
import { useEffect, useState } from "react";
import { productService } from "../../../services/productService";
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
} from "@mui/material";
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

  return (
    <>
      <Pagination
        count={Math.floor(listData?.data?.totalCount / paging?.pageSize) + 1}
        onChange={handleChangePage}
      />

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
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loadingListData ? (
              <div className="flex w-full justify-center">
                <CircularProgress />
              </div>
            ) : (
              listData?.data?.dataTable?.map((row) => (
                <TableRow
                  key={row?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.id}
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
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListProduct;
