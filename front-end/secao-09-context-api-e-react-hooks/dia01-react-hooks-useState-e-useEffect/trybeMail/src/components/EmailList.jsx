import PropTypes from 'prop-types';
import { READ, UNREAD } from '../constants';
import readIcon from '../assets/read.svg';
import unreadIcon from '../assets/unread.svg';

function EmailList({ emails, setEmailStatus }) {
  return (
    <ul className="email-list">
      {emails.map((email) => {
        const emailClass = email.status === READ ? 'read' : 'unread';

        return (
          <li key={ email.id } className="email-list-item">
            <p className={ `email-title-${emailClass}` }>{email.title}</p>
            <button
              type="button"
              onClick={ () => setEmailStatus(email.id, READ) }
            >
              <img src={ readIcon } alt="read email" />
            </button>
            <button
              type="button"
              onClick={ () => setEmailStatus(email.id, UNREAD) }
            >
              <img src={ unreadIcon } alt="unread email" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

EmailList.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  setEmailStatus: PropTypes.func.isRequired,
};

export default EmailList;
