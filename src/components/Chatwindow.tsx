import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import "./Chat.css";

interface Message {
  text: string;
  isBot: boolean;
}

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: '👋 Hi there! How can I help?', isBot: true },
  ]);
  const [input, setInput] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isBot: false },
    ]);
    setInput('');

    const botResponses = [
      'Thank you for your message!',
      'I am here to assist you.',
      'Is there anything else you need help with?',
      'Feel free to ask me anything!',
      'I’m always happy to assist!',
    ];

    const response = botResponses[Math.floor(Math.random() * botResponses.length)];

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, isBot: true },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const getMessageStyle = (text: string) => {
    const length = text.length;
    if (length < 20) {
      return { width: '30%' };
    } else if (length < 50) {
      return { width: '60%' };
    } else {
      return { width: '90%' };
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>Support Chat</h2>
        
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.isBot ? 'message-bot' : 'message-user'}`}
            style={getMessageStyle(msg.text)}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a reply..."
          className="input-field"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
