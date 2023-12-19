import CoreUploadFile from "../../../@core/components/inputs/CoreUploadFile";
import ShopLayout from "../../../@core/layout/ShopLayout";
import ListProductHome from "../../../@core/layout/ShopLayout/ListProduct/listProduct";

const Home = (props) => {


  return (
    <ShopLayout>
        <ListProductHome/>
        {/* <CoreUploadFile/> */}
    </ShopLayout>
  );
};

export default Home;
