import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"

export const EventSearch = (props) => {
    const { setSearch } = useContext(EventContext)

    return (
        <>
            <h3>Event search: </h3>
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearch(keyEvent.target.value)
                }
                placeholder="Search for an event... " />
        </>
    )
}