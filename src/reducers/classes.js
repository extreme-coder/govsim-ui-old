const classes = (state = {classes: []}, action) => { 
    switch (action.type) {
      case 'LOAD_CLASSES_SUCCESS':
        return {...state , classes: action.payload.data}
      case 'LOAD_CLASS_SUCCESS':
          return {...state , class: action.payload.data}
      default:
        return state;
    }
  };
  
  export default classes;