import pluralize from 'pluralize'

const initialState = {
    rooms: [],
    room: {},
    students: [],
    student: {},
    families: [],
    family: {},
    classes: [],
    class: {},
    email_messages: [],
    email_message: {},
    teachers: [],
    teacher: {},
    school: {}
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