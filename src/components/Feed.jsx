import React, { useState } from 'react'
import Post from './Post'
import { Box } from '@mui/material'
import PostDetail from './PostDetail';

const posts = [
  {
    img: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/269750460_239983194941936_769711078508941360_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zIxr8pwUxQgQ7kNvgFd-eHy&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=ASqC5_ncH88t2BelY68VXGh&oh=00_AYDxnua6QvfI2RBuxcVickB83jvn2zuugWr_4orzMlLEtg&oe=675AFE12',
    title: 'This is title of Thi Miu',
    userName: 'Thi Miu'
  },
  {
    img: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/458464091_837538311853085_6294705691083192487_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zZKARAPyqJ8Q7kNvgGOWl9a&_nc_zt=24&_nc_ht=scontent.fdad1-1.fna&_nc_gid=AV9XyVA_JncwrY6f6QbwICO&oh=00_AYA1CcjTTIcwCfU3T9PM6wmO1dLHfocEZf3B4jAJfSKitg&oe=675B21BF',
    title: 'This is title of Hong Nhung',
    userName: 'Hong Nhung'
  },
  {
    img: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/70689962_1352798988229973_1933319660745261056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=S2K0RE7A2p8Q7kNvgGL8PoQ&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=A3cl-K1ZxBSB4NC7KxDZKEr&oh=00_AYAWDIeHRNrq-j_dGIi5PwB81JOFxAvln50mbSVvoGo9DQ&oe=677CA590',
    title: 'This is title of Tien Long',
    userName: 'Tien Long'
  },
  {
    img: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/457231111_831582432448673_5541878741870804886_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=m6oqezoiZDkQ7kNvgEpJe4B&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=AiEE96m9qTE2mFpAqNgnkAQ&oh=00_AYDev8UHmw4FBzDF_JyvCL_7_wMDuWEDKGMmKOPvBAFSww&oe=675B1424',
    title: 'This is title of Thi Miu and Thuy Mit',
    userName: 'Thi Miu and Thuy Mit'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'This is title of Tien Long1',
    userName: 'Tien Long1'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'This is title of Tien Long2',
    userName: 'Tien Long2'
  }
];


const Feed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Box flex='4' p={2}>
      {posts.map((item) => (
        <Post key={item.title} data={item} onDetailClick={() => setSelectedPost(item)}></Post>
      ))}

      {
        selectedPost && (
          <PostDetail
            data={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )
      }

    </Box>
  )
}

export default Feed