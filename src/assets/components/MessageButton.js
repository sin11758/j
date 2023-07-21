import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Chat, Clear } from '@mui/icons-material';

const MessageButton = ({ onClick }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick(!selected);
  };

  return (
 

    <div className={`message-button ${selected ? 'selected' : ''}`} onClick={handleClick}>
      {selected ? (
        <>
        <Clear/>
        </>
        ) : (
          <Chat/>
          )}
    </div>
  );
};

MessageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MessageButton;
