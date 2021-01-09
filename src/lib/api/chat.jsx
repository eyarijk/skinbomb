import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Echo from 'laravel-echo';
import io from 'socket.io-client';
import fetch from '../fetch';
import { useAuth } from './auth';

const ChatContext = createContext({});

function ChatProvider({ children }) {
  const { token } = useAuth();
  const [messages, setMessages] = useState([]);
  const [isMessagesLoaded, setIsMessagesLoaded] = useState(false);
  const [online, setOnline] = useState(0);

  const getMessages = async () => {
    try {
      const payload = await fetch('/chat/messages/0');

      setMessages(payload.messages);
      setIsMessagesLoaded(true);
      setOnline(payload.online);
      return payload.messages;
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const sendMessage = async message => {
    const formData = new FormData();
    formData.append('message', message);

    try {
      await fetch('/chat/store', {
        data: formData,
        method: 'post',
      });

      return { status: 'success' };
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const addMessage = message => {
    const newMessage = message;
    newMessage.created_at = new Date();
    setMessages(prevMessages => {
      return [...[newMessage], ...prevMessages];
    });
  };

  useEffect(() => {
    if (messages.length === 0) {
      getMessages();
    }
  }, [token]);

  useEffect(() => {
    window.io = io;
    const echo = new Echo({
      broadcaster: 'socket.io',
      host: 'https://api.skinbomb.gg:6001',
      key: '786f1ec17bf42575b2e4db7465b45473',
    });

    echo.channel('laravel_database_chat').listen('Chat', event => {
      if (event['0']) {
        addMessage(event['0']);
      }
    });
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        getMessages,
        isMessagesLoaded,
        online,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useChat = () => {
  return useContext(ChatContext);
};

export { ChatProvider, useChat };
