import React from 'react'


export const Header = () => (
  <Menu title='Kanban'
    menuItems={[
      <MenuItem primaryText='Add Column' onTouchTap={() => createColumn('hello')}/>,
      <MenuItem primaryText='AddCard'/>
    ]}
  />
)
