import { ReactNode, FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBlog, faDesktop, faMagic, faStarOfDavid, faEnvelope, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

type SidebarProps = {
  children?: ReactNode
}
const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
}) => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link
                href="/"
            >
                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-text mx-3">Auction Dashboard</div>
                </a>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <Link
                    href="/"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span className='ml-2'>Home</span>
                    </a>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    href="/blog"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faBlog} />
                        <span className='ml-2'>Blog</span>
                    </a>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    href="/forum"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faDesktop} />
                        <span className='ml-2'>Forum</span>
                    </a>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <li className="nav-item">
                <Link
                    href="/howitworks"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faMagic} />
                        <span className='ml-2'>How it works</span>
                    </a>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    href="/"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faStarOfDavid} />
                        <span className='ml-2'>Site Rules</span>
                    </a>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    href="/contact"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className='ml-2'>Contact Us</span>
                    </a>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <li className="nav-item">
                <Link
                    href="/signin"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <span className='ml-2'>Sign In</span>
                    </a>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    href="/signup"                    
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className='ml-2'>Sign Up</span>
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar
