import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from 'ws';
import { setupWebSocket } from './src/websocket';

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT, () => {
    console.log(`Static HTTP server is running on port ${HTTP_PORT}`);

    const wss = new WebSocketServer({ server: httpServer });
    setupWebSocket(wss);
});
