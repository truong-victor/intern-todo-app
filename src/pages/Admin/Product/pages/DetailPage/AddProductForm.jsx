import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Yup from "../../../../../@core/helper/Yup";
import CoreInput from "../../../../../@core/components/inputs/CoreInput";
import { LoadingButton } from "@mui/lab";
import { authService } from "../../../services/authService";
import { toast } from "react-toastify";
import CoreUploadFile from "../../../../../@core/components/inputs/CoreUploadFile";
export const RegisterForm = (props) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
    resolver: yupResolver(
      Yup.object({
        name: Yup.string().required().max(100),
        salePrice: Yup.string().required(),
        price: Yup.string().required().min(6),
        passwordConfirm: Yup.string()
          .required()
          .oneOf(
            [Yup.ref("password"), null],
            "Mật khẩu xác nhận không phù hợp"
          ),
      })
    ),
  });
  console.log(watch());
  const onSubmit = handleSubmit(async (data) => {
    console.log("🚀 ~ file: RegisterForm.jsx:24 ~ onSubmit ~ data:", data);
    try {
      await authService.register(data);
      toast.success("Đăng ký thành công");
    } catch (err) {
      toast.error("Đăng ký thất bại");
    }
  });

  return (
    <form
      className="flex flex-col gap-4 py-4 bg-gray-50 rounded-lg shadow-lg p-6 "
      onSubmit={onSubmit}
    >
      <h1 className="font-bold text-xl text-blue-500 text-center">Đăng ký</h1>
      <CoreUploadFile control={control} name="avatar" />
      <CoreInput
        control={control}
        name="name"
        placeholder="Điền tên của bạn"
        label="Họ và tên"
      />
      <CoreInput
        control={control}
        name="salePrice"
        placeholder="Sale Price"
        label="Sale Price"
      />
      <CoreInput
        control={control}
        name="price"
        placeholder="Price"
        label="Price"
        type="text"
      />
      <CoreInput
        control={control}
        name=""
        placeholder="Xác nhận mật khẩu"
        label="Xác nhận mật khẩu"
        type="password"
      />
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
