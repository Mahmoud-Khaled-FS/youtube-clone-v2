import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  channel: any;
  details?: boolean;
};

const ChannelCard: React.FC<Props> = (props) => {
  return (
    <Box
      zIndex={10}
      position="relative"
      sx={{ boxShadow: 'none', borderRadius: '20px', width: '100%', height: '100%' }}
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      <Link to={`/channel/${props.channel.id.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={props.channel.snippet.thumbnails.high?.url}
            sx={{
              borderRadius: '50%',
              // height: '180px',
              height: props.details ? { xs: '90px', md: '180px' } : '180px',
              width: props.details ? { xs: '90px', md: '180px' } : '180px',
              mb: 2,
              mx: 'auto',
            }}
          />
          <Typography variant="h6" fontWeight="bold" color="#fff" fontSize={14}>
            {props.channel.snippet.title.slice(0, 50)}
            <CheckCircle sx={{ fontSize: 16, color: '#ccc', ml: '5px' }} />
          </Typography>
          {props.channel.statistics?.subscriberCount && (
            <Typography variant="subtitle2" color="#b2b2b2" fontSize={14}>
              {props.channel.statistics.subscriberCount} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
