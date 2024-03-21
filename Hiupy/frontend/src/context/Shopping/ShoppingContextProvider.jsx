import {useState} from 'react'
import ShoppingContext from './ShoppingContext'

export const ShoppingContextProvider = ({children}) => {

const [list, setList] = useState([])



const addOnClick = () => {
    const newList = ""
    setList(newList)
}


const values = {
    list,
    addOnClick
}
  return (
    <ShoppingContext.Provider value={values}>
        {children}
    </ShoppingContext.Provider>
  )
}
