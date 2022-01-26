import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Main.css'
import { Avatar, AvatarGroup } from '@mui/material';

function Main({ classDetails }) {
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
                <AvatarGroup className="avatar" max={3}>
                  {classDetails.map((classDetail) => (
                    <Avatar alt={classDetail.userName} src={classDetail.userImg} />
                  ))}
                </AvatarGroup>
            </div>
          </div>

          <div className='main_body'>
            {classDetails.map((classDetail) => (
              <div className='class'>
                <div className='timer'>
                  <span>{classDetail.timeStart} <hr /> {classDetail.timeStop}</span>
                </div>

                <div className='class_details'>
                  <div className='class_details_info'>
                      <Avatar src={classDetail.userImg} />
                      <p> {classDetail.userName} </p>
                  </div>
  
                  <div className='class_details_content'>
                      <h3> {classDetail.subject} </h3>
                      <p> {classDetail.topic} </p>
                  </div>
                  <div className='btn'>
                    <button type='submit'> start class</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className='main_footer'>
            this is the foooter
          </div>
      </div>
  );
}

export default Main;
