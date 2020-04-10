const families = (state = {families: [], family:{}}, action) => {  
    switch (action.type) {
      case 'LOAD_FAMILIES_SUCCESS':
        return {...state , families: action.payload.data}
      case 'LOAD_FAMILY_SUCCESS':
        return {...state , family: action.payload.data}
      default:
        return state;
    }
  };
  
  export default families;