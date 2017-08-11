/* A wrapper around the Phoenix sockets and channel interfaces
*/

import { Socket } from "phoenix";
const CHANNEL_URL = "ws://localhost:4000/socket";

export default class SocketController {
  constructor() {
    // construct a socket
    this.socket = new Socket(CHANNEL_URL);
    // configure the event handlers
    // this.socket.onOpen((/* event */) => { return console.log('Socket Connected'); });
    // this.socket.onError((event) => { return console.log('Socket error: ', event); });
    // this.socket.onClose((event) => { return console.log('Socket Closed:', event); });
    // open a connection to the server
    this.socket.connect();
  }

  createChannel(name, param) {
    this.channelName = `${name}:${param}`;
    const channel = this.socket.channel(this.channelName, {});
    // join the channel and listen for admittance
    channel.join();
    //      .receive('ignore', () => { return console.log('Channel Ignore:', name, param); })
    //      .receive('ok', () => { return console.log('Channel OK', name, param); })
    //      .receive('timeout', () => { return console.log('Channel Timeout', name, param); });
    return channel;
  }

  // a function to shut it all down
  closeSocket() {
    this.socket.disconnect();
  }

  createSensorChannel(onRequestReceived) {
    // fetch the current user id to append in channel name
    const sensorChannel = this.createChannel("sensor", "1");

    // add some channel-level event handlers
    // chatChannel.onError((event) => { return console.log('Chat Channel error: ', event); });
    // chatChannel.onClose((event) => { return console.log('Chat Channel closed: ', event); });

    // when we receive a new chat message, just trigger the appropriate callbackonly
    sensorChannel.on("STATE_NEW", channelObj => {
      //      console.log('STATE_NEW - ', channelObj);
      if (onRequestReceived) {
        onRequestReceived("STATE_NEW", channelObj);
      }
    });
    // you can can listen to multiple types

    return sensorChannel;
  }
}
