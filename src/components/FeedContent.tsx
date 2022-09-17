import React from 'react';
import { Box, Typography } from '@mui/material';
import './feedcontent.css';
import Videos from './Videos';
import useFetch from '../hooks/useFetch';

type Props = {
  selectedCategory: string;
  tag: string;
};

const FeedContent: React.FC<Props> = (props) => {
  const { data, loading, error } = useFetch(
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${props.tag}&maxResults=50`,
  );
  if (loading) {
    return <></>;
  }
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {props.selectedCategory}
        <span className="feed-contnet__Title__span"> videos</span>
      </Typography>
      {data && <Videos videos={data.items} />}
    </Box>
  );
};

export default FeedContent;
