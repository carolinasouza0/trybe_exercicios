import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';


describe('Testando o componente ValidEmail', () => {

  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
  
  it('Não exibe mensagem caso o email ainda não tenha sido enviado', () => {
    render(<ValidEmail email="" />);
    const isValidText = screen.queryByTestId('id-email-valid');
    expect(isValidText).not.toBeInTheDocument();
  });
  
  it('Muda a cor do texto caso o email seja válido', () => {
    const EMAIL_USER = 'carolina@trybe.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.queryByTestId('id-email-user');
    expect(isValid).toHaveAttribute('style', 'color: blue;');
  });
})