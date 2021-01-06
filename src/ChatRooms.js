import React from 'react';
import { ChatContext } from './App.js';
import './ChatRoom.css';

function ChatRooms() {
  const chatData = React.useContext(ChatContext);

  function onClickChatroom(ev) {
    chatData.selectChatroom(ev.target.id);
  }

  return (
    <div ClassName = "p-3 mb-2 bg-light text-dark" >
      {chatData.user.chatrooms.map(chatroom => {
        let className = 'chatroom';
        if (chatData.selectedChatroom && chatData.selectedChatroom.sid === chatroom[1]) {
          className += ' selected';
        }
        return (
          <button
              className={className}
              key={chatroom[1]}
              id={chatroom[1]}
              onClick={onClickChatroom}>
            {chatroom[0]}
          </button>
        );
      })}
    </div>
  );
}

export default ChatRooms;