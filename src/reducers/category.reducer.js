
export default function reducer(state, action){
    switch(action.type){
        case "GET_CATALOG":
            return({
                ...state,
                catalog: action.payload,
                loading: false
            })
        case "CATALOG_ERR":
            return({
                ...state, error: action.error
            })
        default: return({...state})
    }
}