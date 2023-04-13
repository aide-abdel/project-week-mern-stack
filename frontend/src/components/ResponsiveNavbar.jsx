import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';


function ResponsiveNavbar() {
    const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Calculator 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Calculator 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Calculator 3</MenuItem>
      </Menu>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Fitness App
      </Typography>
      <Box sx={{ display: {md: 'block' ,flexGrow:2} }} component="div" >
        <Button color='inherit' onClick={handleMenuClick}>Calculator</Button>
        <Button color="inherit">Exercises</Button>
        <Button color="inherit">Workouts</Button>
        <Button color="inherit">Workout Plans</Button>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} >
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TextField
          id="search-input"
          variant="outlined"
          size="small"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default ResponsiveNavbar