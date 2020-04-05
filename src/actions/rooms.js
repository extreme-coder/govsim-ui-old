import { createAction } from 'redux-actions';

export const getRooms = createAction('LOAD_ROOMS', () => ({
    request: {
        url: '/rooms'
    }
  })
);

export const getRoom = createAction('LOAD_ROOM', (id) => ({
request: {
  url: '/rooms/' + id
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

export const updateRoom = createAction('UPDATE_ROOM', (room) => ({
  request: {
    url: '/rooms/' + room.id,
    method: 'PUT',
    data: room
  },
  options: {
    onSuccess({ getState, dispatch, response }) {        
      window.location = '/rooms';
    }
  }
})
);