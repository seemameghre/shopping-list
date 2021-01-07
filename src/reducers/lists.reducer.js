/*this reducer function updates the lists state in front end
it is called after db call to reflect the changes */
const reducer = (state, action) => {
    switch(action.type){
        case "GET_LISTS":
            return {...state, lists: action.payload, loading: false}
        case "ADD": 
            return {...state, lists: [...state.lists, action.payload]}
        case "REMOVE":
            return {...state, lists: state.lists.filter(list => list._id !== action.payload)};
        case "EDIT":
            return {...state, lists:state.lists.map(list =>
                list.id === action.id ? action.payload : list
              )};
        case "LISTS_ERROR":
            return { ...state, error: action.payload}
        default:
            return state
    }
}
export default reducer