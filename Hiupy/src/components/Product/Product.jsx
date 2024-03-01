import { Counter } from "../Counter"
//Componente reutilizable que se encarga de renderizar el producto en inventario
export const Product = ({product}) => {
  return (
    <div className="flex flex-row p-2 rounded-lg shadow-md hover:shadow-lg justify-between items-center text-xs">
        {/* <p>{product.img_url}</p> */}
        <p>{product.product_name}</p>
        <Counter/>
    </div>
  )
}
