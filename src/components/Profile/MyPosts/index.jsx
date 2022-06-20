import Post from './Post'
import './MyPosts.scss'


const MyPosts = () => {
    return (
        <div className="posts">
            <div className="posts__form">
                <input  type="text" placeholder="What's up?"/>
                <button >Send</button>
            </div>
            <div className="posts__post">
                <Post items={[
                    {
                        color: 'green',
                        name: 'Hello everyone'
                    },
                    {
                        color: 'blue',
                        name: 'This is my first post'
                    },
                    {
                        color: 'red',
                        name: 'I am frontend dev'
                    }
                ]}/>
            </div>
            
        </div>
    )
}
export default MyPosts;