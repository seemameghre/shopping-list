/* CatalogContext maintains the catalog for a user 
  and provides functions that make backend calls to get and update catalog.
  These functions also call reducer dispatch to update front end catalog state */

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
    function addCategory(newCategory){
        axios.post(CATALOG_API+"seema/add", newCategory)
            .then(res => {
                dispatch({
                    type:"ADD_CATEGORY",
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
    async function deleteCategory(categoryId){
        await axios.delete(CATALOG_API+`id/${categoryId}`)
            .then(res => {
                dispatch({
                    type: "REMOVE",
                    payload: categoryId
                })
            })
            .catch(err => {
                dispatch({
                    type: "CATALOG_ERR",
                    payload: err.message
                })
            })
    }
    async function updateCategory(updatedCategory){
        await axios.post(CATALOG_API+`update/${updatedCategory._id}`, updatedCategory)
        .then(res => {
            dispatch({
                type: "UPDATE_CATEGORY",
                payload: updatedCategory
            })
        })
        .catch(err => {
            dispatch({
                type: "CATALOG_ERR",
                payload: err.message
            })
        })
    }
    return(
        <CatalogContext.Provider value={{
            catalog:state.catalog,
            getCatalog,
            addCategory,
            deleteCategory,
            updateCategory
        }}>
            {props.children}
        </CatalogContext.Provider>
    )
}