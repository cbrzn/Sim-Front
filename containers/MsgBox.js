import React from "react";
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

class MsgBox extends React.Component {
  message = React.createRef();

  sendMsg = (event) => {
    event.preventDefault();
    socket.emit('new message', this.message.current.value);
    const text = {
      data: this.message.current.value,
    };
  };

  render() {
    return (
      <form className="_398D7-fSqgH_XeAKWxBd8O" onSubmit={this.sendMsg}>
        <textarea
          type="text"
          ref={this.message}
          className="_1uwo7Uo6XjOv7PKHLcATNn"
          placeholder="Type message...">
        </textarea>
        <button type="submit" className="_36YPT2Qt0SLA-jXErsF_pB">Send</button>
      </form>
    )
	}
}

export default MsgBox;
