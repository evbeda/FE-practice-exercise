import React from "react";
import { connect } from "react-redux";
import { clickHeartButton } from "../../action/heartButton";
import { HeartButton } from "./HeartButton";


const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

const mapDispatchToProps =  {
  clickHeartButton,
};


export const HeartButtonConnected = connect(mapStateToProps, mapDispatchToProps)(HeartButton);
