export const reducerEvent = (state = {
                            modal:{
                              isOpen:false,
                              event:{
                                "id": 1,
                                "eventName": "Test Event 1",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
                                "imageUrl": "https://place-hold.it/200x200",
                                "startDatetime": "2022-10-15T13:45:00Z",
                                "endDateTime": "2022-10-15T16:00:00Z",
                                "venue": "123 Fake St.",
                                "followers": 156,
                                "tickets": [
                                  {
                                    "id": 1,
                                    "quantity": 100,
                                    "price": 14.56,
                                    "name": "General Ticket",
                                    "fee_type": "fixed",
                                    "fee": "1.50",
                                    "purchase": 1
                                  },
                                  {
                                    "id": 2,
                                    "quantity": 50,
                                    "price": 35.0,
                                    "name": "VIP Ticket",
                                    "fee_type": "percent",
                                    "fee": "5",
                                    "purchase": 0
                                  },
                                  {
                                    "id": 3,
                                    "quantity": 5,
                                    "price": 35.0,
                                    "name": "VIP Ticket",
                                    "fee_type": "none",
                                    "purchase": 1
                                  }
                                ]
                              }
                            },
                            events:[]
                          }, action) => {
    switch (action.type) {
      case "@createMoskApi":
        const newState = {...state, events:action.payload}
        return newState

    default:
        return state;
    }
    };
