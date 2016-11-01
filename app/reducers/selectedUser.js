/*----------  INITIAL STATE  ----------*/
const initialState =
{

};

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
