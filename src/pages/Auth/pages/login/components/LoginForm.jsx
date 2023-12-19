import CoreInput from "../../../../../@core/components/inputs/CoreInput";
import { authService } from "../../../services/authService";
import { useAuthContext } from "../../../../../@core/provider/AuthProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Yup from "../../../../../@core/helper/Yup";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

// import { LoginService } from "../LoginService";
import { useNavigate } from "react-router-dom";
export const LoginForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: "onTouched",
    defaultValues: {},
    resolver: yupResolver(
      Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      })
    ),
  });

  const navigate = useNavigate();
  const { setToken, login } = useAuthContext();
  const onSubmit = handleSubmit(async (data) => {
    const response = await authService.login(data);
    console.log(response)
    sessionStorage.setItem("accessToken", response?.data?.accessToken);
    await login();
    // navigate('/admin/product/:id')
  });

  return (
    <form
      className="flex flex-col gap-4 py-4 bg-gray-50 rounded-lg shadow-lg p-6 "
      onSubmit={onSubmit}
    >
      <h1 className="font-bold text-xl text-blue-500 text-center">Đăng Nhập</h1>
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
      <LoadingButton
        disabled={!isDirty}
        loading={isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
      >
        Đăng nhập
      </LoadingButton>
    </form>
  );
};