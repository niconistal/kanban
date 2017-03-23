import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export const Menu = ({ title, onMenuOpen }) => (
  <AppBar
    title={title}
    onLeftIconButtonTouchTap={onMenuOpen}
    />
)

