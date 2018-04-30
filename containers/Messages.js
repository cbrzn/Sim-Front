import React from "react";
import Sender from "./Sender";
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

class Messages extends React.Component {

  componentDidUpdate() {
    socket.on('new message', (msg) => {
      this.props.newMessage(msg.message);
    })
  }

  render() {
    return (
      <div className="_34DWRdTICEzdUS53QtLFbO">
        <div className="_2YdldZNikRFEVrvPMAo1ER"></div>
          <Sender history={this.props.history}/>
      </div>
    )
	}
}

export default Messages;
