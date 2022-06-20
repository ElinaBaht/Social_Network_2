import './Profile.scss';
import MyPosts from './MyPosts'
import wallIMG from '../../assets/img/wall.jpeg';
import avaIMG from '../../assets/img/ava.jpg';
const Profile = () => {
    return (
        <div className='profile'>
            <img src={wallIMG} alt='wall'/>
            <div className='profile__info'>
                <img src={avaIMG} alt='ava'/>
                <div className="description">
                    <div>Name: Elina</div>
                    <div>Age: 24</div>
                    <div>Profession: Frontend dev</div>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;