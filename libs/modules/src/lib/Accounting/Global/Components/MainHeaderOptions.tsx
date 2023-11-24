import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  width: 20ch;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

// Define the type/interface for the menu item
interface MenuItem {
  name: string;
  link: string;
}

interface MainHeaderOptionsProps {
  menuItems: MenuItem[]; // Specify the prop type here
}

export default function MainHeaderOptions({
  menuItems,
}: MainHeaderOptionsProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, index) => (
          <StyledLink key={index} to={menuItem.link}>
            <StyledMenuItem>{menuItem.name}</StyledMenuItem>
          </StyledLink>
        ))}
      </StyledMenu>
    </div>
  );
}
