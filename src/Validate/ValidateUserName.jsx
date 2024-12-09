// ValidateUserName.js
import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import PropTypes from 'prop-types'; // Import PropTypes

const ValidateUserName = ({ control, id }) => {
  return (
    <Controller
      name="username" // Tên trường dữ liệu
      control={control} // Truyền control từ form
      rules={{ required: "Username is required" }} // Validation
      defaultValue="" // Giá trị mặc định
      render={({ field, fieldState }) => (
        <div>
          <TextField
            {...field} // Truyền props từ field vào TextField
            label="Username"
            variant="outlined"
            fullWidth
            error={!!fieldState?.error} // Nếu có lỗi, hiển thị thông báo
            helperText={fieldState?.error?.message} // Hiển thị thông báo lỗi
            id={id}
          />
        </div>
      )}
    />
  );
};

// Định nghĩa propTypes
ValidateUserName.propTypes = {
  control: PropTypes.object.isRequired, // Kiểu dữ liệu của prop `control` là object và bắt buộc phải có
  id: PropTypes.string.isRequired, // Kiểu dữ liệu của prop `id` là string và bắt buộc phải có
};

export default ValidateUserName;
