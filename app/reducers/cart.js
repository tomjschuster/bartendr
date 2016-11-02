/*----------  INITIAL STATE  ----------*/

/* Data Model
cart: [{product: product, quantity: 1}, {product: product, quantity: 1} ]
*/

const hardCodedData = [
  {productId: 1,
    name: "Grey Goose",
    quantity: 2,
    price: 29.99
  },
  {productId: 2,
    name: "Jose Cuervo",
    quantity: 1,
    price: 9.99
  },
  {productId: 3,
    name: "McCallan 41",
    quantity: 1,
    price: 399.99
  },
  {productId: 4,
    name: "Moet Chandon",
    quantity: 1,
    price: 59.99
  }
];

const initialState =
[
  // {productId: 1,
  //   name: "Grey Goose",
  //   quantity: 2,
  //   price: 29.99
  // },
  // {productId: 2,
  //   name: "Jose Cuervo",
  //   quantity: 1,
  //   price: 9.99
  // },
  // {productId: 3,
  //   name: "McCallan 41",
  //   quantity: 1,
  //   price: 399.99
  // },
  // {productId: 4,
  //   name: "Moet Chandon",
  //   quantity: 1,
  //   price: 59.99
  // }
];

/*----------  ACTION TYPES  ----------*/
const RECEIVE_STATION_STATUS = 'RECEIVE_STATION_STATUS';

/*----------  ACTION CREATORS  ----------*/
export const receiveStationStatus = stations => ({
  type: RECEIVE_STATION_STATUS,
  stations
});

/*----------  THUNKS  ----------*/
export const loadStationStatus = () => dispatch => {

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_STATION_STATUS: return action.stations;
    default: return state;
  }
};
