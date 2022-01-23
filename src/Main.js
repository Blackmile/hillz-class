import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Main.css'
import { Avatar, AvatarGroup } from '@mui/material';
import ClassDetails from './ClassDetails';

function Main() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();

  return (
      <div className='main'>
          <div className='main_header'>
            <div className='date'>
              <span>{new Date().toDateString()}</span>
            </div>
            <div className='day'>
              <span>{days[d.getDay()]}</span>
            </div>
            <div className='main_headerRight'>
              <div className='header_search'>
                <SearchOutlinedIcon />
                <input placeholder='search' type='text' />
              </div>
              <AvatarGroup className="avatar" max={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar  alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
            </div>
          </div>

          <div className='main_body'>
            <div className='timer'>
              <span>9:00 - 9:45</span>
            </div>
            <div className='class'>
              <ClassDetails />
            </div>
          </div>

          <div className='main_footer'>
            this is the foooter
          </div>
      </div>
  );
}

export default Main;
