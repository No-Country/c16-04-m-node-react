import search from "../../assets/images/search.svg";

export const SearchBar = () => {
    return (
        <div className=" flex w-full rounded-xl border border-light-grey justify-around">
            <div className=" self-center">
                <img src={search} alt="search-icon" />
            </div>
            <input type="text" placeholder="Inserta ingredientes con los que quieras cocinar" className="placeholder:text-xs bg-transparent w-10/12 text-xs outline-none py-3" />
        </div>
    )
};