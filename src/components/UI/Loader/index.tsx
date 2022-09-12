import React from "react";

import "./Loader.scss";

interface ILoaderProps {
    position?: "absolute" | "fixed" | "relative";
}

const Loader: React.FC<ILoaderProps> = ({ position = "absolute" }) => {
    return (
        <svg
            style={{
                position,
            }}
            className={"spinner"}
            viewBox="0 0 50 50"
        >
            <circle
                className={"spinner__path"}
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
            ></circle>
        </svg>
    );
};

export default Loader;
