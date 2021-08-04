import { FriendListItem } from '../FriendListItem';
import styles from './FriendList.module.scss';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) =>
{
    return (
        <ul className="friend-list">
            {
                
                friends.map((friend) => (
                    <li key={ friend.id } className={ styles.item }>
                        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
                    </li>
                ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }
    ))
}

export default FriendList;