import React, { useContext, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { ListGroupItem, Button, InputGroupAddon, InputGroupText, InputGroup, CustomInput } from 'reactstrap'




//create HTML for a single message
export const Message = ({ messageObj, setMessage }) => {

    //get the removeMessage method from MessageContext
    const { removeMessage, editMessage } = useContext(MessageContext)
    const [ message, setMessageLocal ] = useState({...messageObj})


    const [isLoading, setIsLoading] = useState(false)

    const handleInputControl = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessageLocal(newMessage)
    }

    const EditButton = ({event}) => {
        debugger;
        const displayMessage = document.querySelector('.display_message')

        displayMessage.style.display = "none"

        const contentTarget = document.querySelector('.message-container')

        return (
            <InputGroup className="display_edit_message">
                <InputGroupAddon addonType="prepend">{message.user.username}: </InputGroupAddon>
                <CustomInput id="message" type="text" className="form-control" placeholder={message.message} onChange={handleInputControl} value={message.message}></CustomInput>
                <InputGroupAddon addonType="append"><Button disabled={isLoading} className="edit_message_button" color="success" onClick={() => {
                    setIsLoading(true)
                    editMessage(message)
                        .then(_ => {
                            setIsLoading(false)
                            setMessage(message)
                            displayMessage.style.display = "block"
                            document.querySelector('.display_edit_message').innerHTML = ""
                        })
                }}>Save</Button></InputGroupAddon>
            </InputGroup>
        )
    }

    //get the current user
    const userId = parseInt(localStorage.getItem("user"))

    //check if the message belongs to the current user
    if (parseInt(messageObj.userId) === userId) {
        //if the message belongs to the current user, give the ability to delete the message
        return (
            <ListGroupItem className="message-container">
                <InputGroup className="display_message user_message">
                    <InputGroupAddon addonType="prepend"><InputGroupText className="message_text">{messageObj.user?.username}: {messageObj.message}</InputGroupText></InputGroupAddon>
                    <InputGroupAddon addonType="append"><Button className="edit_message_button" color="warning" onClick={<EditButton/>}>Edit</Button></InputGroupAddon>
                    <InputGroupAddon addonType="append"><Button color="danger" onClick={() => {
                        removeMessage(messageObj.id)
                    }}>X</Button></InputGroupAddon>
                </InputGroup>
            </ListGroupItem>
        )
    }
    //if the message is not from the current user, then display the message without a delete button
    else {
        return (
            <ListGroupItem className="message-container">
                <InputGroup className="display_message">
                <InputGroupAddon addonType="prepend"><InputGroupText className="message_text">{messageObj.user?.username}: {messageObj.message}</InputGroupText></InputGroupAddon>
                </InputGroup>
            </ListGroupItem>
        )
    }


}