const rooms = (state = {rooms: [], room:{}}, action) => {  
    switch (action.type) {
      case 'LOAD_ROOMS_SUCCESS':
        return {...state , rooms: action.payload.data}
      default:
        return state;
    }
  };
  
  export default rooms;