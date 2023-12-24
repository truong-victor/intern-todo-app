import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../@core/provider/CartProvider";
import AsNavFor from "./Carousel";
import CoreNumberInput from "../../../@core/components/inputs/CoreNumberInput";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CleaningServices } from "@mui/icons-material";

import { toast } from "react-toastify";
function DetailProduct(props) {
  const { detailProductData } = props;
  const { cartItems,setCartItems, addToCart } = useCartContext();
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  console.log('purchaseQuantiy', purchaseQuantity)
  console.log(detailProductData);
  const backgroundImageStyle = {
    backgroundImage:
      "url('/images/product/background_offer_detail.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const images = useMemo(() => {
    if (detailProductData) {
      return JSON.parse(detailProductData?.listImage);
    }
    return [];
  }, [JSON.stringify(detailProductData)]);

  const  handleAddToCart = ()=>{
    const existedItem = cartItems?.find((item) => item?.id === detailProductData?.id)
    if(!existedItem) {
        // if(purchaseQuantity > detailProductData?.quantity){
        //   toast.error(`Số lượng còn lại: ${detailProductData?.quantity}`, {
        //   position: toast.POSITION.TOP_CENTER,
        // });
        // } else{
        //   toast.success('Đã có trong giỏ hàng', {
        //    position: toast.POSITION.TOP_CENTER,
        //  });
          toast.success('Đã có trong giỏ hàng')
          addToCart({id: detailProductData?.id, purchaseQuantity: purchaseQuantity, checked: false})
        // }
    } 
    else{
      // if(purchaseQuantity > detailProductData?.quantity){
      //     toast.error(`Số lượng tối đa: ${detailProductData?.quantity}`, {
      //     position: toast.POSITION.TOP_CENTER,
      //   })
      // }else{
      //     toast.success('Đã có trong giỏ hàng', {
      //      position: toast.POSITION.TOP_CENTER,
      //    });
         const newPurchaseQuantity = existedItem.purchaseQuantity + purchaseQuantity;
           const newCartItems = cartItems.map((item) =>{
             if(item.id == existedItem.id){
               return {...item, purchaseQuantity: newPurchaseQuantity}
             } return item;
           })
           toast.success('Đã có trong giỏ hàng')
           setCartItems(newCartItems);
        // }
    }
  }
  return (
    <div className="flex justify-between bg-[#fff] mt-8 mb-8">
      <div className="w-1/2">
        <AsNavFor listImage={images} />
      </div>

      <div className="w-[49%] px-[8px]">
        <h1 className="text-[32px] font-semibold">
          [{detailProductData?.name}]
        </h1>
        <div className="p-4 flex items-center justify-start rounded-[10px] bg-[#f7f9fb] border-[#b8b8b8] border">
          <p className="text-[30px] font-[700] text-red-500 mr-5">
            {detailProductData?.salePrice.toLocaleString()} đ
          </p>
          <p className="text-[24px] font-[500] text-[#9e9e9e] line-through mr-5">
            {detailProductData?.price.toLocaleString()} đ
          </p>
          <p className="text-[16px] font-[400] text-red-700">
            TIết kiệm{" "}
            {Math.abs(
              detailProductData?.price - detailProductData?.salePrice
            ).toLocaleString()}
          </p>
        </div>

        <div
          className="w-full h-[290px] rounded-2xl mt-4 p-2"
          style={backgroundImageStyle}
        >
          <div className="product_icon flex py-1 text-white font-[700]">
            <RedeemIcon className="mr-2" />
            <p>KHUYẾN MÃI</p>
          </div>

          <div className="product_info bg-white p-3 rounded-2xl">
            + Tặng Gấu bông Galax Trị giá 100.000đ
            <br />
            + Tặng sổ tay A5 NC: Trị giá 100.000đ
            <br />
            + Tặng Túi/Balo laptop NC trị giá: 390.000đ
            <br />
            + Tặng Chuột không dây trị giá: 150.000đ
            <br />
            + Tặng Bàn di chuột trị giá: 50.000đ
            <br />
            + Tặng Bộ vệ sinh Laptop trị giá: 40.000đ
            <br />
            + Vệ sinh bảo dưỡng Laptop miễn phí trọn đời trị giá: 1 triệu đồng
            <br />
            + Giảm 10% khi mua thêm RAM, HDD laptop
            <br />+ Giảm 5% khi mua kèm Gear, Đế tản nhiệt Laptop
          </div>
        </div>

        <div className="product_addToCartBtns flex items-center mt-4">
          <p className="mr-3">Số lượng:</p>
          <CoreNumberInput max= {detailProductData?.quantity} purchaseQuantity = {purchaseQuantity} setPurchaseQuantity = {setPurchaseQuantity}  />
          <a
            onClick={handleAddToCart}
            className="flex p-2 ml-3 border border-blue-500 border-solid rounded-md text-[#0a76e4] hover:bg-blue-500 hover:text-white hover:cursor-pointer"
          >
            <ShoppingCartOutlinedIcon />
            <p>Thêm vào giỏ hàng</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
