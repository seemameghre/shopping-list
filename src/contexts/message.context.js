import {createContext} from "react"
import axios from "axios"

export const MessageContext = createContext()

const MSG_URI = "http://localhost:5000/message"

export function MessageProvider(props){
    async function sendMessage(msg){
        await axios.post(MSG_URI, msg)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (<MessageContext.Provider value={{sendMessage:sendMessage}}>
        {props.children}
    </MessageContext.Provider>)
}