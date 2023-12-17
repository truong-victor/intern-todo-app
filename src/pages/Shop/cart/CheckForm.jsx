
import CoreInputRichText from "../../../@core/components/inputs/CoreInputRichText";
import { useState } from "react";
import { Box} from "@mui/material";
 import {Grid} from "@mui/material";
import {TextField} from "@mui/material";
import {Typography} from "@mui/material";
import {FormControlLabel} from "@mui/material"
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CartIteam } from "./CartIteam";
function CheckForm({cartData }){
    const {totalAmount} = CartIteam();
    console.log('============= cartData',cartData)
    const [loading, setLoading] = useState(true);
    const schema = yup.object().shape({
      firstName: yup.string().min(2).max(7).required(),
      lastName: yup.string().min(2).max(7).required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).max(20).required(),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    }); 
    return (
      <div className="bg-white  w-[100%] m-auto mt-9">
        <h2 className="font-[26px] font-bold text-blue-500">
          {" "}
          THÔNG TIN KHÁCH HÀNG
        </h2>
        <Box
          component="form"
          //   onSubmit={handleSubmit(handleDataRegister)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("name")}
                fullWidth
                id="name"
                label="Họ tên"
                name="name"
              />
              <Typography
                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
              >
                {errors?.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("phoneNumber")}
                name="phoneNumber"
                fullWidth
                id="phoneNumber"
                label="Số điện thoại"
              />
              <Typography
                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
              >
                {errors?.firstName?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("email")}
                fullWidth
                id="email"
                label="Email"
                name="email"
              />
              <Typography
                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
              >
                {errors?.lastName?.message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("address")}
                fullWidth
                id="address"
                label="Địa chỉ"
                name="address"
              />
              <Typography
                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
              >
                {errors?.email?.message}
              </Typography>
            </Grid>

            {/* <Grid item xs={12} sm={6} fullWidth>
              <UnstyledSelectRichOptions />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UnstyledSelectRichOptions />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                {...register("password")}
                fullWidth
                name="password"
                label="Ghi chú"
                type="password"
                id="password"
              />
              <Typography
                sx={{ color: "red", fontSize: "14px", marginTop: "10px" }}
              >
                {errors?.password?.message}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Yêu cầu xuất hóa đơn công ty"
              />
            </Grid>
          </Grid>
          <h2 className="font-[26px] font-bold text-blue-500">
            PHƯƠNG THỨC THANH TOÁN
          </h2>
          <label htmlFor="radio" className="">
            <input id="radio" type="radio" /> Thanh toán khi nhận hàng
          </label>
          <h2 className="font-[26px] font-bold text-blue-500 mt-3">
            TỔNG TIỀN
          </h2>
          <div className="flex justify-between ">
            <h3>Tổng cộng</h3>
            <h2 className="font-normal text-[19px]">{CartIteam.totalAmount}</h2>
          </div>
          <div className="flex justify-between ">
            <h3>Thành tiền</h3>
            <h2 className="font-medium text-[22px] text-red-600">{totalAmount}</h2>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
          >
            ĐẶT HÀNG
          </Button>
          {/* <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </div>
    );
}
export default CheckForm