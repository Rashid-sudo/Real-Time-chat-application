import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat((prev) => [...prev, msg]);
    });
  }, []);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Real-Time Chat App</h1>
      <form onSubmit={sendChat}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          required
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;