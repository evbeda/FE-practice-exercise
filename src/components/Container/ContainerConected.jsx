import {getAllEvents} from "../../action/index"
import { connect } from "react-redux";
import {Container} from "./Container";

const eventStorage = (state) => {
    return{
        eventStorage: state
    }
};

const mapDispatchToProps = {
    getAllEvents:getAllEvents
};

const ContainerConected = connect(eventStorage, mapDispatchToProps)(Container);

export default ContainerConected;