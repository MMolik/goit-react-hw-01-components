import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <span className={css.name}>{name}</span>
      <img className={css.avatar} src={avatar} alt={name} />
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
