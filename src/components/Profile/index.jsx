import './Profile.scss';
import wallIMG from '../../assets/img/wall.jpeg';
import avaIMG from '../../assets/img/ava.jpg';
const Profile = () => {
    return (
        <div className='profile'>
            <img src={wallIMG} alt='wall'/>
            <div className='profile__info'>
                <img src={avaIMG} alt='ava'/>
            </div>
        </div>
    )
}
export default Profile;