import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = ({data, onDetailClick}) => {
  return (
    <Card sx={{margin: '10px'}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={data.userName} subheader="September 14, 2016"
            onClick={onDetailClick}
        />
        <CardMedia
            component="img"
            height="20%"
            image={data.img}
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.title}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Post