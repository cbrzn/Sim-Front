import React from "react";
import Sender from "./Sender";
import io from 'socket.io-client';

class Messages extends React.Component {

  componentDidMount() {
    const { socket, newMessage } = this.props;
    socket.on('new message', (msg) => {
      newMessage(msg.message);
    })
  }

  render() {
    return (
      <div className="messages">
        <div className="messages-content"></div>
          <Sender history={this.props.history}/>
      </div>
    )
	}
}

export default Messages;
