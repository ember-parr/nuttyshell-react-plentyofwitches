import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventSearch = (props) => {
    const { setTerms } = useContext(EventContext)

    return (
        <>
            <h3>Event search: </h3>
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search for an event... " />
        </>
    )
}