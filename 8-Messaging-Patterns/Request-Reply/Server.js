/**
 * The request - reply system receives a message and responds with a reply.
 * It usually has an associated ID which is used in identifying where the 
 * message is sent  from so the reply can be sent back through. Just like the HTTP
 */
const SocketServer = require("ws").Server

const reverse = str => str.split("").reverse().join("")

class Server {
    constructor(port) {
        this.server = new SocketServer({ port })
        this.server.on("connection", ws => this.connectionHandler.call(this, ws))
    }

    connectionHandler(ws) {
        ws.on("message", msg => {
            const { textToProcess, correlationId, key } = JSON.parse(msg)

            if (key === "request" && textToProcess) {
                const reply = reverse(textToProcess)
                const payload = JSON.stringify({
                    key: "reply",
                    correlationId,
                    reply
                })

                ws.send(payload)
            }
        })
    }
}

module.exports = Server