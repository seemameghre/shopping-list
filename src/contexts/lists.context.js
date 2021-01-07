/* ListContext maintains the lists for a user 
  and provides functions that make backend calls to get and update lists.
  These functions also call reducer dispatch to update front end state */

import {createContext, useReducer} from "react"
import axios from "axios"

import reducer from "../reducers/lists.reducer"

export const ListsContext = createContext()

const initialState = {
    lists: [],
    error: null,
    loading: true
}
const LIST_API_URL = "http://localhost:5000/lists/"

export function ListsProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)
    
    async function getLists(){
        await axios.get(LIST_API_URL+"seema")
            .then(res => {
                dispatch({
                    type: "GET_LISTS",
                    payload: res.data.data
                    // payload: defaultList
                })
            })
            .catch(err => {
                dispatch({
                    type: "LISTS_ERROR",
                    payload: err.message
                })
            })
    }
    async function deleteList(listId){
        await axios.delete(LIST_API_URL+`id/${listId}`)
            .then(res => {
                dispatch({
                    type: "REMOVE",
                    payload: listId
                })
            })
            .catch(err => {
                dispatch({
                    type: "LISTS_ERROR",
                    payload: err.message
                })
            })
    }
    async function addList(list){
        await axios.post(LIST_API_URL+"seema/add", list)
            .then(res => {
                dispatch({
                    type: "ADD",
                    payload: list
                })
            })
            .catch(err => {
                dispatch({
                    type: "LISTS_ERROR",
                    payload: err.message
                })
            })
    }
    return(
        <ListsContext.Provider value={{
            lists: state.lists,
            error: state.error,
            loading: state.loading,
            getLists,
            deleteList,
            addList
        }}>
            {props.children}
        </ListsContext.Provider>
    )
}