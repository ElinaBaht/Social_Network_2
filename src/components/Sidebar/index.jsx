
import './Sidebar.scss';
const Sidebar = ({items}) => {
    return (
        <ul className="list">
            {items.map(item => (
                <li className={item.active ? 'active' : ''}>
                    <i>{item.icon}</i>
                    <span>{item.name}</span>
                </li>
            ))
            }
          
        </ul>
    )
}

export default Sidebar;