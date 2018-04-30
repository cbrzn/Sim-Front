import io from 'socket.io-client';


const initSocket = () => {
  const socket = io('http://localhost:3000');
  socket.on('connect', () => {
    console.log('connected');
    })
  this.setState({ socket })
  }

export { initSocket };
