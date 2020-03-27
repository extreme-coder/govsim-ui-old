const schools = (state = {schools: []}, action) => { 
    switch (action.type) {
      case 'LOAD_SCHOOLS_SUCCESS':
        return {...state , schools: action.payload.data}
      default:
        return state;
    }
  };
  
  export default schools;