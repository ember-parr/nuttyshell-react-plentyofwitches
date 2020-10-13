import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventSearch = () => {
    const { setSearchTerms } = useContext(EventContext)

    return (
        <>
            <h3>Event search: </h3>
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an event... " />
        </>
    )
}