import React from 'react';
import Dialog from 'material-ui/Dialog';

export const Modal = ({ open, onHide, title, actions, children }) => {

  return (
    <Dialog
      title={title}
      actions={actions}
      modal={true}
      open={open}
    >
      {children}
    </Dialog>
  )
}
