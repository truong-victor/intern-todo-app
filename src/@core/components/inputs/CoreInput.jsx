import { Box, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

const CoreInput = (props) => {
  const {
    className,
    control,
    name,
    label = "",
    placeholder,
    required = false,
    readOnly = false,
    type = "text",
    InputLabelProps = {},
    InputProps = {},
    inputProps = {},
    multiline,
    helperText,

    ...restProps
  } = props;

  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  let transform = {
    input: (value) => value,
    output: (e) => e,
  };

  if (type === "number") {
    transform = {
      input: (value) => value,
      output: (e) => {
        // const output = e.target.value
        // return Number.isNaN(output) ? 0 : Number(output)
        const onlyNums = e.target.value.replace(/[^0-9+-.]/g, "");
        return Number(onlyNums);
      },
    };
  }
  return (
    <Box className={className}>
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        onChange={(e) => onChange(transform.output(e))}
        onBlur={onBlur}
        value={transform.input(value)}
        inputRef={ref}
        type={type}
        multiline={Boolean(multiline)}
        error={!!error}
        helperText={error && error.message}
        InputLabelProps={{
          shrink: placeholder ? true : undefined,
          required,
          ...InputLabelProps,
        }}
        inputProps={{
          readOnly,
          ...inputProps,
        }}
        InputProps={{
          ...InputProps,
        }}
        {...restProps}
      />
      {helperText && (
        <FormHelperText className="italic text-8">{helperText}</FormHelperText>
      )}
    </Box>
  );
};

export default React.memo(CoreInput);
