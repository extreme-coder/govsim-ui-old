const rooms = (state = {rooms: [], room:{}}, action) => {  
    switch (action.type) {
      case 'LOAD_ROOMS_SUCCESS':
        return {...state , rooms: action.payload.data}
      case 'LOAD_ROOM_SUCCESS':
        return {...state , room: action.payload.data}
      default:
        return state;
    }
  };
  
  export default rooms;