import React, { FC, useEffect, useState } from "react";

import Input from "@components/UI/Input";

import useDebounce from "@hooks/useDebounce";

interface ISearchProps {
    value: string;
    onChangeHandler: (value: string) => void;
    debounceTimeout?: number;
}

const Search: FC<ISearchProps> = ({ value, onChangeHandler, debounceTimeout = 500 }) => {
    const [filterValue, setFilterValue] = useState<string>(value);
    const debouncedValue = useDebounce(filterValue, debounceTimeout);

    const onChangeValueHandler = (value: string) => {
        setFilterValue(value);
    };

    useEffect(() => {
        onChangeHandler(debouncedValue);
    }, [debouncedValue]);

    return (
        <Input
            inputValue={filterValue}
            placeholderValue={"Введите название доски"}
            onChangeHandler={onChangeValueHandler}
        />
    );
};

export default Search;
