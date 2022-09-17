import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import React, { FormEvent, useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const submitSearchHandler = (e: FormEvent) => {
    e.preventDefault();
    if (searchInput) {
      navigate('/search/' + searchInput);
      setSearchInput('');
    }
  };
  return (
    <Paper
      component="form"
      className="searcbar"
      onSubmit={submitSearchHandler}
      sx={{
        borderRadius: 1,
        border: '1px solid #212121',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor: '#121212',
      }}
    >
      <input
        type="text"
        className="input__searcbar"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
