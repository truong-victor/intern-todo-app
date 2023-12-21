import { useRequest } from "ahooks";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { detailProductService } from "../../../services/detailProduct";

import { Button, Select } from "@mui/material";
import Layout from "../../../../pages/Shop/home/components/header";
import Footer from "../../AdminLayout/components/Footer";
import BasicBreadcrumbs from "../../../../pages/Shop/home/components/Breadcrumb/breadcrumb";
import { useCart } from "../../../provider/CartProvider";
import CoreNumberInput from "../../../components/inputs/CoreNumberInput";
import { productServiceHome } from "../../../services/ProductServiceHome";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, CircularProgress } from "@mui/material";
import { add } from "date-fns";
import { number } from "yup";
import PositionSticky from "../../../../pages/Shop/home/components/postionsticky/postionsticky";
import AsNavFor from "./Carousel";

export default function DetailProduct() {
  const [padding, setPadding] = useState({
    page: 1,
    pageSize: 3,
  });
  const {
    data: listData,
    loading: loadingLisData,
    run: fetchListData,
  } = useRequest(productServiceHome.search, {
    manual: true,
  });
  console.log("listData", listData);
  console.log("loading", loadingLisData);
  console.log("fetchListData", fetchListData);

  const handleChange = (_, page) => {
    setPadding((prev) => ({ ...prev, page }));
  };

  useEffect(() => {
    fetchListData({ params: padding });
  }, [JSON.stringify(padding)]);

  const { id } = useParams();
  console.log(id);

  const [results, setResults] = useState([]);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const [quantity, setQuantity] = useState(0)
  console.log("quantity55", quantity)

  const navigate = useNavigate();

  const {
    data: detailProduct,
    loading: loadingDetailProduct,
    run: getDetailProduct,
  } = useRequest(detailProductService.find, { manual: true });

  useEffect(() => {
    getDetailProduct(id);
  }, [id]);

  // console.log("detailProduct", detailProduct?.data)

  const images = useMemo(() => {
    if (detailProduct) {
      const all = JSON.parse(detailProduct?.data?.listImage);
      setResults(all);
    }
    return [];
  }, [JSON.stringify(detailProduct)]);

  const { cart, setCart, addToCart, getLocalStorage, updateCart } = useCart();


  const handleClickCart = () => {
    if(quantity > detailProduct?.data?.quantity){
      alert("Not enough quantity product in warehouse")
      return addToCart({ ...detailProduct, quantity: detailProduct?.data?.quantity });
    }else{
      if (quantity == "") {
        alert("No product quantity yet");
      } else {
        const isPreItem = cart.find((item) => {
          return item?.data?.id === detailProduct?.data?.id;
        });
        console.log("isPreItem", isPreItem);

        if (!isPreItem) {
          // if(Number(quantity) >= detailProduct?.data?.quantity){
          alert("Product added successfully");
          return addToCart({ ...detailProduct, quantity: Math.abs(quantity) });
        }
        if (isPreItem) {
          alert("Products already in the cart");
        }
}
    }
      
  };

  return (
    <>
      <AsNavFor />
      <Layout />
      <BasicBreadcrumbs />
      <div className="lg:flex lg:mt-10 ">
        <div className="">
          <img
            className="lg:w-10/12 lg:h-10/12 lg:ml-20 lg:bg-cover lg:mt-30 lg:border border-sky-200 lg:rounded-md "
            src={detailProduct?.data?.avatar}
            alt=""
            id=""
          />
          <div className="lg:flex lg:mt-6 lg:ml-40">
            <img
              className="lg:w-16 lg:h-16 lg:border lg:border-sky-200 lg:rounded-md lg:bg-cover "
              src={results[0]}
              alt=""
            />
            <img
              className="lg:w-16 lg:h-16 lg:border lg:border-sky-200 lg:rounded-md lg:bg-cover lg:ml-10"
              src={results[1]}
              alt=""
            />
            <img
              className="lg:w-16 lg:h-16 lg:border lg:border-sky-200 lg:rounded-md lg:bg-cover lg:ml-10"
              src={results[2]}
              alt=""
            />
            <img
              className="lg:w-16 lg:h-16 lg:border lg:border-sky-200 lg:rounded-md lg:bg-cover lg:ml-10"
              src={results[3]}
              alt=""
            />
          </div>
        </div>
        <div className="lg:ml-10 lg:mr-16 lg:w-1/2">
          <div className="lg:font-medium lg:text-2xl">
            {detailProduct?.data?.name}
          </div>
          <div className="lg:flex lg:mt-2">
            <div className="lg:font-light lg:text-sm">Bảo hành:</div>
            <div className="text-red-700 lg:font-light	lg:text-sm">12 tháng</div>
            <div className="lg:ml-8 lg:font-light	lg:text-sm">Tình trạng:</div>
            <div className="lg:text-lime-800 lg:font-light lg:text-sm">
              Còn hàng
            </div>
            <div className="ml-8">
              <select className="lg:border-solid">
                <option>Xem chi nhánh đang có còn hàng</option>
                <option>Showroom Miền Bắc</option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="lg:flex lg:bg-slate-200 lg:rounded-md lg:h-16 lg:border lg:border-sky-500 lg:items-center">
            <div className="lg:ml-4 lg:font-bold lg:text-3xl lg:text-[#be1f2d]">
              {detailProduct?.data?.price?.toLocaleString()}đ
            </div>
            <div className="lg:ml-4 lg:text-[#575757] lg:line-through lg:text-xl">
              {detailProduct?.data?.salePrice?.toLocaleString()}đ
            </div>
            <div className="lg:ml-4 lg:text-[#be1f2d] lg:text-xl">
              Tiết kiệm:
              {Math.abs(
                detailProduct?.data?.price - detailProduct?.data?.salePrice
              ).toLocaleString()}
            </div>
          </div>
          <div className="lg:border lg:border-sky-500 lg:mt-6 lg:rounded-md">
            <div className="lg:flex lg:bg-red-600 lg:rounded-t-md lg:h-12 ">
              <div className="lg:ml-3 lg:mt-2.5 lg:text-white">
                <CardGiftcardIcon />
              </div>

              <div className="lg:text-white lg:ml-2 lg:mt-2.5 lg:font-normal lg:text-xl	">
                Khuyến mãi
              </div>
            </div>
            <div className="lg:mt-5 lg:mb-5">
              <div className="lg:mt-1.5">
                + Tặng thêm 8G Ram DDR5 trị giá: 900.000đ
              </div>
              <div className="lg:mt-1.5">
                + Tặng gấu bông Galax Trị giá: 100.000đ
              </div>
              <div className="lg:mt-1.5">
                + Tặng sổ tay A5 NC: Trị giá: 100.000đ
              </div>
              <div className="lg:mt-1.5">
                + Tặng Túi/Balo laptop NC trị giá: 390.000đ
              </div>
              <div className="lg:mt-1.5">
                + Tặng chuột không dây trị giá: 1500.000đ
              </div>
              <div className="lg:mt-1.5">
                + Tặng bàn di chuột trị giá: 50.000đ
              </div>
              <div className="lg:mt-1.5">
                + Tặng bộ vệ sinh laptop trị giá: 40.000đ
              </div>
              <div className="lg:mt-1.5">
                + Vệ sinh bảo dưỡng laptop trị giá: 1 triệu đồng
              </div>
              <div className="lg:mt-1.5">
                + Giảm 10% khi mua thêm RAM, HDD laptop
              </div>
              <div className="lg:mt-1.5">
                + Giảm 5% khi mua kèm Gear, Đế tản nhiệt Laptop
              </div>
            </div>
          </div>

          <div className="lg:flex">
            <input
              type="number"
              placeholder="value"
              value={quantity}
              onChange={(e) => setQuantity(e?.target?.value)}
            />
            <div
              className="lg:border lg:rounded-md lg:border-sky-500 lg:ml-4 lg:w-48 lg:h-10 lg:mt-4 lg:flex"
              onClick={() => handleClickCart(detailProduct?.data?.id)}
            >
              <div className="lg:mt-1.5 lg:ml-1.5 lg:text-cyan-500">
                <ShoppingCartIcon />
              </div>
              <div className="lg:mt-1.5 lg:ml-3 lg:text-cyan-500">
                Thêm vào giỏ hàng
              </div>
            </div>
          </div>
          <div>
            <div className="lg:bg-red-600 lg:rounded-lg lg:h-16 lg:mt-4">
              <div className="lg:ml-64  lg:text-white lg:font-semibold	lg:text-xl">
                ĐẶT MUA NGAY
              </div>
              <div className="lg:ml-60 lg:mt-1 lg:text-white lg:font-light lg:text-sm">
                Giao hàng tận nơi nhanh chóng
              </div>
            </div>
          </div>
        </div>
      </div>

      <Box className="lg:flex">
        {loadingLisData ? (
          <div className="lg:flex lg:w-full lg:justify-center">
            <CircularProgress />
          </div>
        ) : (
          listData?.data?.dataTable?.map((row) => (
            <div
              className="lg:w-20/100 lg:p-[10px] lg:border lg:border-grey-400"
              key={row?.id}
              onClick={() => navigate(`${row.name}`)}
            >
              <img className="" src={row?.avatar} alt="" />
              <h2>{row?.name}</h2>
              <p className="lg:text-[#575757] lg:line-through lg:text-[14px] lg:font-400">
                {row?.price?.toLocaleString()}
              </p>
              <h3 className="lg:font-700 lg:text-[20px] lg:text-[#be1f2d] lg:font-sans-serif">
                {row?.salePrice?.toLocaleString()}
              </h3>
            </div>
          ))
        )}
      </Box>

      <PositionSticky />
      <Footer />
    </>
  );
}
