import { createAction } from 'redux-actions';

export const getFamily = createAction('LOAD_FAMILY', (id) => ({
    request: {
      url: '/families/' + id
    }
  })
);

export const getFamilies = createAction('LOAD_FAMILIES', () => ({
  request: {
    url: '/families'
  }
})
);

export const addFamily = createAction('ADD_FAMILIES', (family) => ({
  request: {
    url: '/families',
    method: 'POST',
    data: family
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/families';
    }
  }
})
);

export const updateFamily = createAction('UPDATE_FAMILY', (family) => ({
  request: {
    url: '/families/' + family.id,
    method: 'PUT',
    data: family
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/families';
    }
  }
})
);