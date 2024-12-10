import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Stack, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import ValidateUserName from "../Validate/ValidateUserName";
import ValidatePassword from "../Validate/ValidatePassword";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {
  // Hàm xử lý khi form được submit
  const onSubmit = (data) => {
    console.log(data);
  };

  // data cho select Level
  const levels = ['Dev1', 'Dev2', 'Dev3', 'Dev4', 'Dev5'];
  const [selectedLevel, setSelectedLevel] = useState("Dev1"); // Giá trị mặc định
  const handleChangeSelectLevel = (e) => {
    setSelectedLevel(e.target.value);
  }

  const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // tạo schema cho Validation
  const validateSchema = Yup.object({
    userName: Yup.string().required('UserName is required from Yup').min(6, 'UserName must be min 6 from Yup'),
    email: Yup.string().required('Email is required from Yup').matches(REGEX_EMAIL, 'Not match REGEX_EMAIL.'),
    password: Yup.string().required('Password is required from Yup').min(6, 'Password must be min 6 from Yup'),
    level: Yup.string().required('Level is required from Yup').oneOf(levels, 'Invalid oneOf from Yub')
  });

  // Khởi tạo react-hook-form và lấy control
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validateSchema),
    mode: 'onSubmit' // Đảm bảo chỉ validate khi submit
  });

  return (
    <Stack spacing={2} width="300px" margin="auto" padding={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* User name */}
        <ValidateUserName 
          control={control}
          id="111"
        />
        
        {/* Sử dụng Controller cho Email */}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            </FormControl>
          )}
        />

        {/* Validation from Yup */}
        <ValidatePassword
          control={control}
          id="test"
        />

        {/* test Select */}
        <FormControl fullWidth>
          <Select
            name='level'
            value={selectedLevel} // Giá trị được điều khiển
            onChange={handleChangeSelectLevel} // Xử lý sự kiện thay đổi
            fullWidth
          >
            {levels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </Stack>
  );
}

export default App;
