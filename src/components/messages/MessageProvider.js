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

    //add a message to the database
    const addMessage = message => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then(getMessages)
    }

    //remove a message from the database
    const removeMessage = id => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
        .then(getMessages)
    }


    //edit a message
    const editMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then(getMessages)
    }

    //context provides messages and get messages
    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, removeMessage, editMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )

}