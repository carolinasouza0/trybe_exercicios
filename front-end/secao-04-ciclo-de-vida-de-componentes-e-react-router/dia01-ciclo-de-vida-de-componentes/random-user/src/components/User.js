import { Component } from "react";
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const { user: { name, email, age, image } } = this.props;
    return (
      <div>
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={image } alt={ name } />
      </div>
      </div>
    )
  }
}

User.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default User;