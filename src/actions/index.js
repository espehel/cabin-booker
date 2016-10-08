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
