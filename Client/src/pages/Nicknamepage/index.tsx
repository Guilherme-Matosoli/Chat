import React, { useContext, useState } from 'react';
import { NicknameContext } from '../../contexts/NicknameContext';
import { Container } from './styles';
import { socket } from '../Chatpage';
import { MessagesContext } from '../../contexts/MessagesContext';


export const Nicknamepage = () => {
    
    const nickname = useContext(NicknameContext);
    const messages = useContext(MessagesContext);
    
    const [connections, setConnections] = useState('');
    const [nick, setNick] = useState('');

    function SetNick(e: React.FormEvent){
        e.preventDefault();

        nickname.setNickname(nick);
    }

    socket.on('ConnectionsInfo', data => {
        setConnections(data);
    });

    socket.on('receivedMessage', data =>{
        messages.setMessages(data)
    });


    return (
        <Container>
            <header>
                <span className='userCount'>
                   <div className="onSignal"></div>
                   usuários online: <strong>{connections ? connections : 0}</strong>
                </span> 
            </header>

            <div className="formarea">
                <form id='form' onSubmit={SetNick}>
                    <div>
                        <label htmlFor="nickname">Nickname: </label>
                        <input
                        onChange={e => setNick(e.target.value)}
                        placeholder='Digite seu nickname'
                        type="text"
                        id='nickname' 
                        name="nickname" 
                        required 
                        autoComplete='off'
                        />
                    </div>

                    <button type='submit'>Entrar no chat</button>
                </form>
            </div>
        </Container>
    );
};