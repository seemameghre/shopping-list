import React,{useContext, useState} from 'react'
import ManageCategory from "./manage-categories.component"
import {CatalogContext} from "../contexts/catalog.context"
import ManageItems from './manage-items.component'

export default function ManageCatalog(props) {
    const {catalog, loading, addCategory, deleteCategory, updateCategory} = useContext(CatalogContext)
    const [currentCategoryId, setCurrentCategoryId] = useState(catalog[0]._id)
   
    function getCurrentCategory(){
        return catalog.find(category => category._id === currentCategoryId)
    }
    function onDelete(id){
        const deletedCategoryIndex = catalog.findIndex(category => category._id === id)
        //if deleting first category, set current category to 2nd category
        //Otherwise set current category to first category in catalog
        if(deletedCategoryIndex === 0){
            setCurrentCategoryId(catalog[1]._id)
        }else{
            setCurrentCategoryId(catalog[0]._id)
        }
        deleteCategory(id)
    }
    function addItem(newItem){
        let updatedCategory = getCurrentCategory()
        updatedCategory.items = [...updatedCategory.items, newItem]
        updateCategory(updatedCategory)
    }
    function deleteItem(deletedItem){
        let updatedCategory = getCurrentCategory()
        updatedCategory.items = updatedCategory.items.filter(item => item === deletedItem)
        updateCategory(updatedCategory)
    }
    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <>
                <ManageCategory 
                    catalog={catalog} 
                    addCategory={addCategory} 
                    onDelete={onDelete}
                    setCurrentCategoryId={setCurrentCategoryId} 
                />
                <ManageItems items={currentCategoryId === null ? [] : getCurrentCategory().items} 
                    addItem={addItem}
                    deleteItem={deleteItem}
                />
                </>
            }
        </div>
    )
}