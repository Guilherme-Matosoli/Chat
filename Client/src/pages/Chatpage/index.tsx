import React, { ReactHTMLElement, useContext, useState } from 'react';
import { NicknameContext } from '../../contexts/NicknameContext';
import { Container } from './styles';
import { Messages } from '../../components/Message';

import { io } from "socket.io-client";
import { MessagesContext } from '../../contexts/MessagesContext';

export const socket = io('https://chat-zxha.onrender.com');

interface dataType{
    author: string,
    message: string
}

export const Chatpage = () => {

    const nickname = useContext(NicknameContext);
    const [message, setMessage] = useState('');
    const messages = useContext(MessagesContext);
    const messagesList = messages.messages
    const data: dataType = {
        'author': nickname.nickname,
        'message': message
    };


    function handleSendMessage(e: React.FormEvent){
        e.preventDefault();

        socket.emit('sendMessage', data);
        setMessage('');
    };

    socket.on('receivedMessage', data =>{
        messages.setMessages(data);
        console.log(messages);
   }) 

    return(
        <Container>
            <header>
                <h1 className='title'>Real Time Chat</h1>
                <span className='username'>Usuário: <strong>{nickname.nickname}</strong></span>
            </header>

            <main className="content">
                <div className="chatarea">
                    <div className="messages">
                        {
                            messagesList?.map(e => {
                                return(
                                    <Messages key={Math.random()} author={e.author} message={e.message} />
                                )
                            })
                        }
                    </div>

                    <form onSubmit={handleSendMessage} className="sendmessage">

                        <textarea
                         required 
                         value={message} 
                         onChange={e => setMessage(e.target.value)} 
                         placeholder='Digite sua mensagem' 
                         className='textarea'/>

                          <div className="buttonarea">
                        <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} Todos direitos reservados</p>
            </footer>
        </Container>
    )
}