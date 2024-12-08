import {
    Box,
    CardMedia,
    Modal,
    styled,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import AddIcon from "@mui/icons-material/Add";
  
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const PostDetail = ({ data, onClose }) => {
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
              Detail post popup
            </Typography>

            <Typography variant="label">
                {data.title}
            </Typography>

            <CardMedia
                component="img"
                height="80%"
                image={data.img}
                alt="Paella dish"
            />

            <button onClick={onClose}>Close</button>

          </Box>
        </StyleModal>
      </>
    );
  };
  
  export default PostDetail;
  