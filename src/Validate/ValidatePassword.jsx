// ValidateUserName.js
import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";
import PropTypes from 'prop-types'; // Import PropTypes

const ValidatePassword = ({ control, id }) => {
  return (
    <Controller
      name="password" // Tên trường dữ liệu
      control={control} // Truyền control từ form
      defaultValue="" // Giá trị mặc định
      render={({ field, fieldState }) => (
        <FormControl fullWidth>
          <TextField
            {...field} // Truyền props từ field vào TextField
            label="Password"
            variant="outlined"
            fullWidth
            error={!!fieldState?.error} // Nếu có lỗi, hiển thị thông báo
            helperText={fieldState?.error?.message} // Hiển thị thông báo lỗi
            id={id}
          />
        </FormControl>
      )}
    />
  );
};

// Định nghĩa propTypes
ValidatePassword.propTypes = {
  control: PropTypes.object.isRequired, // Kiểu dữ liệu của prop `control` là object và bắt buộc phải có
  id: PropTypes.string.isRequired, // Kiểu dữ liệu của prop `id` là string và bắt buộc phải có
};

export default ValidatePassword;
