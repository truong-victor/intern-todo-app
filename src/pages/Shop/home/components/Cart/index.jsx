import React, { useEffect, useRef, useState } from "react";

import Layout from "../header";
import Footer from "../../../../../@core/layout/AdminLayout/components/Footer";
import { useNavigate, useParams } from "react-router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import {
  TextField,
  Typography,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useCart } from "../../../../../@core/provider/CartProvider";
import DeleteAll from "./deleteall";
import SelectCity from "../../City/Component/selectCity";
import SelectDistricts from "../../City/Component/selectAddress";
import BasicBreadcrumbsDeleteAll from "../Breadcrumb/breadCrumDeleteAll";

export default function Cart({ props }) {
  const {
    cart,
    setCart,
    handleRemove,
    handleDeleteAll,
    increaseCartNumber,
    reduceCartNumber,
    total,
    totalPrice,
    quantity,
    quantityInCart,
  } = useCart();
  console.log("quantity33", quantity);

  const cartItem = JSON.parse(localStorage.getItem("item11"));

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState(true);
  const [value, setValue] = useState(true);
  console.log("value43", value);

  const schema = yup.object().shape({
    fullName: yup.string().min(2).max(100).required(),
    email: yup.string().email().required(),
    number: yup.string().min(8).max(20).required(),
  });
  const {
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleDelete = (index) => {
    console.log("index", index);
    handleRemove(index);
  };

  const handleAllDelete = () => {
    if (confirm("Are you sure you want to delete everything?")) {
      handleDeleteAll();
      setLoading(true);
    }
  };

  const increaseNumber = (index) => {
    increaseCartNumber(index);
  };

  const reduceNumber = (index) => {
    // console.log("index", index)
    reduceCartNumber(index);
  };

  const handleTotal = () => {
    totalPrice();
  };

  const handleCompany = () => {
    if (company === true) {
      setCompany(false);
    } else {
      setCompany(true);
    }
  };

  useEffect((index) => {
    if(cart[index]?.data?.quantity > cart[index]?.quantity){
      setValue(false)
    }
    else {
      setValue(true)
    }
  },[])

  return (
    <>
      <Layout />
      <BasicBreadcrumbsDeleteAll />
      {loading ? (
        <DeleteAll />
      ) : (
        <form>
          <div className="bg-slate-100 max-h-max pb-10">
            <div lassName="bg-white flex ml-80 mr-80 mt-10 h-12">
              <div className="bg-white flex ml-80 mr-80 h-12 justify-between">
                <div className="mt-2.5 ml-2 font-normal text-lg	">
                  Giỏ hàng của bạn
                </div>
                <div
                  className="order-last mr-2 mt-2.5 font-normal text-lg"
                  onClick={() => navigate("/home")}
                >
                  Mua thêm sản phẩm khác
                </div>
              </div>

              <div className="bg-white flex ml-80 mr-80 mt-10 h-12 justify-between">
                <div className="border border-slate-600 mt-4 w-28 order-last rounded-sm ml-auto	mr-3">
                  <span className="ml-5 text-black " onClick={handleAllDelete}>
                    Xoá tất cả
                  </span>
                </div>
              </div>
              {cartItem?.map((row, index) => (
                <div className="bg-white flex ml-80 mr-80 h-60 items-start">
                  <div>
                    <img
                      className="object-cover w-50 ml-10 mt-3"
                      src={row?.data?.avatar}
                    />
                  </div>
                  <div className="ml-10 mt-16">{row?.data?.name}</div>
                  <div className="ml-8 flex mt-16">
                    <div
                      className="border border-slate-500 w-8 h-8 mt-1"
                      onClick={() => reduceNumber(index)}
                    >
                      <div className="pl-2.5 pt-0.5">-</div>
                    </div>
                    <input
                      type=" number"
                      className="w-10 h-8 border border-slate-500 relative mt-1"
                      value={
                        value ? (
                          row?.quantity
                        ): (
                          row?.data?.quantity
                        )
                      }
                    />
                    <div
                      className="border border-slate-500 w-8 h-8 mt-1"
                      onClick={() => increaseNumber(index)}
                    >
                      <div className="pl-2.5 pt-0.5">+</div>
                    </div>
                  </div>
                  <div>
                    <div className="ml-8 mt-16 mr-6">
                      <div className="font-bold text-xl text-[#be1f2d]">
                        {(
                          row?.quantity * row?.data?.salePrice
                        )?.toLocaleString()}
                        đ
                      </div>
                      <div className="text-[#575757] line-through text">
                        {row?.data?.price?.toLocaleString()}đ
                      </div>
                      <div className="ml-20 mt-16">
                        <DeleteIcon onClick={() => handleDelete(index)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-white ml-80 mr-80 mt-1">
                <div className="text-cyan-600 ml-3 font-semibold text-lg">
                  THÔNG TIN KHÁCH HÀNG
                </div>

                <input
                  className="bg-white border-2 border-slate-300 h-12 w-10/12 rounded-md mt-4 ml-16"
                  {...register("fullName")}
                  name="fullName"
                  type="text"
                  placeholder="Họ tên*"
                />
                <div className="flex mt-4">
                  <input
                    className="bg-white ml-16 border-2 border-slate-300 h-12 w-80 rounded-md"
                    type="number"
                    placeholder="Số điện thoại"
                    name="number"
                    {...register("number")}
                  />
                  <Typography
                    sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
                  >
                    {errors?.number?.message}
                  </Typography>
                  <input
                    className="bg-white ml-2 h-12 w-5/12 border-2 border-slate-300 rounded-md"
                    type="text"
                    placeholder="Email"
                    name="email"
                    {...register("email")}
                  />
                  <Typography
                    sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
                  >
                    {errors?.email?.message}
                  </Typography>
                </div>
                <div className="flex mt-3">
                  <div className="ml-16">
                    <SelectCity name="selectCity" control={control} />
                  </div>
                  <div className="ml-7">
                    <SelectDistricts
                      name="selectDistrict"
                      control={control}
                      provinceId={watch("selectCity")}
                    />
                  </div>
                </div>

                <input
                  className="bg-white border-2 border-slate-300 h-12 w-10/12 rounded-md mt-4 ml-16 "
                  type="text"
                  placeholder="Địa chỉ*"
                  name="address"
                  {...register("address", {
                    required: "Vui lòng nhập địa để tiếp tục",
                    pattern: {
                      message: "Please enter a email",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <input
                  className="bg-white border-2 border-slate-300 h-28 w-10/12 rounded-md mt-4 ml-16"
                  name="note"
                  type="Ghi chú"
                  placeholder="Ghi chú"
                />
                <Checkbox
                  size="small"
                  sx={{ marginLeft: 7 }}
                  name="false"
                  control={control}
                  onClick={handleCompany}
                />
                <span className="font-normal text-sm left-0">
                  Yêu cầu xuất hoá đơn công ty
                </span>

                {company ? (
                  <div></div>
                ) : (
                  <div>
                    <input
                      className="bg-white border-2 border-slate-300 h-12 w-10/12 rounded-md mt-4 ml-16"
                      type="text"
                      placeholder="Tên công ty"
                      name="address"
                      {...register("address", {
                        required: "Vui lòng nhập tên công ty",
                        pattern: {
                          message: "Please enter a email",
                        },
                      })}
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      {errors?.fullName?.message}
                    </Typography>

                    <input
                      className="bg-white border-2 border-slate-300 h-12 w-10/12 rounded-md mt-4 ml-16"
                      type="text"
                      placeholder="Địa chỉ công ty"
                      name="address"
                      {...register("address", {
                        required: "Vui lòng nhập địa chỉ công ty",
                        pattern: {
                          message: "Please enter a email",
                        },
                      })}
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />

                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      {errors?.fullName?.message}
                    </Typography>

                    <input
                      className="bg-white border-2 border-slate-300 h-12 w-10/12 rounded-md mt-4 ml-16"
                      type="text"
                      placeholder="Mã số thuế"
                      name="address"
                      {...register("address", {
                        required: "Vui lòng nhập mã số thuế công ty",
                        pattern: {
                          message: "Please enter a email",
                        },
                      })}
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />

                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      {errors?.fullName?.message}
                    </Typography>
                  </div>
                )}
                <div className="text-cyan-600 pl-16 pt-10 font-semibold text-lg">
                  PHƯƠNG THỨC THANH TOÁN
                </div>
                <input type="checkbox" className="ml-16 mt-3" checked="yes" />
                <span className="font-normal text-sm">
                  Thanh toán khi nhận hàng
                </span>
                <div className="text-cyan-600 pl-16 pt-10 font-semibold text-lg">
                  TỔNG TIỀN
                </div>
                <div className="flex">
                  <div className="pl-16">Tổng cộng</div>
                  <div className="ml-auto mr-5 font-normal">
                    {total?.toLocaleString()}đ
                  </div>
                </div>
                <div className="flex">
                  <div className="pl-16" onClick={handleTotal}>
                    Thành tiền
                  </div>
                  <div className="ml-auto  pr-5">
                    <div className="font-medium text-lg text-[#be1f2d] ml-10">
                      {total?.toLocaleString()}đ
                    </div>
                    <div className="font-normal text-base">
                      (Giá đã bao gồm VAT)
                    </div>
                  </div>
                </div>

                <div className="w-10/12 bg-red-600 h-12 ml-16 rounded hover:bg-red-700">
                  <div className="text-white font-semibold text-lg pl-72 pt-2">
                    ĐẶT HÀNG
                  </div>
                </div>
                <div className="w-10/12 bg-orange-500 h-12 ml-16 rounded mt-2 mb-10 hover:bg-orange-600">
                  <div className="text-white font-semibold text-lg pl-64 ml-5 pt-2">
                    MUA TRẢ GÓP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      <Footer />
    </>
  );
}
