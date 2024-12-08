import { Alert, Avatar, AvatarGroup, Box, Button, ImageList, ImageListItem, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ChatDetail from './ChatDetail';
import apiPost from '../api/apiPost'; // Import file apiPost
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const Rightbar = () => {
  const [selectedChat, setSelectedChat] = useState(null);


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    }
  ];


  const itemChats = [
    {
      avatar: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/269750460_239983194941936_769711078508941360_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zIxr8pwUxQgQ7kNvgFd-eHy&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=ASqC5_ncH88t2BelY68VXGh&oh=00_AYDxnua6QvfI2RBuxcVickB83jvn2zuugWr_4orzMlLEtg&oe=675AFE12',
      userName: 'Hong Nhung',
      message: 'Di an gi ko á ?',
    },
    {
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      userName: 'Van Long',
      message: 'Danh tran lol ko ban oi ?',
    },    
    {
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
      userName: 'Oui Oui',
      message: 'Con cho nay danh nhau ko ?',
    },
  ];

  const [posts, setPosts] = useState([]);
  const [inputPost, setInputPost] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [inputTitleUpdate, setInputTitleUpdate] = useState();

  const [alertOpen, setAlertOpen] = useState(false);


  const handleInputPostChange = (e) => {
    setInputPost(e.target.value);
  };

  // post post to API
  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (inputPost.trim()) {
      try {
        // Gửi bài viết mới đến API
        var response = await apiPost.postPost(inputPost);
        console.log('thanh cong:', response.data);

        // Gọi lại API để lấy danh sách bài viết mới nhất
        const postsResponse = await apiPost.getPosts();
        setPosts(postsResponse.data); // Cập nhật lại state với dữ liệu mới

        // Reset input field
        setInputPost('');

        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 1000);

      } catch (error) {
        console.error('Có lỗi khi gửi dữ liệu:', error);
      }
    } else {
      console.log('Vui lòng nhập tiêu đề!');
    }
  };

  // get Posts from API
  useEffect(() => {
    apiPost.getPosts() // Gọi phương thức getPosts từ apiPost
    .then(response => {
      setPosts(response.data); // Lưu dữ liệu vào state
    })
    .catch(error => {
      console.error('Có lỗi khi lấy dữ liệu bài viết!', error);
    });
  }, []);

  // Delete post
  const handleDelete = async (id, e) => {
    try {
      // Gửi bài viết mới đến API
      var response = await apiPost.deletePost(id);
      console.log('Delete successfully:', response.data);

      // Gọi lại API để lấy danh sách bài viết mới nhất
      const postsResponse = await apiPost.getPosts();
      setPosts(postsResponse.data); // Cập nhật lại state với dữ liệu mới

      // Reset input field
      setInputPost('');

      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 1000);

    } catch (error) {
      console.error('Có lỗi khi gửi dữ liệu:', error);
    }
  };

  // Update post
  const handleUpdate = async (id, e) => {
    if (inputTitleUpdate.trim()) {
      try {
        // Gửi bài viết mới đến API
        var response = await apiPost.putPost(id, inputTitleUpdate);
        console.log('thanh cong:', response.data);

        // Gọi lại API để lấy danh sách bài viết mới nhất
        const postsResponse = await apiPost.getPosts();
        setPosts(postsResponse.data); // Cập nhật lại state với dữ liệu mới

        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 1000);
        
      } catch (error) {
        console.error('Có lỗi khi gửi dữ liệu:', error);
      }
    } else {
      console.log('Vui lòng nhập tiêu đề để cập nhật!');
    }
  };

  return (
    <Box flex={2} p={2} sx={{display: {xs: 'none', sm: 'block'}}}>

        {alertOpen && (
          <Alert variant="filled" severity="success">
            Successfully
          </Alert>
        )}

        <Box position='fixed' width={300} mt={2} mb={2}>

          <Typography variant='h6' fontWeight={100}>Friends Online</Typography>
          <AvatarGroup max={5}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>

          <Typography variant='h6' fontWeight={100}>Latest Photos</Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>


          <Typography variant='h6' fontWeight={100}>Latest Conversation</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {itemChats.map((chat) => (
              <ListItem key={chat.userName} alignItems="flex-start" onClick={() => setSelectedChat(chat)} >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={chat.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.userName}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" variant="body2" sx={{ color: 'text.primary', display: 'inline' }}>
                        {chat.message}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
          
          {/* chat detail */}
          {
            selectedChat && (
              <ChatDetail
                data={selectedChat}
                onClose={() => setSelectedChat(null)}
              />
            )
          }


          {/* from API */}
          <Stack spacing={2}>
            {posts.map((postFromAPI) => (
              <Box key={postFromAPI.id}>

                {editingId === postFromAPI.id ? (
                  <TextField
                    sx={{ width: "80%" }}
                    id="inputTitleUpdate"
                    multiline
                    rows={1}
                    placeholder="What ?"
                    variant="standard"
                    value={inputTitleUpdate}
                    onChange={(e) => setInputTitleUpdate(e.target.value)}
                  />

                ) : (

                  <Typography 
                    variant="h7"
                    key={postFromAPI.id}
                    onClick={() => {
                      setEditingId(postFromAPI.id); // Bắt đầu chỉnh sửa bài viết
                      setInputTitleUpdate(postFromAPI.title); // Lấy giá trị hiện tại
                    }}
                  >
                    {postFromAPI.title}
                  </Typography>

                )}

                <SaveIcon onClick={() => handleUpdate(postFromAPI.id)}></SaveIcon>
                <DeleteIcon onClick={() => handleDelete(postFromAPI.id)}></DeleteIcon>
              </Box>
            ))}
            <TextField
              sx={{ width: "100%" }}
              id="inputPost"
              multiline
              rows={1}
              placeholder="What ?"
              variant="standard"
              value={inputPost}
              onChange={handleInputPostChange}
            />
            <Button variant='contained' onClick={handleSubmitPost}>Submit</Button>
          </Stack>

        </Box>
    </Box>
  )
}

export default Rightbar