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
                    <div className='details'>
                        <PersonIcon fontSize='small'/><span>My profile</span>
                    </div>
                    <div className='details'>
                        <AssignmentIcon fontSize='small' /><span>Home task</span>
                    </div>
                    <div className='details'>
                        <EventAvailableIcon /><span>schedule</span>
                    </div>
                    <div className='details'>
                        <ChatIcon /><span>chat</span>
                    </div>
                </div>
              </div>
          </div>

          <div className='sidebar_footer'>
              <p>this is a qutoe ypu shouldn't forget</p>
          </div>
      </div>
  );
}

export default SideBar;
