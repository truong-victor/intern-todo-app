import React, {useEffect, useState} from "react";

import { useRequest } from "ahooks";
import { useNavigate, useParams } from "react-router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";


import Layout from "../../../../pages/Shop/home/components/header";
import Footer from "../components/Footer";
import { detailProductService } from "../../../services/detailProduct";

import { useForm } from "react-hook-form";
import { TextField, Typography, Grid, Box } from "@mui/material";


export default function ProductPayment({ props}) {


    const {id} = useParams()
    console.log(id)

    const navigate = useNavigate()

    const schema = yup.object().shape({
        fullName: yup.string().min(2).max(100).required(),
        email: yup.string().email().required(),
        number: yup.string().min(8).max(20).required(),
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
      }); 


    const{
        data: detailProduct,
        loading: loadingDetailProduct,
        run: getDetailProduct,
    } = useRequest(
        detailProductService.find,
        {manual:true}
    )

    useEffect(() => {
        getDetailProduct(id)
    },[id])

    console.log("detailProduct", detailProduct)

    return(
        <> 
            <Layout/>
                <div className="bg-slate-200 flex ml-80 mr-80 mt-10 h-12 justify-between">
                    <div className="mt-2.5 ml-2 font-normal text-lg	">Giỏ hàng của bạn</div>
                    <div className="order-last mr-2 mt-2.5 font-normal text-lg" onClick={() => navigate('/home')}>Mua thêm sản phẩm khác</div>
                </div>

                <div className="bg-slate-200 flex ml-80 mr-80 mt-3 h-60 items-start" >
                    <div>
                        <img className="w-40 h-40 mt-16" src={detailProduct?.data?.avatar}/>
                    </div>
                    <div className="ml-32 mt-16">
                        {detailProduct?.data?.name}
                    </div>
                    <div className="ml-8 flex mt-16"> 
                        <div className="border border-sky-500 w-10 h-10">
                                <div className="ml-2 mt-1">-</div>
                        </div>
                        <div className="border border-sky-500 w-16 h-10">
                                <div className="mt-1 ml-6">1</div>
                        </div>
                        <div className="border border-sky-500 w-10 h-10">
                                <div className="ml-2 mt-1">+</div>
                        </div>
                    </div>
                    <div>
                        <div className="border border-slate-600 mr-2 mt-4 w-28">
                            <span className="ml-5 text-black">Xoá tất cả </span>
                        </div>
                        <div  className="ml-8 mt-5 mr-6">
                            <div className="font-bold text-xl text-[#be1f2d]">{detailProduct?.data?.price}đ</div>
                            <div className="text-[#575757] line-through text">{detailProduct?.data?.salePrice}đ</div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-200 ml-80 mr-80 mt-1">
                    <div className="text-cyan-500 ml-3 font-medium text-lg">
                        THÔNG TIN KHÁCH HÀNG
                    </div>
                        <input className="bg-slate-200 border-2 border-sky-500 h-10 w-10/12 rounded-md mt-4 ml-16" 
                        {...register("fullName")}
                        name="fullName"
                        type="text" 
                        placeholder="Họ tên*"/>
                    <div  className="flex mt-4">
                            <input className="bg-slate-200 ml-16 border-2 border-sky-500 h-10 w-80 rounded-md" type="number" 
                            placeholder="Số điện thoại"
                            name="number"
                            {...register("number")}/>
                            <Typography
                                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
                                >
                                {errors?.number?.message}
                            </Typography>
                            <input className="bg-slate-200 ml-4 h-10 w-5/12 border-2 border-sky-500 rounded-md" type="text" 
                            placeholder="Email"
                            name="email"
                            {...register("email")}/>
                            <Typography
                                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
                                >
                                {errors?.email?.message}
                            </Typography>
                    </div>
                    <input className="bg-slate-200 border-2 border-sky-500 h-10 w-10/12 rounded-md mt-4 ml-16" 
                        type="text" 
                        placeholder="Địa chỉ*"
                        name="address"
                        {...register("address")}/>



   
           
  

                </div>
            <Footer/>
        </>
    );
}