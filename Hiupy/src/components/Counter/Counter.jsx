import { useCallback, useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    //Usando el hook useCallBack memoizo la función y evito que se re-renderice, salvo que counter se actualice.
    const increment = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
        // console.log("Increment here: ", counter)
    }, [counter]);

    const decrement = useCallback(() => {
        if (counter >= 1) {
            setCounter((prevCounter) => prevCounter - 1)
            // console.log("Decrement here: ", counter)
        } else return
    }, [counter]);

    return (
        <div className="flex flex-row gap-3 items-center text-md text-botones">
            <button
                onClick={decrement}
                className="text-lg font-semibold p-1 border border-botones rounded-full"
            >
                -
            </button>
            <p>{counter}</p>
            <button
                onClick={increment}
                className="text-lg font-semibold p-1 border border-botones rounded-full"
            >
                +
            </button>
        </div>
    );
};
