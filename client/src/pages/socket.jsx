import { io } from "socket.io-client";

const socket = io("https://live-event-manager.onrender.com", {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default socket;