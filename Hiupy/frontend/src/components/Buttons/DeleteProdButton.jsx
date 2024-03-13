export const DeleteProdButton = ({onClick}) => {
  return (
    <div>
      <button onClick={onClick}>
        <img src="/assets/images/delete.png" className="w-[14px] h-[16px]"/>  
      </button>
    </div>
  )
}
