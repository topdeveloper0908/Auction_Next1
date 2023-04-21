import { FunctionComponent, ReactNode } from 'react'
import Link from "next/link";
import { memo } from "react";

interface AlinkProps {
    href: string
    children: ReactNode
    className?: string,
    onClick?: () => void
}

const Alink: FunctionComponent<AlinkProps> = ({ href, children, className, onClick }) => {

    /**
     * On click handler
     * 
     * @param {MouseEvent} e 
     */
    function onClickHandler(event: React.MouseEvent<HTMLElement>): void {
        if (href == '#') {
            event.preventDefault();
        }

        if (typeof onClick == 'function') {
            onClick();
        }
    }

    return (
        <Link className={className} href={href} onClick={onClickHandler}>
            {children}
        </Link>
    )
}

export default memo(Alink);