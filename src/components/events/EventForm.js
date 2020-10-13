import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "../location/LocationProvider"
import { EventContext } from "./EventProvider"
// import "./Event.css"
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const EventForm = () => {
    const { addEvent, getEventById, updateEvent } = useContext(EventContext)
    // const { locations, getLocations } = useContext(LocationContext)

    //for edit, hold on to state of event in this view
    const [event, setEvent] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { eventId } = useParams();
    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newEvent = { ...event }
        //event is an object with properties. 
        //set the property to the new value
        newEvent[event.target.name] = event.target.value
        //update state
        setEvent(newEvent)
    }

    // Get customers and locations. If eventId is in the URL, getEventById
    useEffect(() => {
        if (eventId) {
            getEventById(eventId)
                .then(event => {
                    setEvent(event)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const constructEventObject = () => {
        if (parseInt(event.locationId) === 0) {
            window.alert("Please select a location")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (eventId) {
                //PUT - update
                updateEvent({
                    id: event.id,
                    name: event.name,
                    locationId: parseInt(event.locationId)
                })
                    .then(() => history.push(`/events/detail/${event.id}`))
            } else {
                //POST - add
                addEvent({
                    name: event.name,
                    locationId: parseInt(event.locationId)
                })
                    .then(() => history.push("/events"))
            }
        }
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name: </label>
                    <input type="text" id="eventName" name="name" required autoFocus className="form-control"
                        placeholder="Event Name"
                        onChange={handleControlledInputChange}
                        defaultValue={event.name} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="eventLocation" name="location" className="form-control"
                        placeholder="Location"
                        onChange={handleControlledInputChange}
                        defaultValue={event.location} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date: </label>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructEventObject()
                }}>
                {eventId ? <>Save Event</> : <>Add Event</>}</button>
        </form>
    )
}