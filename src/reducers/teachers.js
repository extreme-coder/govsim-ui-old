const teachers = (state = {teachers: [], teacher:{}}, action) => {  
    switch (action.type) {
      case 'LOAD_TEACHERS_SUCCESS':
        return {...state , teachers: action.payload.data}
      case 'LOAD_TEACHER_SUCCESS':
        return {...state , teacher: action.payload.data}
      default:
        return state;
    }
};
  
export default teachers;
  