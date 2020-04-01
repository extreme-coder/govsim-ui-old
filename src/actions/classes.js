import { createAction } from 'redux-actions';

export const getClasses = createAction('LOAD_CLASSES', () => ({
    request: {
        url: '/classes'
    }
  })
);

export const getClass = createAction('LOAD_CLASS', (id) => ({
  request: {
    url: '/classes/' + id
  }
})
);

export const addClass = createAction('ADD_CLASS', (clas) => ({
    request: {
      url: '/classes',
      method: 'POST',
      data: clas
    },
    options: {
      onSuccess({ getState, dispatch, response }) {        
        window.location = '/classes';
      }
    }
  })
);

export const updateClass = createAction('UPDATE_CLASS', (clas) => ({
    request: {
      url: '/classes/' + clas.id,
      method: 'PUT',
      data: clas //spelled with one s so javascript doesn't get confused
    },
    options: {
      onSuccess({ getState, dispatch, response }) {        
        window.location = '/classes';
      }
    }
  })
);