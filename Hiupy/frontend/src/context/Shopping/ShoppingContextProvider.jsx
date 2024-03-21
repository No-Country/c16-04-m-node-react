import {useState} from 'react'
import ShoppingContext from './ShoppingContext'

const ShoppingContextProvider = ({children}) => {

const [list, setList] = useState([
    {
        product_name: "cafe",
        product_unit: "gramos",
        quantity: "250",
    }
])



const addOnClick = () => {
    const newList = ""
    setList([...list, newList])
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

export default ShoppingContextProvider
