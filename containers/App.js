import React from 'react';
import ChatTitle from './ChatTitle'
import Messages from './Messages'
import MsgBox from './MsgBox'
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

class App extends React.Component {


  componentDidMount() {
    this.initSocket();
  }

  newMessage = (msg) => {
    const messages = { ...this.state.history };
    let history = [];
    for (var i in messages) {
      history.push(messages[i]);
    }
    history.push(msg);
    this.setState({ history });
    }
    state = {
        socket: null,
        history: [],
    };

    initSocket = () => {
      socket.on('connect', () => {
        console.log('connected');
      })
      this.setState({ socket })
    }

    render () {
      const { sendMessage, state } = this;
      return (
        <div className="_1MY_CHFF71MDeQ3DBwIisL">
          <ChatTitle />
          <Messages history={ state.history } newMessage={this.newMessage}/>
          <MsgBox
            newMessage={this.newMessage}
           />
        </div>
      )
    }
}

export default App;
