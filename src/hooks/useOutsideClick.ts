import { useEffect, useRef, useState } from "react";

export default function useOutsideClick(initialOpenState: boolean) {
    const [isOpen, setIsOpen] = useState<boolean>(initialOpenState);
    const refNode = useRef<HTMLElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (refNode.current && !refNode.current.contains(event.target as Node)) {
                setIsOpen(false);
                console.log(event.target);
            }
        };

        document.addEventListener("click", handleOutsideClick, true);

        return () => {
            document.removeEventListener("click", handleOutsideClick, true);
        };
    });

    return { refNode, isOpen, setIsOpen };
}
