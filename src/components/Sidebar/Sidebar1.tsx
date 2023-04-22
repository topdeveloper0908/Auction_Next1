import { ReactNode, FunctionComponent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog, faBlog, faDesktop, faMagic, faStarOfDavid, faEnvelope, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

type SidebarProps = {
  children?: ReactNode
}
const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
}) => {
    const router = useRouter();
    const [collapseOpen, setCollapseOpen] = useState(true);
    useEffect(()=>{
        if(
            router.pathname === '/new-auction' || 
            router.pathname === '/auctions' ||
            router.pathname === '/rating' ||
            router.pathname === '/purchase' ||
            router.pathname === '/watch' ||
            router.pathname === '/profile' ) {
                setCollapseOpen(true);
            }
    }, [])
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link
                href="/"
            >
                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-text mx-3">Auction Dashboard</div>
                </a>
            </Link>
    
            <li className={`nav-item ${collapseOpen ? 'active':''}`}>
                <a href='#' className={`nav-link ${collapseOpen?'':'collapsed'}`} onClick={(e) => {
                    e.preventDefault();
                    setCollapseOpen(!collapseOpen);
                }}>
                    <FontAwesomeIcon icon={faCog} />
                    <span className='ml-2'>Control Panel</span>
                </a>
                <div id="collapseTwo" className={`collapse ${collapseOpen?'show':''}`}>
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link href="/new-auction"><a className={`collapse-item ${router.pathname === '/new-auction' ? 'active':''}`}>New Auction</a></Link>
                        <Link href="/auctions"><a className={`collapse-item ${router.pathname === '/auctions' ? 'active':''}`}>My Auctions</a></Link>
                        <Link href="/rating"><a className={`collapse-item ${router.pathname === '/rating' ? 'active':''}`}>My Ratings</a></Link>
                        <Link href="/purchase"><a className={`collapse-item ${router.pathname === '/purchase' ? 'active':''}`}>My Purchases</a></Link>
                        <Link href="/watch"><a className={`collapse-item ${router.pathname === '/watch' ? 'active':''}`}>My Watchlist</a></Link>
                        <Link href="/profile"><a className={`collapse-item ${router.pathname === '/profile' ? 'active':''}`}>My Profile</a></Link>
                    </div>
                </div>
            </li>
    
            <hr className="sidebar-divider my-0" />
    
            <li className={`nav-item ${router.pathname === '/' ? 'active':''}`}>
                <Link
                    href="/"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span className='ml-2'>Home</span>
                    </a>
                </Link>
            </li>
    
            <li className={`nav-item ${router.pathname === '/blog' ? 'active':''}`}>
                <Link
                    href="/blog"
                    className="nav-link"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faBlog} />
                        <span className='ml-2'>Blog</span>
                    </a>
                </Link>
            </li>
    
            <li className={`nav-item ${router.pathname === '/forum' ? 'active':''}`}>
                <Link
                    href="/forum"
                    className="nav-link"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faDesktop} />
                        <span className='ml-2'>Forum</span>
                    </a>
                </Link>
            </li>
    
            <hr className="sidebar-divider" />
    
            <li className={`nav-item ${router.pathname === '/howitworks' ? 'active':''}`}>
                <Link
                    href="/howitworks"
                    className="nav-link"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faMagic} />
                        <span className='ml-2'>How it works</span>
                    </a>
                </Link>
            </li>
    
            <li className={`nav-item ${router.pathname === '/rules' ? 'active':''}`}>
                <Link
                    href="/rules"
                    className="nav-link"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faStarOfDavid} />
                        <span className='ml-2'>Site Rules</span>
                    </a>
                </Link>
            </li>
            <li className={`nav-item ${router.pathname === '/contact' ? 'active':''}`}>
                <Link
                    href="/contact"
                    className="nav-link"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className='ml-2'>Contact Us</span>
                    </a>
                </Link>
            </li>
    
            <hr className="sidebar-divider d-none d-md-block" />
    
            <li className={`nav-item ${router.pathname === '/logout' ? 'active':''}`}>
                <Link
                    href="/logout"
                    className="nav-link"
                >
                    <a className="nav-link">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className='ml-2'>Log Out</span>
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar
