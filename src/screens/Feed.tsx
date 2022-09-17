import { Stack } from '@mui/material';
import { useState } from 'react';
import FeedContent from '../components/FeedContent';
import Sidebar from '../components/Sidebar';
import { categories } from '../constants/categories';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const categoryTag = categories.find((c) => c.name === selectedCategory);
  function selectedCategoryHandler(category: string) {
    setSelectedCategory(category);
  }
  if (!categoryTag) {
    return <></>;
  }
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Sidebar selectedCategory={selectedCategory} onSelect={selectedCategoryHandler} />
      <FeedContent tag={categoryTag?.tag} selectedCategory={selectedCategory} />
    </Stack>
  );
};

export default Feed;
