import axios from 'axios';

/*----------  INITIAL STATE  ----------*/

/* Data Model
cart: [{product: product, quantity: 1}, {product: product, quantity: 1} ]
*/

const hardCodedData = [
  { purchase_price: 40,
    quantity: 1,
    product: {id: 1, name: 'Grey Goose Vodka', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
  },
  { purchase_price: 40,
    quantity: 2,
    product: {id: 3, name: 'Tanqueray Gin', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
  },
  { purchase_price: 30,
    quantity: 1,
    product: {id: 4, name: 'Makers Mark', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
  },
  { purchase_price: 20,
    quantity: 5,
    product: {id: 5, name: 'Sprite', description: null, abv: 40, size: '750 ml', inventory: 1, photoUrl:'/martini-holder.jpg'}
  }
];
function findItem(cart, id) {
  return cart.find(item => item.product && item.product.id === id)
}


const initialState = hardCodedData;
// [
//   { purchase_price: 0,
//     quantity: 0,
//     product: {}
//   }
// ]

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
    let cart = [...state];
    let item = findItem(cart, action.productId);
    item.count = action.count;
    return cart;
    if (item) return
    default: return state;
  }
};

