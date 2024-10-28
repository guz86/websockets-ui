import { WebSocketServer } from 'ws';

export function setupWebSocket(wss: WebSocketServer) {
    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('message', (message: string) => {
            console.log('Received message:', message);

            const response = `Server received: ${message}`;
            ws.send(response);
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}