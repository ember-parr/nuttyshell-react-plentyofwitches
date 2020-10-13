import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams, useHistory } from "react-router-dom"

export const EventDetail = () => {
    const { releaseEvent, getEventById } = useContext(EventContext)

    const [event, setEvent] = useState({})
    const [location, setLocation] = useState({})
    const [date, setDate] = useState({})

    const { eventId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", eventId)
        getEventById(eventId)
            .then((response) => {
                setEvent(response)
                setLocation(response.location)
                setDate(response.date)
            })
    }, [])

    return (
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">Location: {location}</div>
            <div className="event__date">Date: {date}</div>
            <button onClick={
                () => {
                    releaseEvent(event.id)
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