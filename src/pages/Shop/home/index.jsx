import ShopLayout from "../../../@core/layout/ShopLayout";
import Slider from "./components/Slider";
import Product from "./components/product/Product";
import CoreInputUpload from "../../../@core/components/inputs/CoreInputUpload";
const Home = (props) => {

  const fileChange = (e) => {
    const file = e.target.files;
    console.log(file);
    if (file === undefined) {
      console.log("Chua chon file");
    } else if (file.type === "image/png" || file.type === "image/jpeg") {
      console.log('Anh khong hop le');
    } else {
      console.log("Sai dinh dang");
    }
  };
  return (
    <ShopLayout>
      <Slider />
      <Product />
      <CoreInputUpload name='upload' type='file' />
    </ShopLayout>
  );
};

export default Home;
