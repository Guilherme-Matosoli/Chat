import { ReactNode } from "react"
import { MessagesProvider } from "./MessagesContext";
import { NicknameProvider } from "./NicknameContext";

interface MainType{
    children: ReactNode
}




export const MainContext: React.FC<MainType> = ({ children }) => {
    return(
        <>
            <NicknameProvider>
            <MessagesProvider>
                {children}
            </MessagesProvider>
            </NicknameProvider>
        </>
    )
};