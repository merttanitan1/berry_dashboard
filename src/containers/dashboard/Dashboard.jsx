import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="sidebar">
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem>Chart 1</MenuItem>
            <MenuItem>Chart 2</MenuItem>
          </SubMenu>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Users</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Dashboard
