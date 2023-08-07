
import PropTypes from 'prop-types';
import React from 'react';

function User({ name, email, picture, age }) {
  return (
    <div>
      <img src={picture.large} alt="Foto do usuário" />
      <div>Nome: {name.first} {name.last}</div>
      <div>Email: {email}</div>
      <div>Idade: {age}</div>
    </div>
  );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
};

export default User;