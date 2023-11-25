import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Yup from "../../../../../@core/helper/Yup";
import CoreInput from "../../../../../@core/components/inputs/CoreInput";
import { LoadingButton } from "@mui/lab";
import { authService } from "../../../../Auth/services/authService";
import { toast } from "react-toastify";
import CoreUploadFile from "../../../../../@core/components/inputs/CoreUploadFile";
import CoreMultipleUploadFile from "../../../../../@core/components/inputs/CoreMultipleUploadFile";
import Image from "mui-image";
import CoreInputRichText from "../../../../../@core/components/inputs/CoreInputRichText";
import { productService } from "../../services/productService";
export const AddProductForm = (props) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      listImage: [],
    },
    resolver: yupResolver(
      Yup.object({
        name: Yup.string().required().max(100),
        salePrice: Yup.number().required(),
        price: Yup.number().required(),
        avatar: Yup.string().required(),
        listImage: Yup.array().required(),
        description: Yup.string().required(),
      })
    ),
  });

  console.log("w", watch());
  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
    const result = await productService.save(data);
    toast.success("Them thanh cong")
  });
  return (
    <form
      className="w-full flex flex-col gap-4 py-4 bg-gray-50 rounded-lg shadow-lg p-6  "
      onSubmit={onSubmit}
    >
      <h1 className="font-bold text-xl text-blue-500 text-center">
        Thêm sản phẩm
      </h1>
      <CoreInput
        control={control}
        name="name"
        placeholder="Điền tên sản phẩm"
        label="Tên sản phẩm"
      />
      <CoreInput
        control={control}
        name="salePrice"
        placeholder="Sale Price"
        label="Sale Price"
        type='number'
      />
      <CoreInput
        control={control}
        name="price"
        placeholder="Price"
        label="Price"
        type="number"
      />
      <CoreUploadFile
        control={control}
        name="avatar"
        placeholder="Ảnh sản  phẩm"
        label="Anh san pham"
        type="file"
      />

      <CoreMultipleUploadFile
        control={control}
        name="listImage"
        placeholder="List Image"
        label="List Image"
        type="file"
      />
      <CoreInputRichText control={control} name="description" />

      <LoadingButton
        disabled={!isDirty}
        loading={isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
      >
        Đăng ký
      </LoadingButton>
    </form>
  );
};

export default AddProductForm;
