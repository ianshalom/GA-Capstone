import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Menu</div>
        <button className="sidebar-close">
          <i className="fa fa-times-circle"></i>
        </button>
      </div>
      <div className="inner">
        <ul className="sidebar-menu">
          <li><span className="nav-section-title"></span></li>
          <li className="have-children"><Link to="/" >User</Link>
            <ul>
              <li><Link to="/" >Profile</Link></li>
              <li><Link to="/" >Account</Link></li>
              <li><Link to="/" >Settings</Link></li>
            </ul>
          </li>
          <li className="have-children"><Link to="/" >Messages</Link>
            <ul>
              <li><Link to="/" >Inbox</Link></li>
              <li><Link to="/" >Compose</Link></li>
            </ul>
          </li>
          <li className="have-children"><Link to="/" >Images</Link>
            <ul>
              <li><Link to="/" >Library</Link></li>
              <li><Link to="/" >Upload</Link></li>
            </ul>
          </li>
          <li className="have-children"><Link to="/" >Settings</Link>
            <ul>
              <li><Link to="/" >User settings</Link></li>
              <li><Link to="/" >App settings</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;