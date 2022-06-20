import './Post.scss'
const Post = ({items}) => {
    return(
        <ul className="post">
            {items.map(item => (
                <li>
                    <i className={`badge badge--${item.color}`}></i>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    )
}
export default Post;