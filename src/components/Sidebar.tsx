import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { categories } from '../constants/categories';
import './sidebar.css';

type Props = {
  onSelect: (c: string) => void;
  selectedCategory: string;
};

const Sidebar: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '90vh' },
        backgroundColor: '#212121',
        px: { xs: 0, md: 1 },
        pt: { xs: 0, md: 2 },
      }}
    >
      <Stack direction="row" sx={{ overflowY: 'auto', height: { xs: 50, md: '96%' }, flexDirection: { md: 'column' } }}>
        {categories.map((categorie) => (
          <button
            onClick={() => props.onSelect(categorie.name)}
            key={categorie.name}
            className={`sidebar__button ${props.selectedCategory === categorie.name && 'active'}`}
          >
            <span>{categorie.icon}</span>
            <span>{categorie.name}</span>
          </button>
        ))}
        <Typography className="copyright" variant="body2" sx={{ color: '#717171', mt: 1.5, fontSize: 14 }}>
          Copyright 2022 Redmarching
        </Typography>
      </Stack>
    </Box>
  );
};

export default Sidebar;
