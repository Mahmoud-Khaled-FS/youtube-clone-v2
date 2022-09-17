import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import './layout.css';
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', backgroundColor: '#212121', top: 0 }}
      justifyContent="space-between"
      zIndex={9999}
    >
      <Link to="/" className="logo">
        <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="logo" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
