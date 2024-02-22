<<<<<<< HEAD

export const SearchBar = ({placeholder}) => {
=======
>>>>>>> 4352ac74a86d662e890142f21e2656fc18f8162c
/* eslint-disable react/prop-types */
export const SearchBar = ({placeholder}) => {

<<<<<<< HEAD
    // const {placeholder} = props; // ???
=======
>>>>>>> 4352ac74a86d662e890142f21e2656fc18f8162c
    return (
        <div className=" flex w-full rounded-xl border border-light-grey">
            <div className="self-center p-1">
                <img src="/assets/images/search.svg" alt="search-icon"  />
            </div>
            <input type="text" placeholder={placeholder} className="placeholder:text-xs bg-transparent w-10/12 text-xs outline-none py-3" />
        </div>
    )
};