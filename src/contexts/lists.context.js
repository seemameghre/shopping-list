//ListContext provides the lists for a user and 
//functions that make backend calls. 
//These functions also call dispatch function of reducer to update front end state

import {createContext, useReducer} from "react"
import axios from "axios"

import reducer from "../reducers/lists.reducer"

export const ListsContext = createContext()

// const defaultList = [
//     {description: "Sample list", shoppingdate: new Date(), createddate: new Date() }
// ]
const initialState = {
    lists: [],
    error: null,
    loading: true
}
const LIST_API_URL = "http://localhost:5000/lists/"

export function ListsProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)
    
    function getLists(){
        axios.get(LIST_API_URL+"seema")
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
                    payload: err
                })
            })
    }
    function deleteList(listId){
        axios.delete(LIST_API_URL+`id/${listId}`)
            .then(res => {
                dispatch({
                    type: "REMOVE",
                    payload: listId
                })
            })
            .catch(err => {
                dispatch({
                    type: "LISTS_ERROR",
                    payload: err
                })
            })
    }
    function addList(list){
        axios.post(LIST_API_URL+"seema/add", list)
            .then(res => {
                dispatch({
                    type: "ADD",
                    payload: list
                })
            })
            .catch(err => {
                dispatch({
                    type: "LISTS_ERROR",
                    payload: err
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