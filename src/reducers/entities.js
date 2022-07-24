import pluralize from 'pluralize';

const initialState = {
  countries: [],
  country: {},
  parties: [],
  party_templates: [],
  promises: [],
}
const entities = (state = initialState, action) => {
  let name = ''
  switch (action.type) {
    case 'LOAD_ENTITIES_SUCCESS':
      name = pluralize(action.meta.previousAction.payload.request.modelName);
      return { ...state, [name]: action.payload.data }
    case 'LOAD_ENTITY_SUCCESS':
      name = action.meta.previousAction.payload.request.modelName;
      return { ...state, [name]: action.payload.data }
    default:
      return state;
  }
};

export default entities;
