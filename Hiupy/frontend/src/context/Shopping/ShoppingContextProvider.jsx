import { useEffect, useState} from 'react'
import ShoppingContext from './ShoppingContext'

const ShoppingContextProvider = ({children}) => {

const [list, setList] = useState([])



const addOnClick = (productName) => {
    const newItem = {product_name:productName}
    setList([...list, { newItem }])
    console.log("console log en addOnClick",list)
}


    useEffect(()=>{
        addOnClick()
    },[])
    
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
