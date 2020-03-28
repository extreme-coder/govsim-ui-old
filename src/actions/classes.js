import { createAction } from 'redux-actions';

export const getClasses = createAction('LOAD_CLASSES', () => ({
    request: {
        url: '/classes'
    }
  })
);