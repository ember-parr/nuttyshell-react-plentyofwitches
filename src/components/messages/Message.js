import React from "react"
import { ListGroupItem, Button, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap'

//create HTML for a single message
export const Message = ({message}) => {

    const userId = parseInt(localStorage.getItem("user"))

    if(parseInt(message.userId) === userId){
        return (
            <ListGroupItem className="message-container">
                <InputGroup>
                    <InputGroupText className="message_text">{message.user.username}: {message.message}</InputGroupText>
                        <InputGroupAddon addonType="append"><Button color="danger">X</Button></InputGroupAddon>
                </InputGroup>
            </ListGroupItem>
        )
    }
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