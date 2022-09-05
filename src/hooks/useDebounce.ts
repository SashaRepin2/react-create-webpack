import { useEffect, useState } from "react";

function useDebounce(value: any, delay = 1000) {
    const [debounceValue, setDebounceValue] = useState<any>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
