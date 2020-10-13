import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import { ListGroupItem, Button, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap'

//create HTML for a single message
export const Message = ({message}) => {

    //get the removeMessage method from MessageContext
    const { removeMessage, editMessage } = useContext(MessageContext)

    //get the current user
    const userId = parseInt(localStorage.getItem("user"))

    //check if the message belongs to the current user
    if(parseInt(message.userId) === userId){
        //if the message belongs to the current user, give the ability to delete the message
        return (
            <ListGroupItem className="message-container">
                <InputGroup>
                    <InputGroupText className="message_text">{message.user.username}: {message.message}</InputGroupText>
                    <InputGroupAddon addonType="append"><Button color="danger" onClick={() => {
                            return (
                                <Input placeholder="edit message"></Input>
                            )
                        }}>X</Button></InputGroupAddon>
                        <InputGroupAddon addonType="append"><Button color="danger" onClick={() => {
                            removeMessage(message.id)
                        }}>X</Button></InputGroupAddon>
                </InputGroup>
            </ListGroupItem>
        )
    }
    //if the message is not from the current user, then display the message without a delete button
    else{
        return (
            <ListGroupItem className="message-container">
                <InputGroup>
                    <InputGroupText className="message_text">{message.user.username}: {message.message}</InputGroupText>
                </InputGroup>
            </ListGroupItem>
        )
    }

    
}