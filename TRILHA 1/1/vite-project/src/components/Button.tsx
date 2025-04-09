import React from 'react';
import '../styles/button.css'

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
