const students = (state = {students: []}, action) => {  
    switch (action.type) {
      case 'LOAD_STUDENTS_SUCCESS':
        return {...state , students: action.payload.data}
      default:
        return state;
    }
  };
  
  export default students;
  