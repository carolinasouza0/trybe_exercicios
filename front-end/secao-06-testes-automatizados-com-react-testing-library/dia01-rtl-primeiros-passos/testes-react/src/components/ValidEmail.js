// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};
const ValidEmail = (props) => {
  const { email } = props;
  const validColor = <h2 style={{color: "blue"}} data-testid="id-email-user">{`Valor: ${email}`}</h2>
  return (
    <div>
      { verifyEmail(email) ? validColor :  <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2> }
      
      { email && (
        <h3 data-testid= "id-email-valid">{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
      )}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
