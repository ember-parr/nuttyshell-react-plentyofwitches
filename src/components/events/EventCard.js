import React from "react"
import "./Event.css"
import { Link } from "react-router-dom"

export const EventCard = ({ event }) => (
    <section className="event">
        <h3 className="event__name">
            <Link to={`/events/detail/${event.id}`}>
                {event.name}
            </Link>
        </h3>
        <div>
            <Link to={`/events/detail/${event.id}`}>
                {event.date}
            </Link>
        </div>
    </section >
)