import React, {useContext} from 'react'
import './sidebar.scss'
// import DashboardIcon from '@mui/icons-material/Dashboardicon';
import { AccountCircleOutlined, CreditCardOutlined, DashboardOutlined, ExitToAppOutlined, InsertChart, LocalShipping, Notifications, PersonOutline, PsychologyAltOutlined, SettingsApplicationsOutlined, SettingsSystemDaydreamOutlined, StoreOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {
  const { dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration:"none" }}>
          <span className='logo'>WAliyy</span>        
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <li>
            <DashboardOutlined className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Users</p>
          <Link to="/user" style={{ textDecoration:"none" }}>
            <li>
              <PersonOutline className="icon" />
              <span>Users</span>
            </li>       
          </Link>
          <Link to="/hotels" style={{ textDecoration:"none" }}>
            <li>
              <StoreOutlined className="icon" />
              <span>Hotels</span>
            </li>       
          </Link>
          <Link to="/rooms" style={{ textDecoration:"none" }}>
            <li>
              <CreditCardOutlined className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyAltOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlined className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>profile</span>
          </li>
          <li>
            <ExitToAppOutlined className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOptions" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
