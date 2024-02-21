export const SearchBar = (props) => {
/* eslint-disable react/prop-types */

    const {placeholder} = props;
    return (
        <div className=" flex w-full rounded-xl border border-light-grey">
            <div className="self-center p-1">
                <img src="/assets/images/search.svg" alt="search-icon"  />
            </div>
            <input type="text" placeholder="Inserta ingredientes con los que quieras cocinar" className="placeholder:text-xs bg-transparent w-10/12 text-xs outline-none py-3" />
        </div>
    )
};