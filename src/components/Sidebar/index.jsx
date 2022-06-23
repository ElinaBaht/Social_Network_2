
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
const Sidebar = () => {
    return (
        <div className="list">
            <div className="list__item">
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className="list__item">
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className="list__item">
                <NavLink to="/news">News</NavLink>
            </div>
            <div className="list__item">
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className="list__item">
                <NavLink to="/settings">Settings</NavLink>
            </div>
           
        </div>
    )
}

export default Sidebar;