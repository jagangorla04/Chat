import React, { useState } from 'react';
import "./Chat.css"

import ChatWindow from './Chatwindow';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chat-widget-container">
      {isOpen && <ChatWindow onClose={toggleChat} />}
      <button onClick={toggleChat} className="chat-button">
        {isOpen ? '▼' : '💬'}
      </button>
    </div>
  );
};

export default ChatWidget;
