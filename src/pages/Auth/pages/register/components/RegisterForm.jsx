import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
        passwordConfirm: Yup.string()
          .required()
          .oneOf(
            [Yup.ref("password"), null],
            "Mật khẩu xác nhận không phù hợp"
          ),
      })
    ),
  });
const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    try {
      await authService.register(data);
      toast.success("Đăng ký thành công");
      navigate('/login')

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
      {/* <CoreUploadFile control={control} name="avatar" /> */}
      <CoreInput
        control={control}
        name="name"
        placeholder="Điền tên của bạn"
        label="Họ và tên"
        type="number"
      />
      <CoreInput
        control={control}
        name="email"
        placeholder="Điền Email của bạn"
        label="Email"
      />
      <CoreInput
        control={control}
        name="password"
        placeholder="Mật khẩu"
        label="Mật khẩu"
        type="password"
      />
      <CoreInput
        control={control}
        name="passwordConfirm"
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
