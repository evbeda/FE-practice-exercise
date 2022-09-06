import { changeQuantityTicket} from "../../action/index"
import { connect } from "react-redux";
import { Modal } from "./Modal";

const eventStorage = (state) => {
    return{
        eventStorage: state
    }
};

const mapDispatchToProps = {
    changeQuantityTicket
};

const ModalConected = connect(eventStorage, mapDispatchToProps)(Modal);

export default ModalConected