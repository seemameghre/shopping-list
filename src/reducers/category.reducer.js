
export default function reducer(state, action){
    switch(action.type){
        case "GET_CATALOG":
            return({
                ...state,
                catalog: action.payload,
                loading: false
            })
        case "ADD_CATEGORY":
            return {...state, catalog: [...state.catalog, action.payload]}
        case "REMOVE":
                return {...state, catalog: state.catalog.filter(category => category._id !== action.payload)};
        case "UPDATE_CATEGORY":
                    return {...state, catalog: 
                            state.catalog.map(category => {
                                if(category._id === action.payload._id)
                                    return action.payload
                                else
                                    return category
                            })}  
        case "CATALOG_ERR":
            return({
                ...state, error: action.payload
            })
        default: return({...state})
    }
}