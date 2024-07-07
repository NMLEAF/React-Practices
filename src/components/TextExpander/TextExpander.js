import React, { useState } from 'react';
import './TextExpander.css';

const TextExpander = ({
  children,
  className = '',
  textLength = 20,
  showTextColor = 'blue',
  fontSize = '24px',
  expanded = false,
}) => {
  const [fullMessage, setFullMessage] = useState(expanded);

  const message = children;

  const content = fullMessage ? message : `${message.split(' ').slice(0, textLength).join(' ')} ...`;

  const handleShow = () => {
    setFullMessage(show => !show);
  };

  const showStyle = {
    cursor: 'pointer',
    color: showTextColor,
    fontWeight: '600',
  };

  const paraStyle = {
    fontSize,
  };

  return (
    <p style={paraStyle} className={className}>
      {`${content} `}
      <span onClick={handleShow} style={showStyle}>
        {fullMessage ? 'Show less' : 'Show more'}
      </span>
    </p>
  );
};

export default TextExpander;
