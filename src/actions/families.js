import { createAction } from 'redux-actions';

export const getFamilies = createAction('LOAD_FAMILIES', (id) => ({
request: {
  url: '/families/' + id
}
})
);

export const addFamilies = createAction('ADD_FAMILIES', (family) => ({
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