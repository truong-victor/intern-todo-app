import React from "react";

import CartInHome from "../img/cart-home-min.png"
import BasicBreadcrumbsDeleteAll from "../Breadcrumb/breadCrumDeleteAll";
import { useNavigate } from "react-router";

export default function DeleteAllIcon() {

    const navigate = useNavigate()

    return(
        <>
        <BasicBreadcrumbsDeleteAll/>
        <div className="ml-96">
            <div className="ml-40">
                <img src={CartInHome} alt="CartInHome" />
            </div>
            <div className="ml-44 mt-3">
                <div>Không có sản phẩm nào trong giỏ hàng của bạn</div>
            </div>
            <div className="bg-red-500 w-48 h-10 mt-3 items-center ml-64 rounded-md" onClick={() => navigate("/home")}>
                <div className="ms-7 text-white	font-normal	text-lg	pt-1.5">Tiếp tục mua sắm</div>
            </div>
        </div>

        </>
    );
}