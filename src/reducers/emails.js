const emails = (state = {emails: [], email: {}}, action) => { 
    switch (action.type) {
      case 'LOAD_EMAILS_SUCCESS':
        return {...state , emails: action.payload.data}
      case 'LOAD_EMAIL_SUCCESS':
          return {...state , email: action.payload.data}
      default:
        return state;
    }
  };
  
  export default emails;