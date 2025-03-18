import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
  'Download TXT with Timestamp',
  'Download TXT without Timestamp',
  'Download SRT'
];

const ITEM_HEIGHT = 48;

interface LongMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

export default function LongMenu({ anchorEl, open, handleClose }: LongMenuProps) {
  return (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'custom-button',
      }}
      slotProps={{
        paper: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '35ch',
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
}
