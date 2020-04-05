import { createAction } from 'redux-actions';

export const getEmails = createAction('LOAD_EMAILS', () => ({
    request: {
        url: '/email-messages'
    }
  })
);

export const getEmail = createAction('LOAD_EMAIL', (id) => ({
  request: {
    url: '/email-messages/' + id
  }
})
);

export const addEmail = createAction('ADD_EMAIL', (email) => ({
    request: {
      url: '/email-messages',
      method: 'POST',
      data: email
    },
    options: {
      onSuccess({ getState, dispatch, response }) {        
        window.location = '/emails';
      }
    }
  })
);

export const updateEmail = createAction('UPDATE_EMAIL', (email) => ({
    request: {
      url: '/email-messages/' + email.id,
      method: 'PUT',
      data: email
    },
    options: {
      onSuccess({ getState, dispatch, response }) {        
        window.location = '/emails';
      }
    }
  })
);