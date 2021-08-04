import styles from './Profile.module.scss';
import PropTypes from 'prop-types';

export const Profile = ({ name, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
        <div className={ styles.profile}>
            <div className={ styles.description }>
                <img
                    src={ avatar }
                    alt="Аватар пользователя"
                    className={ styles.avatar }
                />
                <h2 className={ styles.name }> { name }</h2>
                <p className={ styles.tag}> { '@'+ tag } </p>
                <p className={ styles.location }> { location }</p>
            </div>

            <ul className={styles.stats}>
                <li className={ styles.stat}>
                    <h4 className={styles.label}>Followers</h4>
                    <span className={styles.quantity}> { followers } </span>
                </li>
                <li className={ styles.stat}>
                    <h4 className={styles.label}>Views</h4>
                    <span className={styles.quantity}> { views } </span>
                </li>
                <li className={ styles.stat}>
                    <h4 className={styles.label}>Likes</h4>
                    <span className={styles.quantity}> { likes }</span>
                </li>
            </ul>
        </div>
    )
}

Profile.defaultProps = {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1200px-Anonymous.svg.png'
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}
