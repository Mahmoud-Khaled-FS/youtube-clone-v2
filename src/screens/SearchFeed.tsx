import { Box, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useFetch from '../hooks/useFetch';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { data, loading } = useFetch(
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}&maxResults=50`,
  );
  if (loading) {
    return <></>;
  }
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#f31502' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={data.items} />
    </Box>
  );
};

export default SearchFeed;
