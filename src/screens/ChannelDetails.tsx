import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import ChannelCard from '../components/ChannelCard';
import Videos from '../components/Videos';
import useFetch from '../hooks/useFetch';
import { IChannel } from '../types';

const ChannelDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`);
  const { data: videoData, loading: loadingV } = useFetch(
    `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
  );
  if (loading || loadingV) {
    return <></>;
  }
  const channelData: IChannel = data.items[0];
  return (
    <Box minHeight="95vh">
      <Box className="banner__cover-background">
        <img src={channelData.brandingSettings.image.bannerExternalUrl} />
      </Box>
      <Box sx={{ marginTop: { xs: 0, md: -10 }, height: '17vw' }}>
        <ChannelCard details channel={channelData} />
      </Box>
      <Box sx={{ mx: { sm: '100px' } }} p={2} mt={6}>
        <Videos videos={videoData.items} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
