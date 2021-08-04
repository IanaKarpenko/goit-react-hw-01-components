import styles from '../FriendList/FriendList.module.scss';
import itemStyles from './FriendListItem.module.scss';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={isOnline ? styles.statusGreen : styles.statusRed }>{isOnline}</span>
            <img className={itemStyles.avatar} src={avatar} alt={name} width="48" />
            <p className={ itemStyles.name}>{name}</p>
        </>
    )
}

FriendListItem.defaultProps = {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png'
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}