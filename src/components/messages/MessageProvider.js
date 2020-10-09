import React, { useState, createContext } from "react"

//create the MessageContext
export const MessageContext = createContext()

export const MessageProvider = props => {

    //set state for messages
    const [ messages, setMessages ] = useState([])

    //get messages from the database
    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(setMessages)
    }

    //context provides messages and get messages
    return (
        <MessageContext.Provider value={{
            messages, getMessages
        }}>
            {props.children}
        </MessageContext.Provider>
    )

}