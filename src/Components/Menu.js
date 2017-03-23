import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Options = ({ menuItems, ...props }) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    {menuItems}
  </IconMenu>
)

Options.muiName = 'IconMenu';

export const Menu = ({ title, menuItems }) => (
  <AppBar
    title={title}
    iconElementRight={<Options menuItems={menuItems} />}
  />
)

