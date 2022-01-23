import { Avatar } from '@mui/material';
import './ClassDetails.css';
import React from 'react';

function ClassDetails() {
  return (
      <div className='class_details'>
          <div className='class_details_info'>
              <Avatar />
              <p> Eze stanley</p>
          </div>

          <div className='class_details_content'>
              <h3>Mathematics</h3>
              <p>matrix</p>
          </div>
          <div className='btn'>
            <button type='submit'> start class</button>
          </div>
      </div>
  );
}

export default ClassDetails;
