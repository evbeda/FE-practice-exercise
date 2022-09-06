import React, { useEffect, useState } from "react";


export const Container = ({eventStorage, getAllEvents}) =>{

    const [events, setEvets ] = useState([]);

    useEffect(() => {
        getAllEvents().then((result)=>{
            setEvets(result.payload)
        })    
    }, [])

    useEffect(() => {
        setEvets(eventStorage)
    }, [eventStorage])

    return(
        <>
            <h1>Hola Como Estas</h1>
        </>
    )
}