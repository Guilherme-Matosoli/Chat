import React, { createContext, ReactNode, useState } from "react";

interface MessagesData{
    messages: dataType[],
    setMessages: (messages: dataType[]) => void
}

interface MessagesType {
    children: ReactNode
}

interface dataType{
    author: string,
    message: string
}

export const MessagesContext = createContext<MessagesData>({} as MessagesData);

export const MessagesProvider: React.FC<MessagesType> = ({ children }) =>{

    const [messages, setMessages] = useState<dataType[]>([]);

    return(
        <MessagesContext.Provider value={{messages, setMessages}}>
            {children}
        </MessagesContext.Provider>
    )
}