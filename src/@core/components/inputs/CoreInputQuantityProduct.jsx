import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Yup from "../../helper/Yup";

export default function CoreInputQuantityProduct(props) {
  const { max = 0, defaultValue = 1 } = props;
  //   const ref = useRef();

  //   const [value, setValue] = useState(defaultValue);

  //   const handleChange = (type, e) => {
  //     const regexCheckNumberOnly = /^\d+$/;
  //     const currentValue = Number(ref.current.value);

  //     if (type === "increment") {
  //       if (currentValue < max) {
  //         ref.current.value++;
  //       } else {
  //         toast.info(`So luong toi da la: ${max}`);
  //       }
  //     }

  //     if (type === "decrement") {
  //       if (currentValue > 1) {
  //         ref.current.value--;
  //       } else {
  //         toast.warning("ko mua thi cut");
  //       }
  //     }

  //     if (type === "onChange") {
  //       const newValue = e.target.value;

  //       setValue(newValue);
  //     }
  //   };

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(
      Yup.object({
        quantity: Yup.number().integer().min(1).max(max),
      })
    ),
  });

  return (
    <TextField
      className="w-[160px]"
      size="small"
      //   inputRef={ref}
      {...register("quantity")}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {/* <IconButton onClick={() => handleChange("decrement")}>-</IconButton> */}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {/* <IconButton onClick={() => handleChange("increment")}>+</IconButton> */}
          </InputAdornment>
        ),
      }}
    />
  );
}
