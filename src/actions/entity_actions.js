import pluralize from 'pluralize';
import { createAction } from 'redux-actions';

export const getEntities = createAction('LOAD_ENTITIES', (name) => ({
  request: {
    url: `/${pluralize(name.replace('_', '-'))}`,
    modelName: name
  }
}));

export const getEntitiesByField = createAction('LOAD_ENTITIES', (name, fieldName, fieldVal) => ({
  request: {
    url: `/${pluralize(name.replace('_', '-'))}?${fieldName}=${fieldVal}`,
    modelName: name
  }
}));

export const getEntity = createAction('LOAD_ENTITY', (name, id) => ({
  request: {
    url: `/${pluralize(name.replace('_', '-'))}/${id}`,
    modelName: name
  }
}));

export const addEntity = createAction('ADD_ENTITY', (name, data, next) => ({
  request: {
    url: `/${pluralize(name.replace('_', '-'))}`,
    method: 'POST',
    data,
    modelName: name
  },
  options: {
    onSuccess({ getState, dispatch, response }) {
      if (next) {
        window.location = next;
      } else {
        // window.location = `/${pluralize(name)}`;
      }
    }
  }
}));

export const updateEntity = createAction('UPDATE_ENTITY', (name, data, next) => ({
  request: {
    url: `/${pluralize(name.replace('_', '-'))}/${data.id}`,
    method: 'PUT',
    data,
    modelName: name
  },
  options: {
    onSuccess({ getState, dispatch, response }) {
      if (next) {
        window.location = next;
      } else {
        window.location = `/${pluralize(name)}`;
      }
    }
  }
}));
