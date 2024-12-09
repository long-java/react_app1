import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Stack } from '@mui/material';
import ValidateUserName from "../Validate/ValidateUserName";

function App() {
  // Khởi tạo react-hook-form và lấy control
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit' // Đảm bảo chỉ validate khi submit
  });

  // Hàm xử lý khi form được submit
  const onSubmit = (data) => {
    console.log(data);
  };

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
          rules={{ required: 'Email is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </Stack>
  );
}

export default App;
