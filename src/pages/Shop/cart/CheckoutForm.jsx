import SelectCity from "./components/SelectCity";
import SelectDistrict from "./components/SelectDistrict";
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
import { useForm, Controller } from "react-hook-form";
import { useCartContext } from "../../../@core/provider/CartProvider";
import CoreInput from "../../../@core/components/inputs/CoreInput";
function CheckoutForm(){
    const {totalPrice} = useCartContext()
    const [loading, setLoading] = useState(true);
    const schema = yup.object().shape({
      name: yup.string().required(),
      phoneNumber: yup.string().required(),
      email: yup.string().email().required(),
      address: yup.string().required(),
      selectCity: yup.string().required(),
      selectDistrict: yup.string().required(),
      note: yup.string(),

      
    });
    const {
      control,
      watch,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
      defaultValues: {
        selectCity: '',
        selectDistrict: '',
      }
    }); 

    console.log("current form value", watch())

    const onSubmit =  handleSubmit((data)=>{
      alert('tes')
      console.log(data)
    })

    return (
      <div className="bg-white p-4 w-[80%] m-auto">
        <h2 className="font-[26px] font-bold text-blue-500">
          {" "}
          THÔNG TIN KHÁCH HÀNG
        </h2>
        <Box
          component="form"
            onSubmit={onSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CoreInput
                control={control}
                name="name"
                placeholder="Điền tên của bạn"
                label="Họ và tên"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CoreInput
                control={control}
                name="phoneNumber"
                placeholder="Điện thoại"
                label="Điện thoại"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CoreInput
                control={control}
                name="email"
                placeholder="Email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <CoreInput
                control={control}
                name="address"
                placeholder="Địa chỉ"
                label="Địa chỉ"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectCity name="selectCity"
                control={control}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectDistrict name="selectDistrict"
                control={control} provinceId={watch("selectCity")}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("note")}
                fullWidth
                name="note"
                label="Ghi chu"
                type="note"
                id="note"
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
            <h2 className="font-normal text-[19px]">{totalPrice.toLocaleString()}</h2>
          </div>
          <div className="flex justify-between ">
            <h3>Thành tiền</h3>
            <h2 className="font-medium text-[22px] text-red-600">{totalPrice.toLocaleString()}</h2>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
          >
            ĐẶT HÀNG
          </Button>
        </Box>
      </div>
    );
}
export default CheckoutForm