export const SearchBar = () => {
    return (
        <div className=" flex w-full rounded-xl border border-light-grey justify-around">
            <div className=" self-center">
                <img src="/assets/images/search.svg" alt="search-icon" />
            </div>
            <input type="text" placeholder="Inserta ingredientes" className="placeholder:text-[11px] bg-transparent w-full h-[40px] text-[11px] outline-none py-3" />
        </div>
    )
};