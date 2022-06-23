import './Dialogs.scss';
const Dialogs = ({items, messages}) => {
    return (
        <div className="dialogs">
            <div className="dialogs__items">
                {items.map(item => (
                    <span>{item.name}</span>
                ))}
            </div>
            <div className="dialogs__messages">
                {messages.map(item =>(
                    <span>{item.message}</span>
                ))}
            </div>
        </div>
    )
}
export default Dialogs; 