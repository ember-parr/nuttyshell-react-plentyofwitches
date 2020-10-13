import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams, useHistory } from "react-router-dom"

export const EventDetail = () => {
    // debugger
    const { deleteEvent, getEventById } = useContext(EventContext)

    const [event, setEvent] = useState({})
    // const [location, setLocation] = useState({})
    // const [date, setDate] = useState({})

    const { eventId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", eventId)
        getEventById(eventId)
            .then((response) => {
                setEvent(response)
            })
    }, [])
    return (
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">Location: {event.eventLocationCity}</div>
            <div className="event__date">Date: {event.date}</div>
            <button onClick={
                () => {
                    deleteEvent(event.id)
                        .then(() => {
                            history.push("/events")
                        })
                }}>Delete Event
            </button>
            <button onClick={() => {
                history.push(`/events/edit/${event.id}`)
            }}>Edit</button>
        </section>
    )
}