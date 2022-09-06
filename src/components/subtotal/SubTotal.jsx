import React from "react"
export const SubTotal = ( props ) =>{

    const{subTotal, fees} = props

    return(
        <div>
            <p>Subtotal <span>{subTotal}</span></p>
            <p>Fees <span>{fees}</span></p>
        </div>
    )
}