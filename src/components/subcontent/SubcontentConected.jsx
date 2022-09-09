import React from "react";
import { connect } from "react-redux";
import { Subcontent } from "./Subcontent";

const mapStateToProps = (state) => {


    return {
        eventsStates: state
    };
};

export const SubcontentConnected = connect(mapStateToProps)(Subcontent);