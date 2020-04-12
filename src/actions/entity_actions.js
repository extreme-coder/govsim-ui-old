import { createAction } from 'redux-actions';
import pluralize from 'pluralize'

export const getEntities = createAction('LOAD_ENTITIES', (name) => ({
    request: {
        url: '/' + pluralize(name.replace('_', '-')),
        modelName: name
    }
})
);

export const getEntity = createAction('LOAD_ENTITY', (name, id) => ({
    request: {
        url: '/' + pluralize(name.replace('_', '-')) + '/' + id,
        modelName: name
    }
})
);

export const addEntity = createAction('ADD_ENTITY', (name, data, next) => ({
    request: {
        url: '/' + pluralize(name.replace('_', '-')),
        method: 'POST',
        data: data,
        modelName: name
    },
    options: {
        onSuccess({ getState, dispatch, response }) {
            if (next) {
                window.location = next;
            } else {
                window.location = '/' + pluralize(name);
            }
        }
    }
})
);

export const updateEntity = createAction('UPDATE_ENTITY', (name, data) => ({
    request: {
        url: '/' + pluralize(name.replace('_', '-')) + '/' + data.id,
        method: 'PUT',
        data: data,
        modelName: name
    },
    options: {
        onSuccess({ getState, dispatch, response }) {
            window.location = '/' + pluralize(name);
        }
    }
})
);