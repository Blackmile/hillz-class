import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ChatIcon from '@mui/icons-material/Chat';
import './SideBar.css'

function SideBar() {
  return (
      <div className='sidebar'>
          <div className='sidebar_header'>
              <h4> Class room </h4>
          </div>

          <div className='sidebar_body'>
              <div className='sidebar_bodyContainer'>
                <AccountCircleIcon fontSize='large' />
                <div className='sidebar_bodyDetails'>
                    <PersonIcon fontSize='small' /><p>profile details</p>
                    <AssignmentIcon fontSize='small' /><p>Home task</p>
                    <EventAvailableIcon /><p>schedule</p>
                    <ChatIcon /><p>chat</p>
                </div>
              </div>
          </div>

          <div className='sidebar_footer'>
              this is a quote
          </div>
      </div>
  );
}

export default SideBar;
