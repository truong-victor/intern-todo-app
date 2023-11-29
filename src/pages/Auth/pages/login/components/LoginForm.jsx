import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Yup from "../../../../../@core/helper/Yup";
import CoreInput from "../../../../../@core/components/inputs/CoreInput";
import { LoadingButton } from "@mui/lab";
import { authService } from "../../../services/authService";
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router";
import { Result } from "postcss";
import { useAuthContext } from "../../../../../@core/provider/AuthProvider";
export const LoginForm = () => { 
  const authContext = useAuthContext(); 
  
    const navigate = useNavigate() ; 
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

  const onSubmit = handleSubmit(async (data) => {
    console.log("🚀 ~ file: LoginForm.jsx:24 ~ onSubmit ~ data:", data);
    try {
      // Gọi hàm đăng nhập từ authService
      const result =  await authService.login(data);
      const accessToken = result.data.accessToken
      authContext.login(accessToken) ; 
      console.log(result);
      toast.success("Đăng nhập thành công");
      authContext.login();
      navigate("/admin/listproduct")
     
      // Redirect hoặc thực hiện các hành động cần thiết sau khi đăng nhập thành công
    } catch (err) {
      toast.error("Đăng nhập thất bại");
    }
  });

  return (
    <form
      className="flex flex-col gap-4 py-4 bg-gray-50 rounded-lg shadow-lg p-6"
      onSubmit={onSubmit}
    >
      <h1 className="font-bold text-xl text-blue-500 text-center">Đăng nhập</h1>
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
