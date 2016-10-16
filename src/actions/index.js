import fetch from 'isomorphic-fetch'

export const REQUEST_CABINS = 'REQUEST_CABINS';
const requestCabins = () => {
  return {
    type: REQUEST_CABINS,
  }
};

export const RECEIVE_CABINS = 'RECEIVE_CABINS';
const receiveCabins = cabins => {
  return {
    type: RECEIVE_CABINS,
    cabins
  }
};

export const REQUEST_BOOKING = 'REQUEST_BOOKING';
const requestBooking = () => {
  return {
    type: REQUEST_BOOKING,
  }
};

export const RECEIVE_BOOKING_ACCEPTANCE = 'RECEIVE_BOOKING_ACCEPTANCE';
const receiveBookingAcceptance = (data) => {
  return {
    type: RECEIVE_BOOKING_ACCEPTANCE,
    cabin: data.cabin,
    date: data.date
  }
};

export const RECEIVE_BOOKING_REFUSAL = 'RECEIVE_BOOKING_REFUSAL';
const receiveBookingRefusal = (data) => {
  return {
    type: RECEIVE_BOOKING_REFUSAL,
    cabin: data.cabin,
    date: data.date
  }
};

export const bookCabins = (cabinid, userid, date) => {
  console.log(date);
  return dispatch => {
    dispatch(requestBooking());
    return fetch(`/api/cabins/${cabinid}?userid=${userid}&date=${date}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json()
      })
      .then(json => {
        if (json.available) {
          dispatch(receiveBookingAcceptance(json))
        } else {
          dispatch(receiveBookingRefusal(json));
        }
      })
  }
};


export const fetchCabins = (user) => {

  return (dispatch) => {
    dispatch(requestCabins());
    return fetch(`/api/cabins/${user.id}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
        dispatch(receiveCabins(json));
      })
  }
};
