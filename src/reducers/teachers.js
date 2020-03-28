const teachers = (state = {teachers: []}, action) => {  
    switch (action.type) {
      case 'LOAD_TEACHERS_SUCCESS':
        return {...state , teachers: action.payload.data}
      default:
        return state;
    }
  };
  
  export default teachers;
  