import React from "react";

export default function useOutsideClick(initialOpenState: boolean) {
    const [isOpen, setIsOpen] = React.useState<boolean>(initialOpenState);
    const refNode = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (refNode.current && !refNode.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick, true);

        return () => {
            document.removeEventListener("click", handleOutsideClick, true);
        };
    });

    return { refNode, isOpen, setIsOpen };
}
