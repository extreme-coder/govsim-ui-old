import { createAction } from 'redux-actions';

export const getSchools = createAction('LOAD_SCHOOLS', () => ({
    request: {
        url: '/schools'
    }
  })
);