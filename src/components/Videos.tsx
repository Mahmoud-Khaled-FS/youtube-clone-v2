import { Grid } from '@mui/material';
import React from 'react';
import IVideo from '../types';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

type Props = {
  videos: IVideo[];
  column?: boolean;
};
const Videos: React.FC<Props> = (props) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={props.column ? 1 : { xs: 4, sm: 6, md: 12, lg: 25, xl: 30 }}>
      {props.videos.map((v) => {
        if (!v.id.videoId && !v.id.channelId) return;
        return (
          <>
            {!props.column && (
              <Grid item xs={4} sm={3} md={4} lg={5} xl={5} key={v.id.videoId}>
                {v.id.videoId && <VideoCard video={v} />}
                {v.id.channelId && <ChannelCard channel={v} />}
              </Grid>
            )}
            {props.column && (
              <Grid item key={v.id.videoId} xs={1}>
                {v.id.videoId && <VideoCard video={v} />}
                {v.id.channelId && <ChannelCard channel={v} />}
              </Grid>
            )}
          </>
        );
      })}
    </Grid>
  );
};

export default Videos;
