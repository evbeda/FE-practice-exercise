import { connect } from "react-redux";
import { Ticket } from "./Ticket";


const mapStateToProps = (state) => {
    return {
      // number: state
      ticketInfo: state
    };
  };
  
const mapDispatchToProps = {
  // onUserClick: clickMe2
};
  
export const TicketConnected = connect(
    mapStateToProps, mapDispatchToProps
)(Ticket);
