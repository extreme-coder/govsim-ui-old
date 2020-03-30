import { createAction } from 'redux-actions';

export const getRooms = createAction('LOAD_ROOMS', () => ({
    request: {
        url: '/rooms'
    }
  })
);

export const addRoom = createAction('ADD_ROOM', (room) => ({
  request: {
    url: '/rooms',
    method: 'POST',
    data: room
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/rooms';
    }
  }
})
);