import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card"
import ModalConected from "../Modal/ModalConnected";

import "./Container.css"

export const Container = ({eventStorage, getAllEvents}) =>{

    const [events, setEvets ] = useState([]);
    const [showModal ,setShowModal] = useState(false);
    const [eventsToSell ,setEventsToSell] = useState({});

    const handleShowModal = () =>{
        setShowModal(true);
    }

    const handleCloseModal = () =>{
        setShowModal(false);
    }

    useEffect(() => {
        getAllEvents().then((result)=>{
            setEvets(result.payload)
        })    
    }, [])

    useEffect(() => {
        setEvets(eventStorage)
    }, [eventStorage])

    return(
        <section className={showModal ? "blur" : ""}>
            <section className="containerHeader" data-testid="header">
                <h1 className="home-header-h1" data-testid="svg">
                    <svg 
                        id="home-header-text_svg__Layer_1" 
                        x="0" 
                        y="0" 
                        viewBox="0 0 295.76 164.65" 
                        className="home-header-text_svg__st0" 
                    >               
                        <path 
                            className="pathComp" 
                            d="M156.86 93.95h-11.03V84.4h32.51v9.55h-11.03v70.7h-10.46v-70.7zM183.46 84.4h10.46v80.25h-10.46V84.4zM203.01 84.4h13.75l13.3 58.88 13.75-58.88h13.41v80.25h-9.89v-60.36l-13.75 60.36h-6.82l-13.87-60.36v60.36H203V84.4zM266.32 84.4h29.44v9.55h-18.98v23.3h18.64v9.66h-18.64v28.19h18.98v9.55h-29.44V84.4zM200.25 47.59h7.12v29.04h-7.12V47.59zM218.68 75.95c-2.58-1.06-4.36-2.68-5.35-4.87-.49-1.21-.74-2.5-.74-3.87h7.36c.05.71.19 1.34.41 1.89.52 1.12 1.46 1.95 2.82 2.47 1.36.52 3.05.78 5.08.78 1.78 0 3.33-.2 4.63-.6 1.3-.4 2.15-1.01 2.53-1.83.14-.3.21-.67.21-1.11 0-.44-.07-.79-.21-1.07-.27-.63-.84-1.14-1.69-1.54-.85-.4-1.82-.71-2.92-.95-1.1-.23-2.5-.47-4.2-.72-.44-.08-1.25-.22-2.43-.41-2.8-.52-5.05-1.21-6.77-2.06-1.71-.85-2.91-2.02-3.6-3.5-.36-.82-.53-1.8-.53-2.92 0-1.04.19-2.03.58-2.96.58-1.32 1.54-2.42 2.9-3.31 1.36-.89 2.98-1.56 4.87-2.02 1.89-.45 3.93-.68 6.13-.68 3.43 0 6.39.53 8.89 1.6 2.5 1.07 4.21 2.65 5.14 4.73.44 1.01.69 2.19.74 3.54h-7.4a4.78 4.78 0 00-.45-1.81c-.88-2-3.18-3-6.91-3-1.62 0-3.04.19-4.28.58-1.23.38-2.03.97-2.39 1.77-.11.22-.16.49-.16.82 0 .36.05.66.16.9.25.55.75 1.01 1.5 1.38.75.37 1.63.67 2.63.9 1 .23 2.32.49 3.97.76l2.1.37c1.95.36 3.65.76 5.12 1.21 1.47.45 2.76 1.06 3.89 1.83 1.12.77 1.95 1.73 2.47 2.88.41.96.62 1.99.62 3.09 0 1.21-.23 2.32-.7 3.33-.9 2-2.64 3.5-5.2 4.48-2.56.99-5.67 1.48-9.32 1.48-3.75.03-6.92-.5-9.5-1.56zM200.27 30.16h43.6v9.67h-43.6zM.57 121.03h142.05v9.67H.57z">
                        </path>
                        <g> 
                            <path 
                                className="pathComp"
                                d="M42.28 1.18h10.6l19.37 53.63V1.18h9.42v75.57H71.29L51.7 21.73v55.02h-9.42V1.18zM93.66 70.01c-1.07-1.64-1.89-3.57-2.46-5.78-.57-2.21-1-5.28-1.28-9.21-.29-3.92-.43-9.28-.43-16.06 0-6.49.07-11.49.21-14.99.14-3.5.39-6.21.75-8.14.36-1.93.89-3.67 1.61-5.25 1.5-3.43 3.75-6.05 6.74-7.87S105.55 0 110.04 0c4.42 0 8.14.91 11.13 2.73 3 1.82 5.25 4.44 6.74 7.87.71 1.57 1.25 3.34 1.61 5.3.36 1.96.62 4.69.8 8.19.18 3.5.27 8.46.27 14.88s-.09 11.38-.27 14.88c-.18 3.5-.45 6.23-.8 8.19-.36 1.96-.89 3.73-1.61 5.3-1.5 3.43-3.75 6.05-6.74 7.87-3 1.82-6.71 2.73-11.13 2.73-7.64-.01-13.09-2.65-16.38-7.93zm25.37-6.85c.43-1 .75-2.19.96-3.59.21-1.39.36-3.84.43-7.33.07-3.5.11-7.92.11-13.27s-.04-9.78-.11-13.27c-.07-3.5-.21-5.94-.43-7.33-.21-1.39-.54-2.59-.96-3.59-1.64-3.64-4.64-5.46-8.99-5.46-4.35 0-7.35 1.82-8.99 5.46-.43 1-.75 2.19-.96 3.59-.21 1.39-.37 3.64-.48 6.74-.11 3.1-.16 7.73-.16 13.86 0 6.14.05 10.76.16 13.86.11 3.1.27 5.35.48 6.74.21 1.39.54 2.59.96 3.59 1.64 3.64 4.64 5.46 8.99 5.46 4.35 0 7.35-1.82 8.99-5.46zM196.96 1.18l-12.74 75.57h-10.81l-8.35-56.95-8.46 56.95h-10.7L133.16 1.18h9.53l8.88 59.41 8.35-59.41h10.28l8.35 58.34 8.88-58.34h9.53z">
                            </path>
                        </g>
                        <g>
                            <path 
                                className="pathComp" 
                                d="M13.37 100.72L0 84.43h8.43l8.43 10.32 8.51-10.32h8.43l-13.37 16.29v12.75h-7.08v-12.75zM40.05 112.09c-3.03-1.52-5.19-3.72-6.48-6.6-.88-1.92-1.32-4.1-1.32-6.54 0-2.3.42-4.43 1.28-6.38.85-1.92 2.1-3.56 3.76-4.92 1.66-1.36 3.67-2.39 6.03-3.09 2.36-.7 5-1.05 7.94-1.05 2.91 0 5.53.34 7.88 1.03 2.34.69 4.34 1.69 5.99 3.02 1.65 1.33 2.89 2.93 3.74 4.79.93 2.08 1.4 4.28 1.4 6.58 0 2.47-.49 4.73-1.48 6.79-1.32 2.8-3.48 4.94-6.5 6.42-3.02 1.48-6.71 2.22-11.07 2.22-4.42.01-8.14-.75-11.17-2.27zm17.83-5.02c1.81-.92 3.1-2.24 3.87-3.97.52-1.32.78-2.7.78-4.15 0-1.56-.27-2.98-.82-4.24-.8-1.73-2.09-3.04-3.89-3.93-1.8-.89-4-1.34-6.6-1.34-2.58 0-4.77.45-6.56 1.34-1.8.89-3.09 2.2-3.89 3.93-.55 1.26-.82 2.67-.82 4.24 0 1.45.27 2.84.82 4.15.79 1.73 2.1 3.05 3.91 3.97 1.81.92 4 1.38 6.58 1.38 2.6 0 4.81-.46 6.62-1.38zM78.53 110.92c-2.58-2.3-3.87-5.76-3.87-10.37V84.43h7.12v15.63c0 1.97.3 3.57.9 4.79a5.68 5.68 0 002.78 2.71c1.25.59 2.87.88 4.87.88s3.63-.29 4.87-.88c1.25-.59 2.17-1.49 2.78-2.71.6-1.22.9-2.82.9-4.79V84.43H106v16.12c0 4.61-1.29 8.06-3.87 10.37-2.58 2.3-6.51 3.46-11.81 3.46-5.28-.01-9.22-1.16-11.79-3.46zM122.17 102.82h-3.04v10.65h-7.12V84.43h17.07c2.63 0 4.86.44 6.68 1.32 1.82.88 3.11 2.15 3.85 3.83.49 1.1.74 2.4.74 3.91 0 1.67-.27 3.13-.82 4.36-.66 1.48-1.71 2.64-3.15 3.48-1.44.84-3.23 1.32-5.37 1.46l11.6 10.7h-9.26l-11.18-10.67zm-3.04-4.86h8.14c1.54 0 2.76-.16 3.66-.47.91-.31 1.55-.88 1.93-1.71.22-.47.33-1.14.33-2.02 0-.74-.11-1.33-.33-1.77-.36-.82-1.01-1.41-1.95-1.77-.95-.36-2.16-.53-3.64-.53h-8.14v8.27z">
                            </path>
                        </g>
                    </svg>
                </h1>
                <img 
                    src="ImageBackGround.jpeg"
                    alt="Header" 
                    className="imagesHeader"
                    data-testid="home-image"
                />
            </section>
            <section className="eventsContainerTitle" data-testid="events-title">
                <h2 className="titleListEvents">Events in your <a className="titleOtherColor">zone</a></h2>
            </section>
            <section>
                <ul className="eventsContainer">
                {events.map(event =>{
                    return (
                    <>
                        <Card 
                        key={event.id}
                        event={event} 
                        handleShowModal={handleShowModal}
                        setEventsToSell={setEventsToSell}
                        />
                    </>
                    )
                })}
                </ul>
            </section>
            {
                showModal 
                ?
                <ModalConected 
                showModal={showModal}
                eventsToSell={eventsToSell}
                handleCloseModal={handleCloseModal}
                />
                :
                null
            }     
        </section>
    )
}