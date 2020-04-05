const students = (state = {students: [], student: {student_class: [{class: 'aaaa'}, {class: 'bbbb'}]}}, action) => {  
    switch (action.type) {
      case 'LOAD_STUDENTS_SUCCESS':
        return {...state , students: action.payload.data}
      case 'LOAD_STUDENT_SUCCESS':
        return {...state , student: action.payload.data}
      default:
        return state;
    }
  };
  
  export default students;
  