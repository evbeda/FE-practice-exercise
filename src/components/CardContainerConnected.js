import { connect } from "react-redux"
import { CardContainer } from "./CardContainer"

const connectCardContainer = (state) => {
    return {
        eventList: state.events
    }
}

export const CardContainerConnected = connect(
    connectCardContainer)(CardContainer)

