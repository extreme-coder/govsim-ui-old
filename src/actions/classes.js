import { createAction } from 'redux-actions';

export const getClasses = createAction('LOAD_CLASSES', () => ({
    request: {
        url: '/classes'
    }
  })
);

export const addClass = createAction('ADD_CLASS', (clas) => ({
    request: {
      url: '/classes',
      method: 'POST',
      data: clas //spelled with one s so javascript doesn't get confused
    },
    options: {
      onSuccess({ getState, dispatch, response }) {        
        window.location = '/classes';
      }
    }
  })
);