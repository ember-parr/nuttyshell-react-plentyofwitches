import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { Message } from "./Message"
import { ListGroup, InputGroup, InputGroupAddon, CustomInput, Button } from 'reactstrap'

//return the HTML for the messageList
export const MessageList = () => {

    //grab messages and getMessages from useContext
   const  { messages, getMessages, addMessage } = useContext(MessageContext)


    //get the current userId
   const userId = localStorage.getItem('user')

   //initialize a local message
   const [ message, setMessage ] = useState({
       "userId": parseInt(userId),
       "message": "",
       "friendId": null,
       "date": null
   })

   //variable to prevent extra clicks
   const [isLoading, setIsLoading] = useState(false);

   //update the message state as the user enters a new message
   const handleControlledInputChange = (event) => {
       const newMessage = {...message}

       newMessage[event.target.id] = event.target.value

       setMessage(newMessage)
   }

   //get the messages every time the component runs
   useEffect(() => {
        getMessages()
   }, [])

   //add the submitted message to the database
   const constructMessageObject = () => {
       if(message.message.trim() != ""){
        setIsLoading(true)
        addMessage({
             "userId": message.userId,
             "message": message.message,
             "friendId": null,
             "date": new Date().getTime()
        })
        //clear the message after its been sent
        .then(_ => {
            message.message = ""
            setIsLoading(false)
        })
       }
   }

   //actually return the HTML
   return (
       <div className="messages">
           <h2>Messages</h2>
           <ListGroup>
                {
                    messages.map(message => <Message key={message.id} message={message}/>)
                }
           </ListGroup>
           <InputGroup>
                <InputGroupAddon addonType="prepend"><Button disabled={isLoading} onClick={event => {
                    event.preventDefault()
                    constructMessageObject()
                }}>Send Message</Button></InputGroupAddon>
                <CustomInput id="message" type="text" className="form-control" onChange={handleControlledInputChange} value={message.message}/>
            </InputGroup>
       </div>
   )
}