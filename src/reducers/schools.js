const schools = (state = {schools: [], room:{}}, action) => { 
    switch (action.type) {
      case 'LOAD_SCHOOLS_SUCCESS':
        return {...state , schools: action.payload.data}
      case 'LOAD_SCHOOL_SUCCESS':
        return {...state , school: action.payload.data}
      default:
        return state;
    }
  };
  
  export default schools;