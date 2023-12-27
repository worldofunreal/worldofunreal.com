// Button.jsx
import React from 'react';
import './Button.scss';

function Button({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
