import {useReducer, createContext} from "react"

import axios from "axios"

import reducer from "../reducers/category.reducer"

export const CatalogContext = createContext()
const CATALOG_API = "http://localhost:5000/category/"

const initialState = {
    catalog: [],
    loading: true,
    error: null
}
export function CatalogProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)

    function getCatalog(){
        axios.get(CATALOG_API+"seema")
            .then(res => {
                dispatch({
                    type:"GET_CATALOG",
                    payload: res.data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "CATALOG_ERR",
                    payload: err
                })
            })
    }
    return(
        <CatalogContext.Provider value={{
            catalog:state.catalog,
            getCatalog
        }}>
            {props.children}
        </CatalogContext.Provider>
    )
}