import './App.css';
import Main from './Main';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
