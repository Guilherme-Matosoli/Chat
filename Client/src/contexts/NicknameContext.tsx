import { createContext, useState } from 'react';


interface NicknameType{
    children: React.ReactNode
}

interface NicknameData{
    nickname: string,
    setNickname: (nickname: string) => void
}

export const NicknameContext = createContext<NicknameData>({} as NicknameData);

export const NicknameProvider: React.FC<NicknameType> = ({ children }) => {

    const [ nickname, setNickname ] = useState('');

    return(
        <NicknameContext.Provider value={{nickname, setNickname}}>
            { children }
        </NicknameContext.Provider>
    )
};

