import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import Videos from '../components/Videos';
import useFetch from '../hooks/useFetch';

const VideoDetail = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${id}`);
  const { data: suggestion, loading: suggestionLoading } = useFetch(
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&type=video`,
  );
  if (loading || suggestionLoading) {
    return <></>;
  }
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {data.items[0].snippet.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={'/channel/' + data.items[0].snippet.channelId}>
                <Typography variant="h6" color="#d2d2d2">
                  {data.items[0].snippet.channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(data.items[0].statistics.viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(data.items[0].statistics.likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box width={{ md: '300px' }} px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={suggestion.items} column />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
