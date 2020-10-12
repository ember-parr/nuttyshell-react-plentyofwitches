import React from "react"
import { ListGroupItem, Button, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap'

//create HTML for a single message
export const Message = ({message}) => {

    const userId = parseInt(localStorage.getItem("user"))

    return (
        <ListGroupItem className="message-container">
            <InputGroup>
                <InputGroupText className="message_text">{message.user.username}: {message.message}</InputGroupText>
                {{if(parseInt(message.userId) === userId){

                }}}
                <InputGroupAddon addonType="append"><Button color="danger">X</Button></InputGroupAddon>
            </InputGroup>
        </ListGroupItem>
    )
}