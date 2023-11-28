import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { adminProductService } from '../../../services/adminProductService';
import { useRequest  } from 'ahooks';
import { useNavigate ,useParams} from "react-router";

function ListproductForm() {
  const { id } = useParams();

  const navigate = useNavigate() ; 

  const [paging, setPaging] = useState({
    page: 1,
    pageSize: 10,
  });

  const {
    data: listData,
    loading: loadingListData,
    run: fetchListData,
  } = useRequest(adminProductService.search, {
    manual: true,
  });

  useEffect(() => {
    fetchListData({ params: paging });
  }, [JSON.stringify(paging)]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'salePrice', headerName: 'Sale Price', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 150,
      renderCell: (params) => (
        <img src={params.value} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
      ),
    },
    {
      field: 'listImage',
      headerName: 'List Image',
      width: 200,
      renderCell: (params) => (
        <img src={JSON.parse(params.value)?.[0]} alt="List Image" style={{ width: '100%', height: 'auto' }} />
      ),
    },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'description', headerName: 'Description', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const handleEdit = (id) => {
    // Xử lý sự kiện khi nhấn nút sửa
    navigate(`/admin/product/${id}`);
    console.log(`Edit item with ID ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      // Gọi hàm remove và đợi nó hoàn thành trước khi tiếp tục
      await adminProductService.remove(id);
  
      // Gọi lại fetchListData để cập nhật danh sách sau khi xóa
      await fetchListData({ params: paging });
  
      console.log(`Delete item with ID ${id}`);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };
  
  

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '20px' }}>
        {/* Thêm nút hoặc bất kỳ thành phần điều hướng hoặc thêm mới nếu cần */}
        <Button variant="contained" color="primary" onClick={() =>  navigate("/admin/product/new")}>
          Add Product
        </Button>
      </Box>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={listData?.data?.dataTable ?? []}
          columns={columns}
          pageSize={paging.pageSize}
          pagination
          pageSizeOptions={[5, 10, 25, 50, 100]} // Các tùy chọn số lượng hàng trên mỗi trang
          checkboxSelection
          loading={loadingListData}
        />
      </div>
    </>
  );
}

export default ListproductForm;
