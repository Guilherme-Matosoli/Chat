import { useContext, useState } from "react";
import { Chatpage } from './pages/Chatpage';
import { Nicknamepage } from './pages/Nicknamepage';
import { NicknameContext, NicknameProvider } from "./contexts/NicknameContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainContext } from "./contexts/MainContext";
// import { io } from "socket.io-client";

// const socket = io('http://localhost:4001');


function NApp() {

  const nickname = useContext(NicknameContext).nickname;

  return (
    <>
      <GlobalStyle />

      {

        nickname ? <Chatpage /> : <Nicknamepage />

      }
    </>
    
  );
};

function App(){

  return(
    <MainContext>
      <NApp />
    </MainContext>
  )
}

export default App;

