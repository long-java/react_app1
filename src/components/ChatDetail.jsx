import {
    Box,
    Button,
    CardMedia,
    Grid2,
    Modal,
    styled,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const ChatDetail = ({ data, onClose }) => {
    return (
      <>
        <StyleModal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={!!data} // Modal sẽ hiển thị nếu `data` tồn tại
          onClose={onClose} // Đóng modal khi người dùng bấm ngoài vùng modal hoặc gọi hàm
        >
          <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">
              Detail chat popup
            </Typography>

            <Typography variant="h6">
                {data.userName}
            </Typography>

            <Typography variant="label">
                {data.message}
            </Typography>

            <Grid2 container justifyContent="flex-end" mt={20}>
                <Button variant="contained" onClick={onClose}>Close</Button>
            </Grid2>
            

          </Box>
        </StyleModal>
      </>
    );
  };
  
  export default ChatDetail;
  