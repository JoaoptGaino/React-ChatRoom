import React from 'react';
import './styles.css';

import useChat from '../../Hooks/UseChat/index';
import { useState } from 'react';

const ChatRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };
    return (
        <div className="chat-room-container">
            <h1 className="room-name">Room:{roomId}</h1>
            <div className="messages-container">
                <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li key={i}
                            className={`message-item${message.ownedByCurrentUser ? "my-message" : "received-message"}`}>
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Send message"
                className="new-message-input-field"
            />
            <button
                onClick={handleSendMessage}
                className="send-message-button">
                Send
        </button>
        </div>
    );
}

export default ChatRoom;