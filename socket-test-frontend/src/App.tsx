import "./App.css";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { getCode } from "./api/api";

const App = () => {
  const [code, setCode] = useState<string>("");
  const ENDPOINT = "http://localhost:3000";

  useEffect(() => {
    (async () => {
      const { code } = await getCode();

      code && setCode(code);
    })();

    const socket = io(ENDPOINT);

    socket.on("connect", () => {
      console.log(socket.id);

      socket.on("code:create", () => {
        (async () => {
          const { code } = await getCode();

          code && setCode(code);
        })();
        console.log("New code created using web sockets.");
      });
    });

    socket.on("connect_error", (err) => {
      console.log("The connection to socket threw an error due to:", err);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="header">This is the code</h1>
      <h2 className="code">{code}</h2>
    </div>
  );
};

export default App;
