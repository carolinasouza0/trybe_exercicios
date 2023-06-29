import PropTypes from 'prop-types';
import readIcon from '../assets/read.svg';
import unreadIcon from '../assets/unread.svg';

function ControlBtns({ allRead, allUnread }) {
  return (
    <div className="control-btns">
      <button type="button" onClick={ allRead }>
        Mark all as read
        <img src={ readIcon } alt="read all emails" />
      </button>
      <button type="button" onClick={ allUnread }>
        Mark all as unread
        <img src={ unreadIcon } alt="unread all emails" />
      </button>
    </div>
  );
}

ControlBtns.propTypes = {
  allRead: PropTypes.func.isRequired,
  allUnread: PropTypes.func.isRequired,
};

export default ControlBtns;
