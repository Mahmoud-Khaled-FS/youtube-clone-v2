import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import ChannelDetails from './screens/ChannelDetails';
import Feed from './screens/Feed';
import SearchFeed from './screens/SearchFeed';
import VideoDetail from './screens/VideoDetail';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
