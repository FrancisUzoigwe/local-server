"use strict";
// console.log("This is a Server test")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http, { ServerResponse } from "http";
// const Server =http.createServer(
//     (req: http.IncomingMessage, res : ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type": "text/html"
//         });
//         const realData = req.rawHeaders[7].slice(0,15)
//         console.log(realData)
//     }
// )
// Server.on ("connection", () => {
//     console.log("A user connected..")
// });
// Server.listen(3200, () => {
//     console.log("")
//     console.log("Server is now live..")
// })
// import http, { ServerResponse } from "http";
// const server = http.createServer(
//   (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
//     res.writeHead((res.statusCode = 200), {
//         "content-type" : "text/html"
//     })
//   }
// );
// server.on("Connected", () => {
//   console.log("A user connected");
// });
// server.listen(3400, () => {
//   console.log("");
//   console.log("Server is now live..");
// });
// import http, { ServerResponse } from "http";
// const server = http.createServer (
//     (req: http.IncomingMessage, res : ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type": "text/html"
//         });
//     }
// );
// server.on("connection", () => {
//     console.log("A user is connected")
// });
// server.listen(2300, () => {
//     console.log("")
//     console.log("Server is live..")
// });
// import http, { ServerResponse } from "http";
// const server = http.createServer(
//     (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type" : "text/html",
//         })
//         const realData = req.rawHeaders
//         console.log(realData)
//     },
// )
// server.on("connection", () => {
//     console.log("A user is connecting to the server")
// });
// server.listen(5000, () => {
//     console.log("");
//     console.log("Server is now live..")
// })
// import http, { ServerResponse } from "http";
// const server = http.createServer(
//     (req :http.IncomingMessage, res : ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type": "text/html"
//         })
//         const realData = req.rawHeaders
//         console.log(realData)
//     },
// )
// server.on ("Connection", () => {
//     console.log("A user is connected");
// })
// server.listen(4190, () => {
//     console.log("")
//     console.log("Server is now live..")
// })
// import http, { ServerResponse, createServer } from "http";
// const server = http.createServer(
//     (req: http.IncomingMessage, res : ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type":"tex/html"
//         })
//         const realData = req.rawHeaders
//         console.log(realData)
//     }
// )
// server.on("Connection", () => {
//     console.log("A user connected")
// })
// server.listen(1234, () => {
//     console.log("")
//     console.log("Server is now live..")
// })
// import http, { ServerResponse } from "http";
// const server = http.createServer(
//     (req : http.IncomingMessage, res : ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type": "text/html"
//         })
//        const realData =  req.rawHeaders
//        console.log(realData)
//     }
// )
// server.on("Connection", () => {
//     console.log("A connection was established")
// })
// server.listen(4040, () => {
//     console.log("")
//     console.log("Server is now live..")
// })
//Practices
// import http, { ServerResponse } from "http";
// const server = http.createServer(
//     (req : http.IncomingMessage, res : ServerResponse<http.IncomingMessage>) => {
//         res.writeHead((res.statusCode = 200), {
//             "content-type": "text/htm;",
//         })
//     }
// )
// server.on("Connection", () => {
//     console.log("A user connected")
// });
// server.listen(3500, () => {
//     console.log("")
//     console.log("Server is now live..")
// });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((res, req) => {
    req.writeHead((req.statusCode = 200), {
        "content-type": "text/html",
    });
});
server.on("Connection", () => {
    console.log("A user is connecting...");
}),
    server.listen(2000, () => {
        console.log("");
        console.log("Server is now live..");
    });
