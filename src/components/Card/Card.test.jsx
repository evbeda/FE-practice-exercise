import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { Card } from "./Card";
import { CLICK_FOLLOW, reducerSample } from "../../reducer";
import thunk from "redux-thunk";


const testEvent = {
    "id": 5,
    "eventName": "FrontEnd con Gabi",
    "description": "urabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
    "imageUrl": "Gabi.png",
    "startDatetime": "2022-11-17T13:45:00Z",
    "endDateTime": "2022-11-17T16:00:00Z",
    "venue": "123456 Fake St.",
    "followers": 87,
    "followByMe": false,     
    "tickets": [
      {
        "id": 1,
        "quantity": 0,
        "price": 0,
        "name": "Free Ticket"
      }
    ]
}



let initialState = Object.assign({}, testEvent)
export const reducer = (state = [initialState], action) => {
  switch (action.type) {

    case CLICK_FOLLOW:
      
      
      let newState1 = Object.assign([], state)

      const index = newState1.findIndex(event => event.id == action.id)
      newState1[index].followByMe = !newState1[index].followByMe
      let change = newState1[index].followByMe ? 1 : -1
      newState1[index].followers += change
      state = newState1
      
      return state;
    default:
      return state;
    }
};


const renderWithRedux = (
  component,
  { store = createStore(reducer, applyMiddleware(thunk))} = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  };
};

describe('Card Component', () => {

  beforeEach(() => {
    renderWithRedux(<Card event={testEvent} />)
  });

  it('should render the Card component', () => {
    expect(screen.getByTestId('card-component'))
  });

  it('should shows the name of the event', () => {
    expect(screen.getByTestId('event-name').textContent).toEqual('FrontEnd con Gabi')
  });

  it('should render the heart button to follow', () => {
    expect(screen.getByTestId('heart-button')).toBeInTheDocument()
  });

  it('should shows the correct number of followers', () => {
    expect(screen.getByTestId('last-subcontent').textContent).toEqual(`${testEvent.followers} seguidores`)
  });

  it('should shows increse the number of followers after click the heart button', () => {

    const myButton = screen.getByTestId('heart-button')
    fireEvent.click(myButton)
    expect(screen.getByTestId('last-subcontent').textContent).toEqual(`${testEvent.followers + 1 } seguidores`)
  });

  // it('should shows increse the number of followers after click the heart button', () => {

  //   const myButton = screen.getByTestId('heart-button')
  //   fireEvent.click(myButton)
  //   expect(screen.getByTestId('last-subcontent').textContent).toEqual(`${testEvent.followers + 1} seguidores`)
  //   expect(screen.getByTestId('last-subcontent').textContent).toEqual(`${testEvent.followers + 1 } seguidores`)
  // });


});