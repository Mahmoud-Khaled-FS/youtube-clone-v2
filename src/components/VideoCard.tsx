import { AspectRatio, CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import IVideos from '../types';

type Props = {
  video: IVideos;
};

const VideoCard: React.FC<Props> = (props) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia image={props.video.snippet.thumbnails.high?.url} component="img" alt={props.video.snippet.title} />
      <CardContent sx={{ backgroundColor: '#121212', height: '100%' }}>
        <Link to={'/video/' + props.video.id.videoId}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff" fontSize={14}>
            {props.video.snippet.title.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={'/chanel/' + props.video.snippet.channelId}>
          <Typography variant="subtitle2" color="#c2c2c2" fontSize={12}>
            {props.video.snippet.channelTitle.slice(0, 50)}
            <CheckCircle sx={{ fontSize: 14, color: '#ccc', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
// sx={{ width: { md: '285px', xs: '100%' }, boxShadow: 'none', borderRadius: 'none' }}
