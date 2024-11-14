import React, { useState } from 'react';
import "./Chat.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ChatWindow from './Chatwindow';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chat-widget-container">
      {isOpen && <ChatWindow onClose={toggleChat} />}
      <button onClick={toggleChat} className={`chat-button ${isOpen ? 'close-button' : 'open-button'}`}>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faComment} />
      </button>
    </div>
  );
};

export default ChatWidget;
