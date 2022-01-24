import './App.css';
import Main from './Main';
import SideBar from './SideBar';
import axios from './axios';
import { useEffect, useState } from 'react';

function App() {
  const [classDetails, setClassDetails] = useState([])

  useEffect(() => {
    const fetchClassDetails = async() => await axios.get('/sync').then(response => {
      setClassDetails(response.data)
    });

    fetchClassDetails();
  }, [])

  console.log(classDetails)

  return (
    <div className="app">
      <div className='app_body'>
        <SideBar />
        <Main classDetails = {classDetails} />
      </div>
    </div>
  );
}

export default App;
