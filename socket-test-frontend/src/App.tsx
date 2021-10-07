import "./App.css";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { getCode } from "./api/api";

function App() {
  const [code, setCode] = useState<string>("");

  const socket = io();

  useEffect(() => {
    (async () => {
      const { code } = await getCode();

      code && setCode(code);
    })();

    socket.on("connect", () => {
      console.log(socket.connected);
    });

    socket.on("disconnect", () => {
      console.log(socket.connected);
    });

    socket.connect();
  }, [socket]);

  return (
    <div className="App">
      <h1 className="header">This is the code</h1>
      <h2 className="code">{code}</h2>
    </div>
  );
}

export default App;
