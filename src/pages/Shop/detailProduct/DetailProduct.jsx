import { useMemo, useState , useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AsNavFor from "./Carousel";
import CoreNumberInput from "../../../@core/components/inputs/CoreNumberInput";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { getDetailProductService } from "../services/GetDetailProductService";
import useLocalStorage from "../hook/useLocalStorage";
import { toast } from "react-toastify";
function DetailProduct(props) {
  const {id} = useParams();
  const [detailProduct, setDetailProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [listImages, setListImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useLocalStorage({
    key: "Cart",
    initValue: [],
  });
  const handleAddCart = () => {
    if (!quantityItem || isNaN(quantityItem) || quantityItem <= 0 ) {
      toast.error('Vui lòng nhập số lượng',{
       position: toast.POSITION.TOP_CENTER, 
      });
      return; 
    }
    const ProductIndex = cart.findIndex(item => item.id === id);
  
    if (ProductIndex !== -1) {
      // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
      setCart(prevCart => {
        const updatedCart = [...prevCart];
        updatedCart[ProductIndex].quantity += quantityItem;
  
        if (updatedCart[ProductIndex].quantity > detailProduct.quantity) {
          // Hiển thị thông báo (toast) nếu số lượng không phù hợp
          toast.error('Không đủ số lượng ok', {
            position: toast.POSITION.TOP_CENTER,
          });
          return prevCart; // Dừng thực hiện tiếp theo nếu số lượng không phù hợp
        }
  
        toast.success('Đã thêm vào giỏ hàng', {
          position: toast.POSITION.TOP_CENTER,
        });
  
        return updatedCart;
      });
    } else {
      const newProduct = {
        id: id,
        quantity: quantityItem,
      };
      if (newProduct.quantity > detailProduct.quantity) {
        toast.error('Không đủ số lượng', {
          position: toast.POSITION.TOP_CENTER,
        });
        return; // Dừng thực hiện tiếp theo nếu số lượng không phù hợp
      }
      setCart(prev => {
        toast.success('Đã thêm vào giỏ hàng', {
          position: toast.POSITION.TOP_CENTER,
        });
        return [...prev, newProduct];
      });
    }
  };
  const backgroundImageStyle = {
    backgroundImage:
      "url('/public/images/product/background_offer_detail.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  console.log(cart)   
  // const { handleAddToCart } = useCartContext();
  useEffect(() => {
    const fetchDetailProduct = async () => {
      try {
        const result = await getDetailProductService.find(id);
        setDetailProduct(result.data);
        const parsedListImages = JSON.parse(result.data.listImage);
        setListImages([result.data.avatar, ...parsedListImages]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchDetailProduct();
  }, [id]);

  const { detailProductData } = props;
 
  const [quantityItem,setQuantityItem] = useState(1)

  const images = useMemo(() => {
    if (detailProductData) {
      return JSON.parse(detailProductData?.listImage);
    }
    return [];
  }, [JSON.stringify(detailProductData)]);

  const handleDecreaseQuantity = () => {
    if (quantityItem > 1) {
      setQuantityItem(quantityItem - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantityItem(quantityItem + 1);
  };
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
            {detailProductData?.price.toLocaleString()} đ
          </p>
          <p className="text-[24px] font-[500] text-[#9e9e9e] line-through mr-5">
            {detailProductData?.salePrice.toLocaleString()} đ
          </p>
          <p className="text-[16px] font-[400] text-red-700">
            Tiết kiệm{" "}
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
            <div className="flex items-center">
              <button
                className=" p-2 border border-gray-300 border-solid  text-[#0a76e4] hover:bg-blue-500 hover:text-white hover:cursor-pointer"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <input 
                className="w-16 p-2 text-center border border-gray-300 "
                type="number"
                min="1"
                value={quantityItem}
                onChange={(e) => setQuantityItem(parseInt(e.target.value))}
              />
              <button
                className="p-2 border border-gray-300 border-solid  text-[#0a76e4] hover:bg-blue-500 hover:text-white hover:cursor-pointer"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
            <a
                className="flex p-2 ml-5 border border-blue-500 border-solid rounded-md text-[#0a76e4] hover:bg-blue-500 hover:text-white hover:cursor-pointer"
                onClick={handleAddCart}
              >
                <ShoppingCartOutlinedIcon/>
                <p>Thêm vào giỏ hàng</p>
              </a>
          </div>
      </div>
    </div>
  );
}

export default DetailProduct;
